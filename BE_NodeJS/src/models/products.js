import mongoose, { Schema } from "mongoose";
import defaultIMG from "../assets/defaultIMG.jpg";

const schema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unqiue: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		discountPercentage: {
			type: Number,
			default: 0,
			required: true,
		},
		rating: {
			type: Number,
			default: 0,
		},
		stock: {
			type: Number,
			default: 0,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Categories",
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
		images: {
			type: Array,
			default: [defaultIMG, defaultIMG, defaultIMG, defaultIMG],
		},
		sizes: {
			type: Array,
			default: [],
		},
		colors: {
			type: Array,
			default: [],
		},
		tags: {
			type: Array,
			default: [],
		},
		featured: {
			type: Boolean,
			default: false,
		},
		slug: {
			type: String,
			unqiue: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("Product", schema);
