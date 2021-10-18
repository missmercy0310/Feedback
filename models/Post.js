const mongoose = require("mongoose");

// define Schema
const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "You must provide a title for your post."],
        },
        content: {
            type: String,
            required: [true, "You must provide content for your post."],
        },
        // ref to user model
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// define model using schema
const Post = mongoose.model("Post", PostSchema);

// export model
module.exports = Post;