import React from "react";
import ImageCard from "../components/ImageCard";
import { motion } from "framer-motion";
import AnimatedTextCard from "../components/AnimatedTextCard";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white px-6 overflow-hidden py-16"
      >
        
        {/* <motion.h1
          className="text-4xl font-bold mb-6 text-center max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Meus Projetos
        </motion.h1>
        <div className="flex flex-row gap-5">
          <AnimatedTextCard />
          <ImageCard
            image={"../../public/img/Laravel.svg.png"}
            title="Olá"
            description={"Este cartão se trata disto aqui: sim"}
          />

        </div> */}
      </section>
    </>
  );
}
