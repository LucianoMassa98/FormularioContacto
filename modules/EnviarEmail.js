const nodemailer = require('nodemailer');
const { config } = require('../config/config'); // Asegúrate de tener un archivo config.js con la configuración de correo

async function EnviarEmail(emailReceptor, asunto, mensaje) {
  // Configurar el transporte
  let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: config.emailEmisor,
      pass: config.password,
    },
  });
  // Configurar el contenido del correo
  let mailOptions = {
    from: config.emailEmisor,
    to: emailReceptor,
    subject: asunto,
    text: mensaje
  };
  const rta = await transporter.sendMail(mailOptions);

  if (rta) { return { message: "Correo enviado exitosamente!!!", value: true }; }
  return { message: "El envio de correo fallo!!! ", value: false, rta: rta };;
}
async function enviarCorreoExitoso(emailReceptor, asunto, mensaje) {

  let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: config.mailerEmail,
      pass: config.mailerPassword,
    },
  });

  let mailOptions = {
    from: config.mailerEmail,
    to: emailReceptor,
    subject: asunto,
    text: mensaje
  };

  try {
    const rta = await transporter.sendMail(mailOptions);
    if (rta) { return { message: "Correo enviado exitosamente!!!", value: true }; }
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return { message: "El envio de correo fallo!!! ", value: false };
  }
}

module.exports = { EnviarEmail, enviarCorreoExitoso };
