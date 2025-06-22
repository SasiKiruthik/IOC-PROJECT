import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String // For demo; use hashing in production!
});

export default mongoose.model('User', UserSchema);
