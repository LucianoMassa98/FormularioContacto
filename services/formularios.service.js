const boom = require("@hapi/boom");
const nodemailer = require("nodemailer");
const { config } = require("../config/config");

const { EnviarEmail, enviarCorreoExitoso } = require("../modules/EnviarEmail");

class FormulariosService {
  async create(data) {

    const mensaje = await this.prettyPrintJSON(JSON.stringify(data, null, 2));
    // Enviar correo electrónico de verificación
    const rta = await EnviarEmail(
      config.emailReceptor,
      "Nuevo Formulario Suinfi De Contacto",
      mensaje
    );
    return rta;
  }

  async prettyPrintJSON(jsonString) {
    const lines = jsonString.split('\n');
    return lines.map(line => '    ' + line).join('\n');
}
}
module.exports = FormulariosService;
