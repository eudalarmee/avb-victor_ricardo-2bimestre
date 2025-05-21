import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Introducao from './Pages/Introducao';
import Perfil from './Pages/Perfil';
import Login from './Pages/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/introducao"
          element={isLoggedIn ? <Introducao /> : <Navigate to="/" />}
        />
        <Route
          path="/perfil"
          element={isLoggedIn ? <Perfil /> : <Navigate to="/" />}
        />
        {/* Caso a rota não exista */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/"} />} />
      </Routes>
    </Router>
  );
}
