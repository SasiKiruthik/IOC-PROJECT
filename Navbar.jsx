import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <span style={{ fontWeight: 700, fontSize: '1.3em', letterSpacing: 1 }}>
        🐾 GetPaws
      </span>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/symptoms">Symptom Checker</Link>
      <Link to="/history">Medical History</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
