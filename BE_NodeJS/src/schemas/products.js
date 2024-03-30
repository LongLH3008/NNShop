import Joi from "joi";

const productSchema = Joi.object({
	title: Joi.string().required().messages({
		"any.required": "Title required",
		"string.empty": "Title do not empty",
	}),
	description: Joi.string().required().messages({
		"any.required": "Description required",
		"string.empty": "Description do not empty",
	}),
	price: Joi.number().min(50).max(5000).required().messages({
		"any.required": "Price required",
		"number.empty": "Price do not empty",
		"number.min": "Price must at least {#limit} $",
		"number.max": "Price must at most {#limit} $",
	}),
	discountPercentage: Joi.number().min(0).max(100).required().messages({
		"any.required": "Discount required",
		"number.empty": "Discount do not empty",
		"number.min": "Discount must at least {#limit} %",
		"number.max": "Discount must at most {#limit} %",
	}),
	stock: Joi.number().required().messages({
		"any.required": "Stock required",
		"number.empty": "Stock do not empty",
	}),
	brand: Joi.string().required().messages({
		"any.required": "Brand required",
		"string.empty": "Brand do not empty",
	}),
	category: Joi.string().required().messages({
		"any.required": "Category required",
		"string.empty": "Category do not empty",
	}),
	thumbnail: Joi.string().required().messages({
		"any.required": "Thumbnail required",
		"string.empty": "Thumbnail do not empty",
	}),
	images: Joi.array().items(Joi.string()).required().min(4).messages({
		"any.required": "Images are required",
		"array.min": "At least {#limit} image",
		"array.base": "Images must be an array",
		"array.includesRequiredUnknowns": "Each item in the array must be a string",
		"string.base": "Each image must be a string",
	}),
	sizes: Joi.array().items(Joi.string()).required().min(3).messages({
		"any.required": "Size are required",
		"array.min": "At least {#limit} sizes",
		"array.base": "Size must be an array",
		"array.includesRequiredUnknowns": "Each item in the array must be a string",
		"string.base": "Each size must be a string",
	}),
	colors: Joi.array().items(Joi.string()).required().min(3).messages({
		"any.required": "Color are required",
		"array.min": "At least {#limit} colors",
		"array.base": "Colors must be an array",
		"array.includesRequiredUnknowns": "Each item in the array must be a string",
		"string.base": "Each color must be a string",
	}),
	tag: Joi.array().items(Joi.string()).max(3).messages({
		"any.required": "Tag are required",
		"array.min": "At most {#limit} Tags",
		"array.base": "Tags must be an array",
		"array.includesRequiredUnknowns": "Each item in the Tags must be a string",
		"string.base": "Each Tag must be a string",
	}),
	featured: Joi.boolean().messages({
		"any.base": "Featured must be a boolean",
	}),
});

export default productSchema;
