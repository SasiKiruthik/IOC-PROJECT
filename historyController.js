import Pet from '../models/Pet.js';

export const getHistory = async (req, res) => {
  const { ownerEmail, filterType, filterDate } = req.query;
  let query = { ownerEmail };
  if (filterType) query['medicalHistory.type'] = filterType;
  const pets = await Pet.find(query);
  let history = [];
  pets.forEach(pet => {
    let records = pet.medicalHistory;
    if (filterDate) {
      records = records.filter(r => new Date(r.date).toISOString().slice(0, 10) === filterDate);
    }
    history.push(...records.map(r => ({ ...r, petName: pet.name })));
  });
  res.json(history);
};

export const addHistory = async (req, res) => {
  const { petId, date, type, description } = req.body;
  const pet = await Pet.findById(petId);
  if (!pet) return res.status(404).json({ error: 'Pet not found' });

  pet.medicalHistory.push({ date, type, description });
  await pet.save();
  res.json({ success: true, pet });
};
