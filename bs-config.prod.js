module.exports = {
    open: false,
    port: process.env.PORT,
    //files: ['./**/*.{html,css,js}'],
    server: {
        baseDir: "./",
        routes: {
            "/node_modules": "node_modules",
            "/public": "public"
        }
    }
};