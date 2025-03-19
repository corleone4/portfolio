import React, { useState } from "react";
import ImageCard from "../components/ImageCard.jsx";
import { motion } from "framer-motion";
import AnimatedTextCard from "../components/AnimatedTextCard.jsx";
import TiltCard from "../components/TiltCard.jsx";
import TiltCardModal from "../components/TiltCardModal.jsx";

export default function Certificates() {
  const [selectedCard, setSelectedCard] = useState(null);
  const certificates = [
    { image: "./img/web-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51424238390/14727267"},
    { image: "./img/fund-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51424238294/14716769"},
    { image: "./img/csharp-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51423235086/14072248"},
    { image: "./img/python-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=51424239115/14809347"},
    { image: "./img/etica-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=00033333/7342272"},
    { image: "./img/lgpd-cert.jpg", auth_link: "http://www.sp.senai.br/consulta-certificado?qrcode=00025077/7342272"},
  ];

  return (
    <>
      <section id="certificates" className="py-12 bg-slate-950 sm:py-16 lg:py-20">
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
