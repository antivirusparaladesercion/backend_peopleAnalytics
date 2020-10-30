require('dotenv').config();
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

// const config = require('../config')

aws.config.update({
    secretAccessKey: '72dMnNdVGlf69YXo4235TjdHoUlYsR0Ba4UmTgsl',//process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: 'AKIAIB6T53WAQEQYLLLQ',//process.env.AWS_ACCESS_KEY_ID,
    region: 'us-east-2'
});

// aws.config.update({
//     secretAccessKey: config.AWS_SECRET_ACCESS,
//     accessKeyId: config.AWS_ACCESS_KEY,
//     region: 'us-east-2'
// });

const s3 = new aws.S3()
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'youtube-images-two/udea',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;