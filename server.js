/* === External modules === */
const express = require("express");
const methodOverride = require("method-override");

/* === Internal modules === */
const controllers = require("./controllers");

/* === System Variables === */
const app = express();
const PORT = 4000;

/* === Server Configuration === */
// mongodb connection
require("./config/db.connection");

// view engine
app.set("view engine", "ejs");

// serve public folder
app.use(express.static("public"));

// handle form data
app.use(express.urlencoded({ extended: false }));

// override request methods
app.use(methodOverride("_method"));

/* === Middleware === */

// adds routes for navbar
app.use(require("./utils/navlinks"));

/* === Routes === */

// == Default Routes
app.get("/", function (req, res, next) {
  return res.render("posts/index");
});

/* === Server Listener === */
app.listen(PORT, function () {
  console.log(`Server is live and listening at localhost:${PORT}.`);
});