import React, { useState } from 'react';
import { useFavoritos } from '../../context/FavoritosContext';

function Home() {
  const { adicionarFavorito, favoritos } = useFavoritos();
  
  const [itensDisponiveis, setItensDisponiveis] = useState([
    'Livro: ReactJS',
    'Curso: Front-End',
    'Artigo: Context API',
  ]);
  
  const [novoItem, setNovoItem] = useState('');

  const handleAdicionarItem = () => {
    if (novoItem.trim() !== '') {
      setItensDisponiveis([...itensDisponiveis, novoItem.trim()]);
      setNovoItem('');
    }
  };

  const handleFavoritar = (item) => {
    if (!favoritos.includes(item)) {
      adicionarFavorito(item);
    }
  };

  return (
    <div className="home">
      <h1>Itens Disponíveis</h1>

      <div className="adicionar-item">
        <input
          type="text"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          placeholder="Novo item"
        />
        <button onClick={handleAdicionarItem}>Adicionar</button>
      </div>

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
