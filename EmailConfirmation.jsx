import React from 'react';

export default function EmailConfirmation({ appointment, onClose }) {
  return (
    <div>
      <h3 style={{ color: '#4db6ac' }}>Appointment Confirmed!</h3>
      <p>
        Your appointment for <b>{appointment.petName}</b> is confirmed on <b>{new Date(appointment.date).toLocaleString()}</b>.<br />
        A confirmation email has been sent to <b>{appointment.userEmail}</b>.
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
