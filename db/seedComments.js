require("../config/db.connection");

const Comment = require("../models/Comment");

const comments = [
    {
        type: "Suggestion",
        content: "Meh. Could use more snakes.",
        post: "616dc8f845fe8798fa67fb2f",
        user: "616dc78fd1f477eec038e70c",
    }
];

const reseedComments = async function reseedComments () {
    try {
        await Comment.deleteMany({});
        const createdComments = await Comment.insertMany(comments);
        console.log("=== Seed Complete ===", createdComments);
    } catch (error) {
        console.log(error);
    }
};

reseedComments();