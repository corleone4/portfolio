import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import SocialLink from "../components/SocialLink";

export default function Social() {
  return (
    <section id="social" className="py-12 bg-slate-950 sm:py-16 lg:py-20">
      <div
        className="px-4 mx-auto bg-slate-900 p-16 max-w-8xl sm:px-6 lg:px-8 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src="./img/github_pfp.jpeg"
              alt="Perfil"
              className="w-64 h-64 rounded-full border-4 border-gray-700 shadow-lg"
            />
          </div>
          {/* 
        
        
        */}
          <div className="flex flex-col items-center text-center md:items-center">
            <h2 className="text-3xl font-bold text-gray-200 sm:text-3xl xl:text-4xl font-pj text-center md:text-left">
              Me encontre nas redes sociais
            </h2>

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
                href="https://instagram.com/lu_4.n"
                icon={<FaInstagram />}
                text="Instagram"
              />
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-200">
                <span className="text-xl"><FaDiscord/></span>
                <span>luan_corleone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

