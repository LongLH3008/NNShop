import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			empty: false,
		},
		password: {
			type: String,
			required: true,
			empty: false,
			minlength: 6,
		},
		name: {
			type: String,
			required: true,
			maxlength: 30,
			minlength: 3,
			empty: false,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		avatar: {
			type: String,
			default: "../assets/defaultAvatar.jpg",
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("User", userSchema);
