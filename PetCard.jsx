import React, { useState } from 'react';
import AddHistoryForm from './AddHistoryForm';

export default function PetCard({ _id, name, ownerEmail, medicalHistory }) {
  const [showForm, setShowForm] = useState(false);
  const [history, setHistory] = useState(medicalHistory || []);

  const handleAdded = () => {
    // Optionally, fetch updated history from backend here
    setShowForm(false);
    // For demo, just reload the page or refetch pets in parent
  };

  return (
    <div className="vet-card" style={{ background: '#e3f2fd' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        alt={name}
        style={{ border: '3px solid #1976d2' }}
      />
      <h3>{name}</h3>
      <p>Owner: {ownerEmail}</p>
      <p>Records: {history.length}</p>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide' : 'Add History'}
      </button>
      {showForm && <AddHistoryForm petId={_id} onAdded={handleAdded} />}
      <ul>
        {history.map((rec, i) => (
          <li key={i}>
            {rec.type} on {new Date(rec.date).toLocaleDateString()}: {rec.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
