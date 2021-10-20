const mongoose = require("mongoose");

require("dotenv").config();

const MONGODB_URI = "mongodb://localhost:27017/feedback";

mongoose.connect(MONGODB_URI);

mongoose.connection.on("connected", function () {
  console.log("Mongodb has connected... ❤️");
});

mongoose.connection.on("error", function (error) {
  console.log("Mongodb has an error... 😭", error);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongodb has disconnected... 🔌");
});