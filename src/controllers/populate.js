import mongoose from "mongoose";
import { Person, Story } from "../models/populate.js";

export const demoPopulate = async (req, res) => {
	try {
		const author = await new Person({
			_id: new mongoose.Types.ObjectId(),
			name: "Ian Fleming",
			age: 50,
		}).save();

		const story = await new Story({
			title: "Casino Royale",
			author: author._id,
		}).save();
	} catch (error) {
		console.log(error);
	}
};
