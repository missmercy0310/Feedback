const mongoose = require("mongoose");

// define Schema
const CommentSchema = new mongoose.Schema(
    {
        type: {
            type: String,
        },
        content: {
            type: String,
            required: [true, "You must provide content for your comment."],
        },
        // ref to post model
        post: {
            type: mongoose.Types.ObjectId,
            ref: "Post",
            required: true,
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
const Comment = mongoose.model("Comment", CommentSchema);

// export model
module.exports = Comment;