import { motion } from "framer-motion";
import Card from "./Card";
import { Link } from "react-router-dom";
import { projects } from "../projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="lg:max-w-7xl max-w-full mx-auto flex py-12 mb-12 items-center justify-baseline"
    >
      <div className="px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="p-2">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 dark:text-white text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03, y: 0, x: 0 }}
          >
            Projetos
          </motion.h1>

          <motion.p
            className="text-lg mb-6 lg:max-w-3/4max-w-5/6 dark:text-gray-300 text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Aqui estão os projetos que eu desenvolvi ao longo dos meus estudos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center mx-auto gap-4 p-1">
              {projects.map((project) => (
                <Link to={`/projeto/${project.id}`}>
                  <Card
                    key={project.name}
                    title={project.name}
                    image={project.capa}
                  >
                    <span className="dark:text-gray-300 text-stone-800">
                      {project.description}
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
