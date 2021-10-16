const mongoose = require('mongoose');
const URL_ATLAS = 'mongodb+srv://charry07:charry07@clusteracn.j3bdj.mongodb.net/MiBaseDatos?retryWrites=true&w=majority';

mongoose.connect(URL_ATLAS, { 
    dbName: 'MiBaseDatos',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: false,
});

const connection = mongoose.connection;
connection.once("open", function () {
    console.log("Conexion con la MongoDB MiBaseDatos EXTITOSA!");
});

module.exports = mongoose;
