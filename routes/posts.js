// Posts Routes - Express router for blog posts

const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

// GET /api/posts - Get all blog posts
router.get("/", postsController.getAllPosts);

// GET /api/posts/:id - Get specific blog post
router.get("/:id", postsController.getPostById);

// POST /api/posts - Create new blog post
router.post("/", postsController.createPost);

// PUT /api/posts/:id - Update existing blog post
router.put("/:id", postsController.updatePost);

// DELETE /api/posts/:id - Delete blog post
router.delete("/:id", postsController.deletePost);

module.exports = router;
