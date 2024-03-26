import { StatusCodes } from "http-status-codes";
import productsModel from "../models/products.js";
import productsSchema from "../schemas/products.js";

const getProds = async (req, res) => {
	try {
		const data = await productsModel.find();
		res.status(StatusCodes.OK).send({
			message: "OK",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const createProd = async (req, res) => {
	try {
		const { error } = productsSchema.validate(req.body, { abortEarly: false });
		if (error) {
			const err = error.details.map((e) => e.message);
			return res.status(StatusCodes.BAD_GATEWAY).json({
				message: err,
			});
		}
		const isExist = await productsModel.findOne({ title: req.body.title });
		if (isExist) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: "Product already exists",
			});
		}
		const data = await productsModel.create({
			...req.body,
			slug: req.body.title
				.toLowerCase()
				.split(" ")
				.join("-")
				.concat("_" + Math.ceil(Math.random() * 100)),
		});
		res.status(StatusCodes.OK).send({
			message: "Created",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const getProdById = async (req, res) => {
	try {
		const data = await productsModel.findOne({ _id: req.params.id });
		res.status(StatusCodes.OK).send({
			message: "OK",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const updateProdById = async (req, res) => {
	try {
		const { error } = productsSchema.validate(req.body, { abortEarly: false });
		if (error) {
			const err = error.details.map((e) => e.message);
			return res.status(StatusCodes.BAD_GATEWAY).json({
				message: err,
			});
		}
		const product = await productsModel.findOne({ _id: req.params.id });
		const isExist = await productsModel.findOne({ title: req.body.title });
		if (isExist && product.title !== req.body.title) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: "Product already exists",
			});
		}

		const data = await productsModel.findOneAndUpdate(
			{ _id: req.params.id },
			{
				...req.body,
				slug: req.body.title
					.toLowerCase()
					.split(" ")
					.join("-")
					.concat("_" + Math.ceil(Math.random() * 100)),
			},
			{ new: true }
		);
		res.status(StatusCodes.OK).send({
			message: "Updated",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const deleteProdById = async (req, res) => {
	try {
		const data = await productsModel.findOneAndDelete({ _id: req.params.id });
		res.status(StatusCodes.OK).send({
			message: "Deleted",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

export { getProds, getProdById, createProd, updateProdById, deleteProdById };
