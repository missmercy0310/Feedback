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
        href: "/logout",
        title: "Logout",
    },

];

const authRoutes = [ 
    {
        href: "/login",
        title: "Login",
    },
    {
        href: "/signup",
        title: "Sign Up",
    },
]


module.exports = async function navLinks(req, res, next) {
    // locals
    if(req.session.currentUser){
        res.locals.routes = routes;
        res.locals.user = await User.findById(req.session.currentUser);
    } else {
        res.locals.routes = authRoutes;
    }
    next();
}

