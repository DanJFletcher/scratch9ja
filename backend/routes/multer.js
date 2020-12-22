
const multer = require("multer");
const path = require("path");


// checking for file type
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
}

// Image Upload
const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
      cb(null, ('storage/imgs/'));
    },
    filename: (req, file, cb) => {
        const extension = MIME_TYPES[file.mimetype];
        cb(null, `${new Date().toISOString()}.${extension}`);
    }
});

module.exports = multer({
    storage
})