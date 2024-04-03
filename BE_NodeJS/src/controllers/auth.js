import User from "../models/user.js";
import { signinSchema, signupSchema } from "../schemas/user.js";
import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
	try {
		const { email, password, name, avatar } = req.body;
		const { error } = signupSchema.validate(req.body, { abortEarly: false });
		if (error) {
			const err = error.details.map(({ message, path }) => ({ message, path: path[0] }));
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				err,
			});
		}
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				err: [
					{
						path: "email",
						message: "Email already exists",
					},
				],
			});
		}
		const hashPassword = await bcryptjs.hash(password, 10);
		const newUser = await User.create({
			name,
			email,
			password: hashPassword,
			avatar,
		});
		newUser.password = undefined;
		res.status(200).json({
			message: "Signup Success",
			data: newUser,
		});
	} catch (error) {
		console.log("Error: " + error.message);
	}
};

export const signin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const { error } = signinSchema.validate(req.body, { abortEarly: false });
		if (error) {
			const err = error.details.map(({ message, path }) => ({ message, path: path[0] }));
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				err,
			});
		}
		const userExist = await User.findOne({ email: email });
		if (!userExist) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				err: [
					{
						path: "email",
						message: "User does not exists",
					},
				],
			});
		}
		const checkPassword = await bcryptjs.compare(password, userExist.password);
		if (!checkPassword) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				err: [
					{
						path: "password",
						message: "Wrong password",
					},
				],
			});
		}
		const token = jwt.sign({ userId: userExist._id }, "123456");
		res.status(200).json({
			message: "Welcome",
			user: userExist,
			token,
		});
	} catch (error) {
		res.status(400).json({
			error: "fafwefewf",
		});
	}
};

export const logout = async (req, res) => {};
