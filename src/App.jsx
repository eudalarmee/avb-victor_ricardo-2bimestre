import { FavoritosProvider } from './context/FavoritosContext';
import Historico from './components/Historico';
import Item from './components/Item';
import ModalFavorito from './components/ModalFavorito';

const itensDisponiveis = [
  "Livro: ReactJS",
  "Curso: Front-End",
  "Artigo: Context API",
  "Vídeo: Componenteização",
  "Podcast: Tech Trends"
];

const App = () => {
  return (
    <FavoritosProvider>
      <div className="p-8 bg-slate-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Itens Disponíveis</h1>
        {itensDisponiveis.map((item, index) => (
          <Item key={index} item={item} />
        ))}

        <Historico />
        <ModalFavorito />
      </div>
    </FavoritosProvider>
  );
};

export default App;
