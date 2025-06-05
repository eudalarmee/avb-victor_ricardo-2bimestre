import React, { useState } from 'react';
import './Favorites.css';
import { useFavoritos } from '../../context/FavoritosContext';

function Favorites() {
  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();
  const [novoFavorito, setNovoFavorito] = useState('');

  const handleAdicionar = () => {
    if (novoFavorito.trim() !== '') {
      adicionarFavorito(novoFavorito.trim());
      setNovoFavorito('');
    }
  };

  return (
    <div className="favorites">
      <h1>Meus Favoritos</h1>

      <div className="favorites-form">
        <input 
          type="text" 
          placeholder="Novo favorito..." 
          value={novoFavorito} 
          onChange={(e) => setNovoFavorito(e.target.value)}
        />
        <button onClick={handleAdicionar}>Adicionar</button>
      </div>

      {favoritos.length === 0 ? (
        <p>Nenhum item favoritado.</p>
      ) : (
        <ul>
          {favoritos.map(item => (
            <li key={item}>
              <span>{item}</span>
              <button onClick={() => removerFavorito(item)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
