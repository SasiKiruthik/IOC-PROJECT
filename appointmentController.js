import Appointment from '../models/Appointment.js';
import Vet from '../models/Vet.js';
import sendConfirmationEmail from '../utils/mailer.js';

export const bookAppointment = async (req, res) => {
  const { vetId, userEmail, petName, date } = req.body;
  const appointment = await Appointment.create({ vetId, userEmail, petName, date, status: 'confirmed' });
  await Vet.findByIdAndUpdate(vetId, { status: 'booked' });
  await sendConfirmationEmail(userEmail, appointment);
  res.json({ success: true, appointment });
};
