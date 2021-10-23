const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken');
const CLIENT_ID = '468523678912-tai2ck20l69crdn139f6vulb5d27ruhu.apps.googleusercontent.com';
const JWT_KEY = 'miClave';
const userModel = require('../models/userModel')

googleAuth = (req,res) => {
    // console.log(req.headers,req.body ,req.params );

    const {token} = req.body;
    const client = new OAuth2Client(CLIENT_ID);

    client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
    })
    .then(res => {
        // console.log(res);
        const {email,given_name,family_name,iat,exp,locale} = res.payload;
        //console.log(res.payload);
        //Actualizar base de datos
        return userModel.findOneAndUpdate(
            {email:email},
            { $set: { nombre: given_name, apellido:family_name,dni:iat, celular:exp,rol:locale }},
            {new: true, upsert:true},
        )
    })
    .then(user => {
        
        //crear token de la aplicacion y retornar
        var appToken = jwt.sign({user: user},JWT_KEY);
        res.json(appToken);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err)
    })
}

module.exports = {googleAuth};