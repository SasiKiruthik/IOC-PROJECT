import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { routes } from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
