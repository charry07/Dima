const mongoose = require('mongoose');

const URL = process.env.DB_URL;
mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB Conection successfully");
});

module.exports = mongoose;