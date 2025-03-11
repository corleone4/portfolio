import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id='home' className="relative flex flex-col items-center justify-center h-screen text-center bg-slate-950 text-white px-6 overflow-hidden">
      {/* Linhas decorativas */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-10 w-20 h-1 bg-blue-400 rotate-12" />
        <div className="absolute bottom-1/3 right-16 w-32 h-1 bg-blue-400 -rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-24 h-1 bg-blue-400 rotate-45" />
      </motion.div>

      {/* Círculos difusos */}
      <motion.div
        className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-blue-500 rounded-full opacity-20 blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ bottom: "34%", right: "15%" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        style={{ top: "50%", left: "35%", transform: "translate(-50%, -50%)" }}
      />

      {/* Conteúdo principal */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Olá, eu sou o<span className="text-blue-400"> Luan</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-6 max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Apelidado de <span className="text-blue-400"> Corleone</span>, sou
        desenvolvedor web crescendo cada vez mais em aprendizado e experiência.
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Veja Meus Projetos
      </motion.a>
    </section>
  );
}
