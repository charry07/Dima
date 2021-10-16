const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken');
const CLIENT_ID = '468523678912-tai2ck20l69crdn139f6vulb5d27ruhu.apps.googleusercontent.com';
const JWT_KEY = 'miClave';
const userModel = require('../models/userModel')

googleAuth = (req,res) => {
    console.log(req.headers,req.body ,req.params );

    const {token} = req.body;
    const client = new OAuth2Client(CLIENT_ID);

    client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
    })
    .then(res => {
        console.log(res);
        const {name,email} = res.payload;
        console.log(email,name);
        //Actualizar base de datos
        return userModel.findOneAndUpdate({email:email},{name:name},{new :true , upsert:true})
    })
    .then(user => {
        console.log(user);
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