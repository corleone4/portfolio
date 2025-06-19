import { motion } from "framer-motion";
import photo from "../assets/pfp.jpg";
import { useState } from "react";
import ImageFrame from "./ImageFrame";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="lg:max-w-7xl max-w-full mx-auto py-8 pb-18 mb-12 text-white flex items-center lg:justify-baseline"
    >
      <div className="px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="p-2">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{scale: 1.03, y: 0, x: 0}}
          >
            Sobre <span className="text-cyan-500">mim</span>
          </motion.h1>
          <motion.div className="flex lg:flex-row md:flex-col sm:flex-1 flex-col justify-center gap-6 items-start">
            <motion.p
              className="text-lg lg:max-w-2/6 md:max-w-5/6 max-w-5/6 text-gray-900 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <b>
                Olá! Meu nome é Luan Henrique e eu gosto de usar minha
                criatividade para construir websites na internet.
              </b>{" "}
              Meu interesse pelo desenvolvimento web começou em 2023, quando eu
              soube de uma turma de Desenvolvimento de Sistemas na escola{" "}
              <span className="text-red-500 font-semibold">SENAI </span>e decidi
              me inscrever para descobrir do que se tratava — quando comecei,
              achei interessante o fato de que eu poderia ter a capacidade de
              colocar todos os projetos e aspirações minhas em forma de uma
              página web.
            </motion.p>
            <motion.p
              className="text-lg mb-6 lg:max-w-2/6 max-w-5/6 text-gray-900 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comecei com{" "}
              <span className="text-orange-500 font-semibold">HTML</span>,{" "}
              <span className="text-cyan-500 font-semibold">CSS</span> &{" "}
              <span className="text-yellow-400 font-semibold">Javascript</span>{" "}
              e um pouco de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-red-600 font-semibold inline-block text-transparent bg-clip-text">
                Java
              </span>
              , e atualmente, estou estudando{" "}
              <span className="text-cyan-500 font-semibold">React</span>.
              <span className="text-yellow-400 font-semibold">js</span> &{" "}
              <span className="text-cyan-400 font-semibold ">
                Tailwind CSS{" "}
              </span>
              em cursos online. Ainda não trabalhei na área, porém sigo me
              esforçando para ter minha chance de ingressar no meu primeiro
              emprego. Meu foco principal como <i>dev</i> é projetar uma
              experiência do usuário que tenha como foco o próprio usuário,
              atendendo as demandas do mercado e sempre contendo as melhores
              tendências.
            </motion.p>
            <motion.div className="text-lg mb-6 lg:max-w-3/4 max-w-5/6 text-gray-900 dark:text-gray-400">
              <ImageFrame photo={photo} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
