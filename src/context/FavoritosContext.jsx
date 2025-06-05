import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (item) => {
    setFavoritos((prev) => [...prev, item]);
  };

  const removerFavorito = (item) => {
    setFavoritos((prev) => prev.filter(fav => fav !== item));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}
