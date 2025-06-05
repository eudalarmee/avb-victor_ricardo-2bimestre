import { useFavoritos } from '../context/FavoritosContext';

const Historico = () => {
  const { favoritos, removerFavorito } = useFavoritos();

  return (
    <div className="p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Histórico de Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>Nenhum item favoritado ainda.</p>
      ) : (
        favoritos.map((fav, index) => (
          <div key={index} className="p-2 bg-yellow-100 my-2 flex justify-between items-center rounded">
            <div>
              <strong>{fav.nome}</strong>  
              <span className="text-gray-600 text-sm block">({fav.original})</span>
            </div>
            <button
              onClick={() => removerFavorito(fav.original)}
              className="bg-red-500 text-black px-3 py-1 rounded hover:bg-red-600"
            >
              Remover
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Historico;
