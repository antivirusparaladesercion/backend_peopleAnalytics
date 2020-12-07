const express = require("express");
const router = express.Router();
const upload = require('../services/file-upload');

// el parámetro 'data' en el método single es la key a la cual se le asignará el archivo .csv en la petición
const singleUpload = upload.single('data');

// Se define la ruta y la respuesta si la petición es exitosa
router.post('/data-upload', singleUpload, function(req, res) {
    res.send('Subido exitosamente a ' + req.file.location)
});

module.exports = router