const boom = require("@hapi/boom");
const nodemailer = require("nodemailer");
const { config } = require("../config/config");

const { EnviarEmail, enviarCorreoExitoso } = require("../modules/EnviarEmail");

class FormulariosService {
  async create(data) {

    // Enviar correo electrónico de verificación
    const rta = await enviarCorreoExitoso(
      config.emailReceptor,
      "Formulario Suinfi",
      JSON.stringify(data, null, 2)
    );
    return rta;
  }
}
module.exports = FormulariosService;
