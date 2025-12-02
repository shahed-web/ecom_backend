module.exports = (app)  => {
 app.use("/auth", require("./routes/auth.route"));
}