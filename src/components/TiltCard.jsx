import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function TiltShineCard({ image }) {
  const ROTATION_RANGE = 20;
  const ref = useRef(null);

  // Valores para rotação
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Valores para o brilho (shine)
  const shineX = useMotionValue("50%");
  const shineY = useMotionValue("50%");
  const opacity = useMotionValue(0); // Inicia oculto

  // Suaviza os movimentos
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  // Aplica rotação
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Ajuste para centralizar a rotação
    const rX = ((mouseY / height - 0.5) * -ROTATION_RANGE).toFixed(2);
    const rY = ((mouseX / width - 0.5) * ROTATION_RANGE).toFixed(2);

    x.set(parseFloat(rX));
    y.set(parseFloat(rY));

    // Atualiza a posição do brilho
    shineX.set(`${(mouseX / width) * 100}%`);
    shineY.set(`${(mouseY / height) * 100}%`);
    opacity.set(1); // Torna o brilho visível
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    opacity.set(0);
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", transform }}
        className="relative h-auto w-72 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border border-white/10 overflow-hidden"
      >
        {/* Brilho dinâmico */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(circle at ${shineX} ${shineY}, 
              rgba(215, 215, 215, 0.25) 0%, 
              rgba(215, 215, 215, 0) 90%)`,
            opacity,
          }}
        />
        <div>
          <img src={image} className="w-96 h-full relative p-1 flex flex-col" />
        </div>
      </motion.div>
    </div>
  );
}
