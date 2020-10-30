const express = require("express");
const router = express.Router();
const upload = require('../services/file-upload');

const singleUpload = upload.single('image'); // se puede cambiar image

router.post('/data-upload', singleUpload, function(req, res) {
    res.send('Subido exitosamente a ' + req.file.location)
});

module.exports = router