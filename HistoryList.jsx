import React, { useState } from 'react';
import { fetchHistory } from '../api';

export default function HistoryList() {
  const [ownerEmail, setOwnerEmail] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [history, setHistory] = useState([]);

  const handleFetch = async () => {
    const res = await fetchHistory({ ownerEmail, filterType, filterDate });
    setHistory(res.data);
  };

  return (
    <div style={{ padding: '2em' }}>
      <h2>Pet Medical History</h2>
      <form onSubmit={e => { e.preventDefault(); handleFetch(); }}>
        <input placeholder="Your Email" value={ownerEmail} onChange={e => setOwnerEmail(e.target.value)} />
        <input placeholder="Type (e.g. vaccination)" value={filterType} onChange={e => setFilterType(e.target.value)} />
        <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} />
        <button type="submit">Fetch History</button>
      </form>
      <ul>
        {history.map((h, i) => (
          <li key={i} style={{ background: '#fffde7', borderRadius: 8, margin: '0.5em 0', padding: '0.5em' }}>
            <b>{h.petName}</b> - {h.type} on {new Date(h.date).toLocaleDateString()}: {h.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
