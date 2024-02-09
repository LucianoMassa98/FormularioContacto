require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  emailEmisor: process.env.EMAIL,
  password: process.env.PASSWORD_EMAIL,
  emailReceptor: process.env.EMAIL_DESTINATARIO

}

module.exports = { config };
