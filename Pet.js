import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  name: String,
  ownerEmail: String,
  medicalHistory: [
    {
      date: Date,
      type: String,
      description: String
    }
  ]
});

export default mongoose.model('Pet', PetSchema);
