const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { info, error } = require("firebase-functions/lib/logger");
const cors = require("cors")({ origin: true });
const { transporterAuthConfig } = require("../config/index.js");

admin.initializeApp();

// E-mail Transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: transporterAuthConfig
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = req.query.dest;

    const mailOptions = {
      from: "Felipe Castro Richter <digivoro@gmail.com>",
      to: dest,
      subject: "Recibí tu mensaje!",
      html: `
        <h1>¡Gracias por tu interés!</h1>
        <p>Recibí tu mensaje y me contactaré contigo a la brevedad.</p>
        <p>Saludos cordiales,</p>
        <p><b>Felipe.</b></p>
      `
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send("Correo enviado.");
    });
  });
});
