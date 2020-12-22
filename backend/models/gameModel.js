const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// THE STRUCTURE OF THE GAME DATA

const GameSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Title field is required']
    },

    price:{
        type: Number,
        required: true
    },
    category: {
        type: Number,
        required: true

    },
    gameIsNew: {
        type: Boolean,
        required: true

    },
    topPrice: {
        type: Number,
        required: true

    },
    isVerOrient: {
        type: Boolean,
       
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;