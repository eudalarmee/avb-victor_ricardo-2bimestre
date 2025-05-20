import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  async function drawCards() {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=5");
    const data = await response.json();
    setCards(data.cards);
  }

  function handleCardClick(card) {
    navigate("/detalhes", { state: { card } });
  }

  return (
    <main className="p-4">
      <header className="bg-blue-500 text-white p-4 rounded">
        <h1 className="text-xl font-bold">Deck de Cartas</h1>
      </header>

      <div className="mt-6">
        <button
          onClick={drawCards}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Sortear Cartas
        </button>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleCardClick(card)}
            >
              <img src={card.image} alt={card.code} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
