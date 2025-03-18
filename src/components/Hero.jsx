import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

export default function Hero() { 

  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="home"
      className="relative grid min-h-screen place-content-center overflow-hidden bg-slate-950 px-4 py-24 text-gray-200"
    >
      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Olá, eu sou o<span className="text-blue-400"> Luan</span>
        </motion.h1>
        <motion.p
          className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Apelidado de <span className="text-blue-400"> Corleone</span>, sou
          desenvolvedor web crescendo cada vez mais em aprendizado e
          experiência.
        </motion.p>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={55} count={2500} factor={5} fade speed={3} />
        </Canvas>
      </div>  
    </motion.section>
  );
}
