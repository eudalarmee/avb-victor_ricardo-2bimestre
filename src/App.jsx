import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import About from './Pages/About';

import Dashboard from './Pages/Dashboard';
import Introducao from './Pages/Introducao';
import Perfil from './Pages/Perfil';
import Login from './Pages/Login';

import { FavoritosProvider } from './context/FavoritosContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/sobre" element={<About />} />

          {/* Rota de login */}
          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
            }
          />

          {/* Rotas protegidas */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/introducao"
            element={isLoggedIn ? <Introducao /> : <Navigate to="/login" />}
          />
          <Route
            path="/perfil"
            element={isLoggedIn ? <Perfil /> : <Navigate to="/login" />}
          />

          {/* Fallback: qualquer rota desconhecida */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/"} />}
          />
        </Routes>
      </BrowserRouter>
    </FavoritosProvider>
  );
}

export default App;
