import type { RequestHandler } from "express";
import { z } from "zod";

import { PostService } from "../services/post.service";
import { mapPost, PostDto } from "../dtos/post.dto";

const PostSchema = z.object({
  title: z.string().min(1).optional(),
});

const CommentSchema = z.object({
  text: z.string().min(1, "Comment can't be empty"),
});

type PostRequestParams = Record<string, never>;
type PostRequestQuery = Record<string, never>;
type PostRequestBody = {
  title?: string;
};

export const createPost: RequestHandler<
  PostRequestParams,
  unknown,
  PostRequestBody,
  PostRequestQuery
> = async (req, res) => {
  const result = PostSchema.safeParse(req.body);
  if (!result.success) {
    console.error(result.error);
    res.status(400).json({ error: "Invalid data" });
    return;
  }

  const title = result.data.title;
  const file = req.file;

  if (!title && !file) {
    res.status(400).json({
      error: "Need to provide title or image",
    });
    return;
  }

  try {
    const postDoc = await PostService.create({
      title: title || "",
      image: file ? `/uploads/${file.filename}` : "",
    });

    const post = postDoc.toObject();

    res.status(201).json(mapPost(post));
  } catch (e) {
    res.status(500).json({
      error: e instanceof Error ? e.message : "Unknown error",
    });
  }
};

type GetPostsParams = Record<string, never>;
type GetPostsQuery = Record<string, never>;
type GetPostsReqBody = undefined;
type GetPostsResBody = PostDto[] | { error: string };

export const getPosts: RequestHandler<
  GetPostsParams,
  GetPostsResBody,
  GetPostsReqBody,
  GetPostsQuery
> = async (req, res) => {
  try {
    const posts = await PostService.getAll();
    const mappedPosts = posts.map(mapPost);
    res.status(200).json(mappedPosts);
  } catch (e) {
    res.status(500).json({
      error: e instanceof Error ? e.message : "Unknown error",
    });
  }
};

export const getPostById: RequestHandler<
  { postId: string },
  PostDto | { error: string }
> = async (req, res) => {
  try {
    const post = await PostService.getById(req.params.postId);
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    res.status(200).json(mapPost(post.toObject()));
    return;
  } catch (e) {
    res.status(500).json({
      error: e instanceof Error ? e.message : "Unknown error",
    });
    return;
  }
};

type CreateCommentParams = { postId: string };
type CreateCommentBody = { text: string };
type CreateCommentRes = { success: true } | { error: string };

export const createComment: RequestHandler<
  CreateCommentParams,
  CreateCommentRes,
  CreateCommentBody
> = async (req, res) => {
  const { postId } = req.params;

  const result = CommentSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid comment text" });
    return;
  }

  try {
    const updated = await PostService.addComment(postId, {
      text: result.data.text,
      postedAt: new Date(),
    });

    if (!updated) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({
      error: e instanceof Error ? e.message : "Unknown error",
    });
  }
};

export const likePost: RequestHandler<
  { postId: string },
  PostDto | { error: string }
> = async (req, res) => {
  try {
    const post = await PostService.incrementLikes(req.params.postId);
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.status(200).json(mapPost(post.toObject()));
  } catch (e) {
    res
      .status(500)
      .json({ error: e instanceof Error ? e.message : "Unknown error" });
  }
};
