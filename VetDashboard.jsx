import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import VetCard from './VetCard';
import AppointmentModal from './AppointmentModal';
import PetCard from './PetCard';
import { fetchPets } from '../api';

const socket = io('http://localhost:5000');

export default function VetDashboard() {
  const [vets, setVets] = useState([]);
  const [selectedVet, setSelectedVet] = useState(null);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    socket.on('vetStatus', setVets);
    return () => socket.off('vetStatus');
  }, []);

  useEffect(() => {
    fetchPets().then(res => setPets(res.data));
  }, []);

  return (
    <div style={{ padding: '2em' }}>
      <h2>Vet Availability</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
        {vets.map(vet => (
          <div key={vet._id} onClick={() => setSelectedVet(vet)}>
            <VetCard {...vet} />
          </div>
        ))}
      </div>
      {selectedVet && (
        <AppointmentModal vet={selectedVet} onClose={() => setSelectedVet(null)} />
      )}
      <h2 style={{ marginTop: '2em' }}>Pets</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
        {pets.map(pet => (
          <PetCard key={pet._id} {...pet} />
        ))}
      </div>
    </div>
  );
}
