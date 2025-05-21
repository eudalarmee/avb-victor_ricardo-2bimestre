import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Certifique-se que o CSS está no mesmo caminho

export default function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>Menu</h2>
        <ul>
          <li style={{ cursor: 'pointer' }} onClick={() => navigate('/introducao')}>
            Introdução
          </li>
          <li style={{ cursor: 'pointer' }} onClick={() => navigate('/perfil')}>
            Perfil
          </li>
          <li
            style={{ cursor: 'pointer', color: '#fff' }}
            onClick={onLogout}
          >
            Logout
          </li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1>Dashboard MuscleMax</h1>

        <div className="dashboard-card">
          <h2>Informações Importantes</h2>
          <p>Conteúdo e informações relevantes do usuário ou sistema.</p>
        </div>

        <div className="dashboard-card">
          <h2>Estatísticas</h2>
          <p>Algumas estatísticas básicas e gráficos futuros.</p>
        </div>
      </main>
    </div>
  );
}
