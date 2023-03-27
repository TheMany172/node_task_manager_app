const express = require('express');
require('./db/mongoose')


// import routes
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// EXPRESS CONFIGURATION
const app = express();
const port = process.env.PORT;

// app.use express bits
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Listen for requests ---------------------------
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
