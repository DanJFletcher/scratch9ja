const express = require('express');
const router =  express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation/validation')

// ADD A NEW USER
router.post('/register', async (req, res, next) => {

// VALIDATE DATA BEFORE SUBMITING A USER
const { error } = registerValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);


// CHECKING IF USER ALREADY EXIST IN THE DATABASE

const emailExist = await User.findOne({email: req.body.email})
if (emailExist) {
 return res.status(400).send('Email already exists')  ;
}


// HASH THE PASSWORD
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(req.body.password(hashedPassword), salt);

// CREATE A NEW USER

   User.create(req.body).then(function (user) {
    res.send(user);
    }).catch(next);
  });
   
//     const user = new User({
//        name: req.body.name,
//        email: req.body.email,
//        password: req.body.hashedPassword
//    });
//    try{
//        const savedUser = await user.save();
//        res.send(savedUser);
//    }catch(err){
//        res.status(400).send(err);
//    }
// });

module.exports = router;

