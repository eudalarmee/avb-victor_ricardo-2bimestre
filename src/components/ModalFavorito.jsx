import { useState } from 'react';
import { useFavoritos } from '../context/FavoritosContext';
import { motion, AnimatePresence } from 'framer-motion';

const ModalFavorito = () => {
  const { modalAberto, fecharModal, confirmarFavorito, itemSelecionado } = useFavoritos();
  const [nomeCustomizado, setNomeCustomizado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomeCustomizado.trim() !== '') {
      confirmarFavorito(nomeCustomizado);
      setNomeCustomizado('');
    }
  };

  return (
    <AnimatePresence>
      {modalAberto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white p-6 rounded-xl shadow-xl w-96"
          >
            <h2 className="text-xl font-bold mb-4">
              Nome para: <br /> 
              <span className="text-blue-600">{itemSelecionado}</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Digite o nome customizado"
                value={nomeCustomizado}
                onChange={(e) => setNomeCustomizado(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={fecharModal}
                  className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalFavorito;
