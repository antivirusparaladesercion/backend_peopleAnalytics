// Usa las variables de entorno definidas en el archivo .env
// Estas variables son: S3_BUCKET, AWS_ACCESS_KEY_ID y AWS_SECRET_ACCESS_KEY
require('dotenv').config();
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

// Se asignan los valores de las variables de entorno a una instancia del objeto aws
aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: 'us-east-1'
});

// Creación de un objeto S3
const s3 = new aws.S3()
 
// En el objeto upload se pasan los parámetros del bucket donde se va a hacer el almacenamiento
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'cargadedatosies/udea', //"nombre del bucket definido"/"carpeta de la universidad" por el momento está "quemada udea"
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA'});
    },
    // Se define el nombre del archivo, está de la siguiente manera "marca temporal".csv
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '.csv')
    }
  })
})

module.exports = upload;