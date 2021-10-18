require("../config/db.connection");

const User = require("../models/User");

const users = [
    {
        username: "frogman",
        email: "frogman@frogbase.com",
        password: "froglifeforever",
        avatar: "https://static.scientificamerican.com/sciam/cache/file/41DF7DA0-EE58-4259-AA815A390FB37C55_source.jpg"
    },
    {
        username: "snakeman",
        email: "snakeman@frogbase.com",
        password: "snakelifeforever",
    }
];

const reseedUsers = async function reseedUsers () {
    try {
        await User.deleteMany({});
        const createdUsers = await User.insertMany(users);
        console.log("=== Seed Complete ===", createdUsers);
    } catch (error) {
        console.log(error);
    }
};

reseedUsers();