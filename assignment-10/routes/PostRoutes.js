const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.post("/posts", async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("authorId");

    res.json(posts);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {

    await Post.findByIdAndDelete(req.params.id);

    res.json({
      message: "Post deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

module.exports = router;