require("../config/db.connection");

const Post = require("../models/Post");

const posts = [
    {
        title: "Frogs Forever",
        content: "I'm working on a new story structure for a project titled Frogs Forever. Let me know what y'all think of this plot layout: 1. Frogs begin to take over the planet. 2. Frogs succeed. 3. Frogs forever.",
        user: "61704c3cadbb302d8b745508",
    }
];

const reseedPosts = async function reseedPosts () {
    try {
        await Post.deleteMany({});
        const createdPosts = await Post.insertMany(posts);
        console.log("=== Seed Complete ===", createdPosts);
    } catch (error) {
        console.log(error);
    }
};

reseedPosts();