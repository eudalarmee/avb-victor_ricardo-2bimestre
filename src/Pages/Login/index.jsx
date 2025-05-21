import React, { useState } from 'react';
import './Login.css'; // Seu arquivo CSS


export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Simulação de autenticação — aqui você pode validar ou chamar API
    if (email && password) {
      onLogin(); // Sinaliza que login foi bem sucedido
    } else {
      alert('Preencha email e senha');
    }
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">MuscleMax Login</h2>
        <input
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Entrar</button>
        {/* Registro desativado, mas pode adicionar futuramente */}
      </form>
    </div>
  );
}
