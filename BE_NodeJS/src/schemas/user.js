import Joi from "joi";

const signupSchema = Joi.object({
	name: Joi.string().min(3).max(30).messages({
		"string.empty": "Name do not empty",
		"string.min": "Name must be at least {#limit} characters",
		"string.max": "Name must be at most {#limit} characters",
	}),
	email: Joi.string().email().required().messages({
		"any.required": "Email required",
		"string.empty": "Email do not empty",
		"string.email": "Email invalid",
	}),
	password: Joi.string().min(6).max(30).required().messages({
		"any.required": "Password required",
		"string.empty": "Password do not empty",
		"string.min": "Password must be at least {#limit} characters",
		"string.max": "Password must be at most {#limit} characters",
	}),
	// .valid(Joi.ref('...')) => So sánh tham chiếu đến 1 giá trị
	confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
		"any.only": "Password not match",
	}),
	avatar: Joi.string().uri().message({
		"string.uri": "Avartar URI invalid",
	}),
});

const signinSchema = Joi.object({
	email: Joi.string().email().required().messages({
		"any.required": "Email required",
		"string.email": "Email invalid",
	}),
	password: Joi.string().required().messages({
		"any.required": "Password required",
	}),
});

export { signupSchema, signinSchema };
