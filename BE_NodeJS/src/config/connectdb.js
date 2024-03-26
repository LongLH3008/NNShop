import mongoose from "mongoose";

export const connectDB = async (uri) => {
	try {
		await mongoose.connect(uri);
		console.log("Connected to database " + uri);
	} catch (error) {
		console.log(error);
	}
};
