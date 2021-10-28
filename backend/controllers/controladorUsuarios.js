const UsuarioModel = require('../models/Usuario')

listUsuarios = (req, res) => {
    console.log(req.params);
    UsuarioModel.find().then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
    /* Conectarse a mongo, consultar los datos y retornarlos */
};

getUsuario = (req, res) => {
    console.log(req.params);
    UsuarioModel.find({ _id: req.params.id }).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
    // res.json({ message: 'Hola, vas a listar uno específico!!' });
    /* Conectarse a mongo, consultar los datos y retornarlos */
};

createUsuario = (req, res) => {
    console.log(req.params, req.body, req.headers);
    UsuarioModel.create(
        {
            dni: 2323452354345
        }
    ).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
};

modifyUsuario = (req, res) => {
    console.log(req.params, req.body, req.headers);
    UsuarioModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
    // res.json({ message: 'Hola, vas a modificar algo' });
};

deleteUsuario = (req, res) => {
    console.log(req.params);
    UsuarioModel.findByIdAndDelete(req.params.id).then(data => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
    //res.json({ message: 'Hola, vas a borrar algo' });
};

module.exports = {
    listUsuarios,
    getUsuario,
    createUsuario,
    modifyUsuario,
    deleteUsuario
}

module.exports = router;