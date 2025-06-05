import React from 'react';
import './Home.css';
import { useFavoritos } from '../../context/FavoritosContext';

function Home() {
  const { adicionarFavorito, favoritos } = useFavoritos();

  const itensDisponiveis = [
    'Livro: ReactJS',
    'Curso: Front-End',
    'Artigo: Context API',
    'Vídeo: Componentização',
    'Podcast: Tech Trends'
  ];

  const handleFavoritar = (item) => {
    if (!favoritos.includes(item)) {
      adicionarFavorito(item);
    }
  };

  return (
    <div className="home">
      <h1>Itens Disponíveis</h1>
      <ul>
        {itensDisponiveis.map(item => (
          <li key={item}>
            <span>{item}</span>
            <button onClick={() => handleFavoritar(item)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
