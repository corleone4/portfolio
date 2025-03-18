import { motion } from "framer-motion";
export default function TiltCardModal({ selectedCard, onClose, cert_auth}) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        >
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
            ✖
          </button>
          <img src={selectedCard.image} alt={selectedCard.title} className="w-full rounded-lg mb-4" />
          <h2 className="text-xl font-bold">{selectedCard.title}</h2>
          <p className="text-gray-700 mt-2">{selectedCard.text}</p>
          <a href={cert_auth}><button> Confirmar Autenticidade </button></a>
        </motion.div>
      </div>
    );
  }