const express = require("express");

const {
    postUpload,
    showAllPosts,
    detail,
    editPost,
    deletePost,
    upload,
    recommendPost,
    unrecommendPost,
} = require("./controller.js");
const validations = require("../../middlewares/validations");
const postRouter = express.Router();

postRouter.post(
    "/post/:category",
    validations,
    upload.single("img"),
    postUpload
);
postRouter.get("/post", showAllPosts);
postRouter.get("/post/:postId", detail);
postRouter.patch("/post/:postId", editPost);
postRouter.delete("/post/:postId", deletePost);
postRouter.post("/post/recommend/:postId", validations, recommendPost);
postRouter.delete("/post/recommend/:postId", unrecommendPost);

module.exports = { postRouter };
