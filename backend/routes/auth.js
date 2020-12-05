        const express = require('express');
        const router =  express.Router();
        const User = require('../models/User');
        const Jwt = require('jsonwebtoken');
        const bcrypt = require('bcryptjs');
        const { registerValidation, loginValidation } = require('../validation/validation')

        // ADD A NEW USER
        router.post('/register', async (req, res, next) => {


        // VALIDATE DATA BEFORE SUBMITING A USER
        const { error } = registerValidation(req.body);
        if(error)
            return res.status(400).send(error.details[0].message);



        // CHECKING IF USER ALREADY EXIST IN THE DATABASE

        const emailExist = await User.findOne({email: req.body.email})
        if (emailExist) {
        return res.status(400).send('Email already exists')  ;
        }


        // HASH THE PASSWORD
        bcrypt.hash(req.body.password, 10).then((hash) => {


            // CREATE A NEW USER

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        try {
            const savedUser =  user.save();
             res.send(user);
        } catch(err) {
            res.status(400).send(err);
        }
        });
  
        });


        // HANDLE LOGIN
        router.post('/login', async (req, res)  => {

        // VALIDATE DATA BEFORE SUBMITING A USER
        const { error } = loginValidation(req.body);
        if(error) 
        return res.status(400).send(error.details[0].message);


        // CHECKING IF THE EMAIL EXISTS

        const user = await User.findOne({email: req.body.email})
        if (!user) {
        return res.status(400).send(' User with this Email does not exist')  ;
        }

        // CHECKING IF PASSWORD IS CORRECT
         const validPass = await bcrypt.compare(req.body.password, user.password);
         if(!validPass) 
         return res.status(400).send('Invalid Password')


         // CREATE AND ASSIGN A TOKEN
        const token = Jwt.sign({_id: user._id},  process.env.TOKEN_SECRET);
      if (token) 
       res.header('auth-token', token).send(token);
    
        // res.json('Login successful');
        })


        

        // GET USER'S DATA
        router.get("/", async (req, res) => {
            const user = await User.findById(req.user);
            res.send(user);
        })

        module.exports = router;

    

        // HASH THE PASSWORD 2ND OPTION CODE

        //  const salt = await bcrypt.genSalt(10);
        //  const hashedPassword = await bcrypt.hash(req.body.password(hashedPassword), salt);

        // CREATE A NEW USER 2ND OPTION CODE

        //  User.create(req.body).then(function (user) {
        //   res.send(user);
        //   }).catch(next);
        // });

        // CREATE A NEW USER 3RD OPTION CODE
        //     const user = new User({
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: hash
        //     });
        //     user.save().then((response) => {
        //         res.send({user: user._id });
        //        return res.status(201).json({
        //             message: "User successfully created!",
        //             result: response
                
        //         });
        //     }).catch(error => {
        //         res.status(500).json({
        //             error: error
        //         });
        //     });
        // });