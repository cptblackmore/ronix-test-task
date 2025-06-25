import { Post } from "../models/post.model";

export interface PostDto {
  id: string;
  postedAt: Date;
  title: string;
  image: string;
  comments: { postedAt: Date; text: string }[];
  likes: number;
}

export const mapPost = (post: Post): PostDto => ({
  id: post._id.toString(),
  postedAt: post.postedAt,
  title: post.title,
  image: post.image,
  comments: post.comments,
  likes: post.likes,
});
