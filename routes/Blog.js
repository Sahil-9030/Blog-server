const express = require("express");
const router = express.Router();

//import controllers
const {createComment} = require("../controllers/comment");
const {createPost} = require("../controllers/post");
const {getAllPosts} = require("../controllers/post");
const {likePost,unlikePost} = require("../controllers/like");

//mapping create
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts/get",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;