import mongoose from 'mongoose';

const VetSchema = new mongoose.Schema({
  name: String,
  photo: String,
  rating: Number,
  status: { type: String, enum: ['online', 'offline', 'booked'], default: 'offline' }
});

export default mongoose.model('Vet', VetSchema);
