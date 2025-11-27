const authRouter = require("./auth.routes")

module.exports = (app) => {
    app.use('/authenticate', authRouter);
}