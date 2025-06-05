import { createContext, useState, useContext } from 'react';

const FavoritosContext = createContext();
export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const abrirModal = (item) => {
    setItemSelecionado(item);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const confirmarFavorito = (nomeCustomizado) => {
    const novoFavorito = { original: itemSelecionado, nome: nomeCustomizado };
    setFavoritos([...favoritos, novoFavorito]);
    fecharModal();
  };

  const removerFavorito = (original) => {
    setFavoritos(favoritos.filter(fav => fav.original !== original));
  };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        modalAberto,
        itemSelecionado,
        abrirModal,
        fecharModal,
        confirmarFavorito,
        removerFavorito
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
