
const multer = require("multer");
const path = require("path");


// checking for file type
const MIME_TYPES = {
    'imgs/jpg': 'jpg',
    'imgs/jpeg': 'jpeg',
    'imgs/png': 'png'
}

// Image Upload
const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
      cb(null, ('/imgs/'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
        const extension = MIME_TYPES[file.mimetype];
        cb(null, + new Date().toISOString() + '.' + extension);
    }
});

module.exports = multer({
    storage
})