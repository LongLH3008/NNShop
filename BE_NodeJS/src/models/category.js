import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		slug: {
			type: String,
			unique: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("Category", categorySchema);
