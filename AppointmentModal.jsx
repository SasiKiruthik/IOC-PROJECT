import React, { useState } from 'react';
import { bookAppointment } from '../api';
import EmailConfirmation from './EmailConfirmation';

export default function AppointmentModal({ vet, onClose }) {
  const [petName, setPetName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [date, setDate] = useState('');
  const [confirmed, setConfirmed] = useState(null);

  const handleBook = async (e) => {
    e.preventDefault();
    const res = await bookAppointment({ vetId: vet._id, userEmail, petName, date });
    setConfirmed(res.data.appointment);
  };

  if (confirmed) return <EmailConfirmation appointment={confirmed} onClose={onClose} />;

  return (
    <div className="modal">
      <div>
        <h3>Book Appointment with {vet.name}</h3>
        <form onSubmit={handleBook}>
          <input placeholder="Your Email" value={userEmail} onChange={e => setUserEmail(e.target.value)} required />
          <input placeholder="Pet Name" value={petName} onChange={e => setPetName(e.target.value)} required />
          <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} required />
          <button type="submit">Book</button>
          <button type="button" onClick={onClose} style={{ background: '#e57373', marginLeft: 8 }}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
