const express=require('express');
const router=express.Router();
const FormulariosService = require('../services/formularios.service');
const service = new FormulariosService();
const  {
  createaFormularioSchema,
  } = require('../schemas/formulario.schema');

  const validatorHandler = require('../middlewares/validator.handler');



router.post('/',
validatorHandler(createaFormularioSchema,'body'),
async (req, res,next) => {
  try{
    const body = req.body;
    const Newausencia = await service.create(body);
    res.json({
      message: 'created',
      state: Newausencia
    });
  }catch(err){next(err);}
});



module.exports=router;
