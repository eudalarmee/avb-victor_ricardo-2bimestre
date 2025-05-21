import React from 'react';
import './Perfil.css'; // Se tiver o CSS, ou remova esta linha

export default function Perfil() {
  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <img
          className="perfil-photo"
          src=""
        />
        <h2 className="perfil-name">Victor</h2>
        <p className="perfil-info">Estudante de T.I. no UNASP - Engenheiro Coelho</p>
        <button className="perfil-edit-button">Editar Perfil</button>
      </div>
    </div>
  );
}
