import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/Homepage';
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';
import { Dashboard } from './Dashboard/Pages/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
