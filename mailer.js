import nodemailer from 'nodemailer';
import config from '../config.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS
  }
});

export default async function sendConfirmationEmail(to, appointment) {
  await transporter.sendMail({
    from: config.EMAIL_USER,
    to,
    subject: 'Your Vet Appointment is Confirmed',
    text: `Your appointment for ${appointment.petName} is confirmed on ${appointment.date}.`
  });
}
