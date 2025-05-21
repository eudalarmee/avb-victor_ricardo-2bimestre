import React from 'react';
import './Introducao.css'; // Se você tiver o CSS, ou remova a linha

export default function Introducao() {
  return (
    <div className="introducao-container">
      <h1 className="introducao-title">Bem-vindo à Introdução</h1>
      <p className="introducao-description">
        Esta é a página inicial da introdução do MuscleMax. Aqui você pode colocar informações sobre o sistema, boas-vindas e orientações.
      </p>
      <button className="introducao-button" onClick={() => alert('Botão clicado!')}>
        Saiba Mais
      </button>
    </div>
  );
}
