const app = require('./app')
const port = process.env.PORT;

// Listen for requests ---------------------------
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
