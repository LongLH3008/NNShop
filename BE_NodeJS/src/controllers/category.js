import { StatusCodes } from "http-status-codes";
import cateModel from "../models/category.js";
import productsModel from "../models/products.js";
import categorySchema from "../schemas/category";

const getCates = async (req, res) => {
	try {
		const data = await cateModel.find();
		if (data.length === 0) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: "There are no categories",
			});
		}
		res.status(StatusCodes.OK).json({
			message: "OK",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const createCate = async (req, res) => {
	try {
		const { name } = req.body;
		const { error } = categorySchema.validate(req.body, { abortEarly: false });
		if (error) {
			const err = error.details.map((e) => e.message);
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: err,
			});
		}
		const isExist = await cateModel.findOne({ name: name });
		if (isExist) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: `Category ${name} is already exists`,
			});
		}
		const data = await cateModel.create({
			...req.body,
			slug: name.split(" ").join("-"),
		});
		res.status(StatusCodes.OK).json({
			message: "Created",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const getCateById = async (req, res) => {
	try {
		const data = await cateModel.findOne({ _id: req.params.id });
		const products = await productsModel.find({ category: req.params.id });
		if (!data) {
			return res.status(StatusCodes.NOT_FOUND).json({
				message: `Category ${req.params.id} does not exist`,
			});
		}
		res.status(StatusCodes.OK).json({
			message: "OK",
			data,
			products,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const updateCateById = async (req, res) => {
	try {
		const { name } = req.body;
		const { error } = categorySchema.validate(req.body, { abortEarly: false });
		if (error) {
			const err = error.details.map((e) => e.message);
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: err,
			});
		}
		const cate = await cateModel.findOne({ _id: req.params.id });
		console.log(cate);
		const isExist = await cateModel.findOne({ name: name });
		if (isExist && cate.name != name) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: `Category ${name} is already exists`,
			});
		}
		const data = await cateModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
		res.status(StatusCodes.OK).json({
			message: "Updated",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

const deleteCateById = async (req, res) => {
	try {
		const data = await cateModel.findOneAndDelete({ _id: req.params.id });
		if (!data) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				message: `Category ${req.params.id} does not exist`,
			});
		}
		res.status(StatusCodes.OK).json({
			message: "Deleted",
			data,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: error,
		});
	}
};

export { getCates, getCateById, createCate, updateCateById, deleteCateById };
