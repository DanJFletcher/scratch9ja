// VALIDATION
const Joi = require ('@hapi/joi');


// Register's Validation - wrapped in a function because there will be multiple schemas

const registerValidation = data => {

  
    const schema = Joi.object({
      name: Joi.string().min(8).required(),
      email: Joi.string().min(8).required().email(),
      password: Joi.string().min(8).required({ tlds: { allow: false } })
    });
    
    return schema.validate(data);
    
};

// Login's validation
const loginValidation = (data) => {

    const schema = Joi.object({
      email: Joi.string().min(8).required().email(),
      password: Joi.string().min(8).required({ tlds: { allow: false } })
    });
    
    return schema.validate(data);
    
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
    
