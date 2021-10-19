const express = require("express");
const router = express.Router();
const { Post, Comment, User } = require("../models");

// base url === /

// Index
router.get("/", async function (req, res) {
    try {
        const allPosts = await Post.find({});
        const context = {
            posts: allPosts
        };
        return res.render("posts/index", context);
    } catch (error) {
        console.log(error);
    }
});

// Show
router.get("/:id", function (req, res, next) {
    Post.findById(req.params.id, function (error, post) {
        if (error) {
            req.error = error;
            return next();
        }
        Comment.find({post: post._id}, function (error, foundComments) {
            if (error) {
                req.error = error;
                return next();
            }
            const context = {
                post,
                comments: foundComments,
            };
            return res.render("posts/show", context);
        });
    });
});

module.exports = router;