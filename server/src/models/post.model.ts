import { InferSchemaType, model, Schema, Types } from "mongoose";

export const PostSchema = new Schema(
  {
    postedAt: { type: Date, required: true },
    title: { type: String, default: "" },
    comments: [
      {
        postedAt: { type: Date, required: true },
        text: { type: String, required: true },
      },
    ],
    likes: { type: Number, required: true },
    image: { type: String, default: "" },
  },
  {
    minimize: false,
  },
);

export const PostModel = model("Post", PostSchema);

export type Post = InferSchemaType<typeof PostSchema> & { _id: Types.ObjectId };
