import React from 'react';

export default function VetCard({ name, photo, rating, status }) {
  return (
    <div className={`vet-card ${status}`}>
      <img src={photo || "https://cdn-icons-png.flaticon.com/512/616/616408.png"} alt={name} />
      <h3>{name}</h3>
      <p>⭐ {rating || 'N/A'}</p>
      <p>
        Status: <span style={{
          color: status === 'online' ? '#388e3c' : status === 'booked' ? '#ff9800' : '#e57373',
          fontWeight: 600
        }}>{status}</span>
      </p>
    </div>
  );
}
