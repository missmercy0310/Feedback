const routes = [
    {
        href: "/",
        title: "Home",
    },
];

module.exports = function navLinks(req, res, next) {
    // locals
    res.locals.routes = routes;
    next();
}