const routes = [
    {
        href: "/",
        title: "Home",
    },
    {
        href: "/new",
        title: "Create Post",
    },
    {
        href: "/login",
        title: "Login",
    },
    {
        href: "/signup",
        title: "Sign Up",
    }
];

module.exports = function navLinks(req, res, next) {
    // locals
    res.locals.routes = routes;
    next();
}