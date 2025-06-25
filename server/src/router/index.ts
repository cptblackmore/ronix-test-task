import Router from "express";
import multer from "multer";

import {
  createComment,
  createPost,
  getPostById,
  getPosts,
  likePost,
} from "../controllers/post.controller";
import { verifyApiKey } from "../middleware/verifyApiKey";

const upload = multer({ dest: "uploads/" });

export const router = Router();

router.use(verifyApiKey);

router.get("/posts", getPosts);
router.get("/posts/:postId", getPostById);
router.post("/posts", upload.single("image"), createPost);
router.post("/posts/:postId/comments", createComment);
router.post("/posts/:postId/likes", likePost);
