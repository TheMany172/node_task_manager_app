const express = require('express');
require('./db/mongoose')

// import routes
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// EXPRESS CONFIGURATION
const app = express();

// app.use express bits
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;