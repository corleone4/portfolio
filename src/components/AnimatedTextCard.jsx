import { motion } from "framer-motion";

export default function AnimatedTextCard({ title, description, btDescription }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Começa invisível e deslocado para baixo
      animate={{ opacity: 1, y: 0 }} // Fica visível e sobe para a posição original
      transition={{ duration: 0.5 }} // Duração da animação
      className="relative flex flex-col my-6 bg-white dark:bg-gray-800 dark:text-gray-300 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg w-96 p-4"
    >
      <h6 className="mb-2 text-slate-800 dark:text-gray-100 text-xl font-semibold">
        {title}
      </h6>
      <p className="text-slate-600 dark:text-gray-300 leading-normal font-light">
        {description}
      </p>
      <div className="mt-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-md bg-slate-800 dark:bg-slate-600 py-2 px-4 text-white"
        >
          {btDescription}
        </motion.button>
      </div>
    </motion.div>
  );
}
