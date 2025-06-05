import { useFavoritos } from '../context/FavoritosContext';

const Item = ({ item }) => {
  const { abrirModal } = useFavoritos();

  return (
    <div className="p-4 bg-gray-200 my-2 flex justify-between items-center rounded">
      <span>{item}</span>
      <button
        onClick={() => abrirModal(item)}
        className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600"
      >
        Favoritar
      </button>
    </div>
  );
};

export default Item;
