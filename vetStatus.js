import Vet from '../models/Vet.js';

export default function setupVetStatusSocket(io) {
  io.on('connection', async (socket) => {
    // Send current vet status
    const vets = await Vet.find();
    socket.emit('vetStatus', vets);

    // Listen for status updates
    socket.on('updateVetStatus', async ({ vetId, status }) => {
      await Vet.findByIdAndUpdate(vetId, { status });
      const updatedVets = await Vet.find();
      io.emit('vetStatus', updatedVets);
    });
  });
}
