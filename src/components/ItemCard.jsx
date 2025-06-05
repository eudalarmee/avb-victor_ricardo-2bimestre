export default function ItemCard({ item, isFavorite, toggleFavorite }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{item.title}</h2>
      <button
        onClick={() => toggleFavorite(item)}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        {isFavorite ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
}
