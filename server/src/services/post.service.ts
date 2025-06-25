import { PostModel } from "../models/post.model";

interface CreatePostArgs {
  title: string;
  image: string;
}

export const PostService = {
  async create({ title, image }: CreatePostArgs) {
    const newPost = await PostModel.create({
      postedAt: new Date().toISOString(),
      title,
      image,
      likes: 0,
      comments: [],
    });

    return newPost;
  },

  async getAll() {
    return PostModel.find().sort({ postedAt: -1 }).exec();
  },

  async getById(postId: string) {
    return PostModel.findById(postId);
  },

  async addComment(postId: string, comment: { text: string; postedAt: Date }) {
    return PostModel.findByIdAndUpdate(
      postId,
      { $push: { comments: comment } },
      { new: true },
    );
  },

  async incrementLikes(postId: string) {
    return PostModel.findByIdAndUpdate(
      postId,
      { $inc: { likes: 1 } },
      { new: true },
    );
  },
};
