const registeredLinks = {
    title: 'Home', path: '/',
    title: 'About', path: '#about',
    title: 'Projects', path: '/projects',
    title: 'Profile', path: '/profile',
    title: "LOGOUT", path: "/#", id: "logout-button"
}
const nonRegisteredLinks = {
    title: 'Home', path: '/',
    title: 'login', path: '/login',
    title: 'About', path: '#about',
}

export {
    registeredLinks,
    nonRegisteredLinks,
}