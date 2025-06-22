import React, { useState } from 'react';
import { checkSymptoms } from '../api';

export default function SymptomForm() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await checkSymptoms(symptoms);
    setResult(res.data);
  };

  return (
    <div style={{ padding: '2em' }}>
      <h2>Symptom Checker</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Describe symptoms (e.g. cough, vomit)"
          value={symptoms}
          onChange={e => setSymptoms(e.target.value)}
          required
        />
        <button type="submit">Check</button>
      </form>
      {result && (
        <div style={{ marginTop: '1em', background: '#fffde7', borderRadius: 12, padding: '1em' }}>
          <h4>Possible Conditions:</h4>
          <ul>
            {result.possibleConditions.map((c, i) => <li key={i}>🐾 {c}</li>)}
          </ul>
          <h4>Suggestions:</h4>
          <ul>
            {result.suggestions.map((s, i) => <li key={i}>💡 {s}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
