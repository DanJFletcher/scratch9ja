const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post')
const cors = require("cors");
const dotenv = require("dotenv")
const gameRoutes = require("./routes/game")
const cartRoute = require('./routes/cartRoute')
dotenv.config()

// setup express app
const app = express();
app.use(cors());

// handle file upload
app.use( express.static("storage/imgs"));

// connect to mongodb

mongoose.connect(
`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@scratch9ja.lwol6.mongodb.net/Scratch9ja?retryWrites=true&w=majority`, 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true},
() => console.log('connected to db!')
)
mongoose.Promise = global.Promise;



// Middlewares
app.use(bodyParser.json());


// Routes Middleware
app.use('/api/user',  require('./routes/auth'));
app.use('/api/users', postRoute)
app.use('/api/list', gameRoutes)
app.use('/api/items', cartRoute)



// error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({error: err.message});
        
})
    

// listen for requests
app.listen(process.env.port || 8000, function(){
console.log('Now listening for request')

})