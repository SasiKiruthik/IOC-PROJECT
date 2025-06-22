import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  vetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vet' },
  userEmail: String,
  petName: String,
  date: Date,
  status: { type: String, enum: ['confirmed', 'pending'], default: 'pending' }
});

export default mongoose.model('Appointment', AppointmentSchema);
