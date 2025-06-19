import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin } from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section id="hero" className="lg:max-w-5xl max-w-full  lg:py-16 lg:mt-[2rem] mx-auto h-screen text-white flex items-center justify-baseline">
      <div className="max-w-5xl px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="p-2">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 text-black dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{scale: 1.03, y: 0, x: 0}}
          >
            Olá! Sou o <span className="text-cyan-500">Luan</span>.<br />
            Atuo no desenvolvimento de projetos{" "}
            <span className="text-cyan-500">web</span>.
          </motion.h1>

          <motion.p
            className="text-lg mb-6 dark:text-gray-300 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typewriter
              words={[
                "Bem vind@!",
                "Desenvolvedor Front-End.",
                "Entusiasta do Desenvolvimento Web.",
                "Apaixonado por Tecnologia.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-md sm:max-w-1/2 md:text-lg lg:text-lg mb-6 dark:text-gray-400 text-gray-800"
          >
            Eu sou um estudante de programação focado na criação de websites
            interativos, focados em uma ótima interação com o usuário.
            Atualmente, busco uma oportunidade de ingressar no mercado de
            trabalho com minhas habilidades.
          </motion.p>

          <div className="flex gap-4">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black dark:text-white">
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button variant="outline" className="hover:bg-cyan-600">
              <a href="#contact">Contato</a>
            </Button>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="https://github.com/corleone4" target="_blank">
              <Github className="dark:text-white text-black hover:text-cyan-400" size={28} />
            </a>
            <a href="https://linkedin.com/in/luan-henrique-dev" target="_blank">
              <Linkedin className="dark:text-white text-black hover:text-cyan-400" size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
