const mongoose = require('mongoose');
const validator = require('validator');

// Connect to the database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})




