import Vet from '../models/Vet.js';

export const getVets = async (req, res) => {
  const vets = await Vet.find();
  res.json(vets);
};

export const updateVetStatus = async (req, res) => {
  const { vetId, status } = req.body;
  await Vet.findByIdAndUpdate(vetId, { status });
  res.json({ success: true });
};
