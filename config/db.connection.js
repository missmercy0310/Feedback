const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {});

mongoose.connection.on("connected", function () {
  console.log("Mongodb has connected... ❤️");
});

mongoose.connection.on("error", function (error) {
  console.log("Mongodb has an error... 😭", error);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongodb has disconnected... 🔌");
});