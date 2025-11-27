const app = require('express')();
require('./routes/index')(app);

module.exports = app;