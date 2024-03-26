import mongoose, { Schema } from "mongoose";

const personSchema = new Schema(
	{
		_id: Schema.Types.ObjectId,
		name: String,
		age: Number,
		stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const storySchema = new Schema(
	{
		author: { type: Schema.Types.ObjectId, ref: "Person" },
		title: String,
		fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const Story = mongoose.model("Story", storySchema);
export const Person = mongoose.model("Person", personSchema);
