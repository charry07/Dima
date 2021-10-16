const mongoose = require('mongoose');


const esquemaUsuarios = new mongoose.Schema ({
    dni:{ type:Number, required : true , unique: true },
    nombre: { type:String, required : true }, 
    apellido: { type:String, required : true }, 
    rol: { type:String, required : true }, 
    celular: { type:Number, required : true }, 
    email: String, 
    ingreso: String
});

const userModel = mongoose.model('usuario',esquemaUsuarios);
module.exports = userModel