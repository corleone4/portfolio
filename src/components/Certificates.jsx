import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import AnimatedTextCard from "./AnimatedTextCard";
import TiltCard from "./TiltCard";
import TiltCardModal from "../components/TiltCardModal.jsx";

export default function Certificates() {
  const [selectedCard, setSelectedCard] = useState(null);
  const certificates = [
    { image: "./img/web-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51424238390/14727267"},
    { image: "./img/fund-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51424238294/14716769"},
    { image: "./img/csharp-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51423235086/14072248"},
    { image: "./img/python-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51424239115/14809347"},
  ];

  return (
    <>
      <section className="py-12 bg-slate-950 sm:py-16 lg:py-20">
        <div
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-500 font-pj">
                Meus certificados
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-200 sm:text-4xl xl:text-5xl font-pj">
                Veja <span className="text-red-400">aqui</span> as minhas
                certificações e diplomas!
              </h2>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3">
              <a
                href="#"
                title=""
                className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
              ></a>
            </div>

            <div className="relative mt-4 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCard(cert)}
                    onClose={() => setSelectedCard(null)}
                  >
                    <TiltCard image={cert.image} />
                  </div>
                ))}
              </div>
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
