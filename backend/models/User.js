const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// THE STRUCTURE OF THE REGISTER DATA

const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    email:{
        type: String,
        required: true,
        index: { unique: [true, 'This email has already been used'] } 
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 12
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;