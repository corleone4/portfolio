import { useEffect } from "react";
import { motion } from "framer-motion";

export default function TiltCardModal({ selectedCard, onClose, cert_auth }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-slate-950 p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md relative"
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✖
        </button>

        {/* Conteúdo do Modal */}
        <img
          src={selectedCard.image}
          alt={selectedCard.title}
          className="w-full rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold text-white">{selectedCard.title}</h2>
        <p className="text-gray-400 mt-2">{selectedCard.text}</p>

        <a href={cert_auth}>
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md">
            Confirmar Autenticidade
          </button>
        </a>
      </motion.div>
    </div>
  );
}
