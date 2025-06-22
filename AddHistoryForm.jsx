import React, { useState } from 'react';
import { addPetHistory } from '../api';

export default function AddHistoryForm({ petId, onAdded }) {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPetHistory(petId, { date, type, description });
    setSuccess(true);
    setDate(''); setType(''); setDescription('');
    if (onAdded) onAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Medical History</h4>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input placeholder="Type (e.g. vaccination)" value={type} onChange={e => setType(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <button type="submit">Add</button>
      {success && <div style={{ color: 'green' }}>Added!</div>}
    </form>
  );
}
