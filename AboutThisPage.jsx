import React from 'react';

export default function AboutThisPage() {
  return (
    <section style={{ padding: '2em', background: '#fffde7', borderRadius: 16, margin: '2em auto', maxWidth: 600 }}>
      <h2>About This Page</h2>
      <ul>
        <li>Server-side concepts: REST API, WebSockets, MongoDB, Email (Nodemailer)</li>
        <li>Reusable React components: VetCard, SymptomForm, AppointmentModal, HistoryList, Navbar, VetDashboard, EmailConfirmation</li>
        <li>Helps pet owners: Real-time vet status, symptom checker, easy booking, history access</li>
      </ul>
    </section>
  );
}
