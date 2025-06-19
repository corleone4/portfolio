import { useState } from "react";
import TiltCard from "../components/TiltCard.jsx";
import TiltCardModal from "../components/TiltCardModal.jsx";
import { images } from "../images.js";
import { motion } from "framer-motion";

export default function Certificates() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="lg:max-w-7xl max-w-full  mx-auto dark:text-white text-black py-18"
      >
        <div className="px-6 flex flex-col items-start">
          <div className="p-2 mb-10">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{scale: 1.03, y: 0, x: 0}}
            >
              Certificados
            </motion.h1>

            <motion.p
              className="text-lg mb-6 max-w-2xl dark:text-gray-400 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Todos os meus certificados de conclusões de cursos realizados
              durante o meu período de estudo.
            </motion.p>
          </div>

          <div className="relative w-full mb-10">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-15 blur-lg filter"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0049FF -0.55%, #00FFFF 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
              {images.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCard(item)}
                  className="cursor-pointer"
                >
                  <TiltCard image={item.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCard && (
        <TiltCardModal
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
          cert_auth={selectedCard.auth_link}
        />
      )}
    </>
  );
}
