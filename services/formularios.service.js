const boom = require("@hapi/boom");
const nodemailer = require("nodemailer");
const { config } = require("../config/config");

const { EnviarEmail, enviarCorreoExitoso } = require("../modules/EnviarEmail");

class FormulariosService {
  async create(data) {
    // Enviar correo electrónico de verificación
    await enviarCorreoExitoso(
      config.emailEmisor,
      "Formulario Suinfi",
      JSON.stringify(data, null, 2)
    );

    return true;
  }
}
module.exports = FormulariosService;
