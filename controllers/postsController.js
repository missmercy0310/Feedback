const express = require("express");
const router = express.Router();
const { Post, Comment, User } = require("../models");

// base url === /

// Index
router.get("/", async function (req, res) {
    try {
        const allPosts = await Post.find({});
        const context = {
            posts: allPosts,
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
                comments: foundComments
            };
            return res.render("posts/show", context);
        });
    });
});

// Create
router.post("/", async function (req, res, next) {
  
    try { // body == data incoming with a request
    
      await Post.create(data);
      console.log(newPost);
      return res.redirect("/posts");
    } catch (error){
      console.log(error);
      req.error = error;
      return next();
    }
});

//DELETE POST 

router.delete("/:id", function (req, res, next) {
    Product.findByIdAndDelete(req.params.id, function (error, deletedPost) {
      if (error) {
        console.log(error);
        req.error = error;
        return next();
      }
  
      //DELETE COMMENTS OF EACH POST 
      Comment.deleteMany(
        { post: req.params.id },
        function (error, deletedComments) {
          if (error) {
            console.log(error);
            req.error = error;
            return next();
          }
          return res.redirect("/posts");
        }
      );
    });
  });
  
  //UPDATE TO POST---    ADD UPDATE TO COMMENT 

  router.put("/:id", function (req, res, next) {
    Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (error, updatedPost) {
        if (error) {
          console.log(error);
          req.error = error;
          return next();
        }
  
        res.redirect(`/posts/${req.params.id}`);
      }
    );
  });



module.exports = router;