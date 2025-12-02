import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import SocialLink from "../components/SocialLink";
import githubPfp from "../assets/github_pfp.jpeg";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section
      id="contact"
      className="lg:max-w-7xl max-w-full  mx-auto py-12 dark:text-white text-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <img
            src={githubPfp}
            alt="Perfil"
            className="w-64 h-64 rounded-full border-4 border-gray-300 dark:border-stone-900 shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center text-center md:items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03, y: 0, x: 0 }}
            className="text-3xl font-bold text-black dark:text-gray-200 sm:text-3xl xl:text-4xl font-pj text-center md:text-left"
          >
            Me encontre nas redes sociais
          </motion.h2>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <SocialLink
              href="https://github.com/corleone4"
              icon={<FaGithub />}
              text="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/luan-henrique-dev"
              icon={<FaLinkedin />}
              text="LinkedIn"
            />
            <SocialLink
              href="https://instagram.com/lu.henri4"
              icon={<FaInstagram />}
              text="Instagram"
            />
            <SocialLink
              href="mailto:luan.ferreira.f.04@gmail.com"
              icon={<FaEnvelope />}
              text="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
