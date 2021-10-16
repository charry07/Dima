const mongoose = require('mongoose');

const URL = 'mongodb+srv://charry07:charry07@clusteracn.j3bdj.mongodb.net/MiBaseDatos?retryWrites=true&w=majority';
mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB Conection successfully");
});

module.exports = mongoose;