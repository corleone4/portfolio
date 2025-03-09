import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 overflow-hidden py-16"
    >
      <div data-aos="zoom-in">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          A minha trajetória a seguir
        </motion.h1>

        <motion.p
          className="text-lg mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Comecei no mundo da programação no meio de 2023, com o curso técnico
          de Desenvolvimento de Sistemas no SENAI de Santa Bárbara d'Oeste. A
          cada projeto, aprendo mais sobre as possibilidades de transformar
          ideias em soluções inovadoras e funcionais.
        </motion.p>

        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Minha Jornada</h2>
            <div className="border-l-4 border-white pl-4">
              <div className="mb-8">
                <motion.div
                  className="flex items-center mb-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                  <span data-aos="fade-right" data-aos-delay="75">
                    <span className="text-green-500">Julho de 2023</span> até <span className="text-yellow-500">Dezembro de 2024</span> - Curso Técnico de Desenvolvimento de
                    Sistemas - SENAI Santa Bárbara d'Oeste
                  </span>
                </motion.div>
              </div>
              <div className="mb-8">
                <motion.div
                  className="flex items-center mb-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                  <span data-aos="fade-right" data-aos-delay="150">
                  <span className="text-green-500">Setembro de 2023</span> até <span className="text-yellow-500">Dezembro de 2023</span> - Curso de Programação em C# - SENAI Santa Bárbara d'Oeste
                  </span>
                </motion.div>
              </div>
              <div className="mb-8">
                <motion.div
                  className="flex items-center mb-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                  <span data-aos="fade-right" data-aos-delay="250">
                  <span className="text-green-500">Agosto de 2024</span> até <span className="text-yellow-500">Dezembro de 2024</span> - Curso de React e React Native - SENAI Santa Bárbara d'Oeste
                  </span>
                </motion.div>
              </div>
              <div className="mb-8">
                <motion.div
                  className="flex items-center mb-2"
                >
                  <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                  <span data-aos="fade-right" data-aos-delay="350">
                  <span className="text-green-500">Agosto de 2024</span> até <span className="text-yellow-500">Dezembro de 2024</span> - Interfaces Web e Bootstrap com Frameworks de PHP - SENAI Santa Bárbara d'Oeste
                  </span>
                </motion.div>
              </div>
              <div className="mb-8">
                <motion.div
                  className="flex items-center mb-2"
                >
                  <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                  <span data-aos="fade-right" data-aos-delay="450">
                  <span className="text-green-500">Outubro de 2024</span> até <span className="text-yellow-500">Dezembro de 2024</span> - Python para Data Science - SENAI Santa Bárbara d'Oeste 
                  </span>
                </motion.div>
              </div>
              
              <div className="mb-8">
                <motion.div
                  className="flex items-center mb-2"
                >
                  <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                  <span data-aos="fade-right" data-aos-delay="550">
                  <span className="text-green-500">Fevereiro de 2025</span> - Analise e Desenvolvimento de Sistemas - FATEC Americana "Ministro Ralph Biasi"
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center gap-8 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300"
          >
            Vamos conversar
          </a>  
        </motion.div>
      </div>
    </section>
  );
}
