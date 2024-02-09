const joi = require('joi');


const name = joi.string();
const surName = joi.number();
const email = joi.string().email()
const message = joi.string();
const subject = joi.string();


const createaFormularioSchema = joi.object({
   name:name.required(),
   surName:surName.required(),
   email:email.required(),
   subject:subject.required(),
   message:message.required()
  
});



module.exports = {
    createaFormularioSchema
  };


