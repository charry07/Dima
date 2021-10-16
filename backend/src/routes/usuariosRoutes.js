const express = require('express')
const router = express.Router()
const cors = require('cors');
const app = express();


const userModel = require('../models/userModel')


app.use(cors());
app.use(express.json());



router.get('/', (req, res) => {
    /* Conectarse a mongo, consultar los datos y retornarlos */
    userModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))

});

router.get('/:id', (req, res) => {
    userModel.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send(err))
}); 

router.post('/', (req, res) => {
    userModel.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => res.status(500).send(err));
});

router.put('/:id', (req, res) => {
    // res.json({ message: 'Hola, vas a modificar algo' });
    userModel.findByIdAndUpdate(req.params.id , req.body)
    .then(oldUser => res.status(200).json(oldUser))
    .catch(err => res.status(500).send(err));
});

router.delete('/:id', (req, res) => {
    userModel.findByIdAndDelete(req.params.id)
    .then(oldUser => res.json(oldUser))
    .catch(err => res.status(500).send(err));
    
});

module.exports = router;