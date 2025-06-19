import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function TiltShineCard({ image }) {
  const ROTATION_RANGE = 12;
  const ref = useRef(null);
  const frame = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shineX = useMotionValue("50%");
  const shineY = useMotionValue("50%");
  const opacity = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20, mass: 1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg) 
    rotateY(${ySpring}deg)`;

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const handleMouseMove = (e) => {
    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const percentX = clamp(deltaX / (rect.width / 2), -1, 1);
      const percentY = clamp(deltaY / (rect.height / 2), -1, 1);

      const rX = percentY * -ROTATION_RANGE;
      const rY = percentX * ROTATION_RANGE;

      x.set(rX);
      y.set(rY);

      const relativeX = ((deltaX + rect.width / 2) / rect.width) * 100;
      const relativeY = ((deltaY + rect.height / 2) / rect.height) * 100;

      shineX.set(`${relativeX}%`);
      shineY.set(`${relativeY}%`);
      opacity.set(1);
    });
  };

  const handleMouseLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
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
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-auto w-72 
          bg-gradient-to-br dark:from-stone-800 dark:to-stone-900 
          from-gray-300 to-gray-500 
          border-white/30 shadow-xl border dark:border-white/10 
          overflow-hidden rounded-2xl"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(circle at ${shineX} ${shineY}, 
              rgba(255, 255, 255, 0.15) 0%, 
              rgba(255, 255, 255, 0) 80%)`,
            opacity,
          }}
        />

        <div>
          <img
            src={image}
            alt="Card"
            className="w-96 h-full relative p-1 select-none pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
}
