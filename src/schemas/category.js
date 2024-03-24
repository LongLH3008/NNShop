import Joi from "joi";

const categorySchema = Joi.object({
	name: Joi.string().required().messages({
		"any.required": "Name is required",
		"string.empty": "Name do not empty",
	}),
});

export default categorySchema;
