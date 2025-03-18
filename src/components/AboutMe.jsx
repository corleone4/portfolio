import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white px-6 overflow-hidden py-16"
    >
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-6 text-center max-w-4xl">
          A minha trajetória
        </h1>
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-10" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-semibold mb-4">Minha Jornada</h2>
            <div className="border-l-4 border-white pl-4">
              {[
                {
                  date_start: "Julho de 2023",
                  date_end: "Dezembro de 2024",
                  title:
                    "Curso Técnico de Desenvolvimento de Sistemas - SENAI Santa Bárbara d'Oeste",
                },
                {
                  date_start: "Setembro de 2023",
                  date_end: "Dezembro de 2023",
                  title:
                    "Curso de Programação em C# - SENAI Santa Bárbara d'Oeste",
                },
                {
                  date_start: "Agosto de 2024",
                  date_end: "Dezembro de 2024",
                  title:
                    "Curso de React e React Native - SENAI Santa Bárbara d'Oeste",
                  
                },
                {
                  date_start: "Agosto de 2024",
                  date_end: "Dezembro de 2024",
                  title:
                    "Interfaces Web e Bootstrap com Frameworks de PHP - SENAI Santa Bárbara d'Oeste",
                 
                },
                {
                  date_start: "Outubro de 2024",
                  date_end: "Dezembro de 2024",
                  title:
                    "Python para Data Science - SENAI Santa Bárbara d'Oeste",
                  
                },
                {
                  date_start: "Fevereiro de 2025",
                  date_end: "",
                  title:
                    "Análise e Desenvolvimento de Sistemas - FATEC Americana 'Ministro Ralph Biasi'",
                 
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="mb-8"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-white rounded-full mr-4"></div>
                    <span>
                      <span className="text-green-500">{item.date_start}</span> - <span className="text-yellow-500">{item.date_end}</span>{" "}
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p
          className="text-lg mb-6 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          Comecei no mundo da programação no meio de 2023, com o curso técnico
          de Desenvolvimento de Sistemas no SENAI de Santa Bárbara d'Oeste. A
          cada projeto, aprendo mais sobre as possibilidades de transformar
          ideias em soluções inovadoras e funcionais.
        </p>
      </div>
    </section>
  );
}
