import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import { Server as SocketIOServer } from 'socket.io';
import config from './config.js';

import vetRoutes from './routes/vets.js';
import symptomRoutes from './routes/symptoms.js';
import appointmentRoutes from './routes/appointments.js';
import historyRoutes from './routes/history.js';
import petRoutes from './routes/pets.js';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

mongoose.connect(config.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// API routes
app.use('/api/vets', vetRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/pets', petRoutes);

// WebSocket for real-time vet status
import setupVetStatusSocket from './sockets/vetStatus.js';
setupVetStatusSocket(io);

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});