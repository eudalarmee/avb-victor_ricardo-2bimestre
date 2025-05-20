import { useLocation, useNavigate } from "react-router-dom";

export default function Detalhes() {
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state?.card;

  if (!card) {
    return (
      <div className="p-4 text-red-600">
        <p>Nenhuma carta selecionada.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Detalhes da Carta</h1>

      <img src={card.image} alt={card.code} className="w-40 mb-4 shadow-lg" />

      <div className="text-lg">
        <p><strong>Valor:</strong> {card.value}</p>
        <p><strong>Naipe:</strong> {card.suit}</p>
        <p><strong>Código:</strong> {card.code}</p>
      </div>

      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </main>
  );
}
