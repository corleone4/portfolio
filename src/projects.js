import none from "./assets/none.gif";
import capa1 from "./assets/projects/capa_projeto1.png";
import capa2 from "./assets/projects/capa_projeto2.png";
import projeto1_1 from "./assets/projects/clinica-fisio/projeto1_1.png";
import projeto1_2 from "./assets/projects/clinica-fisio/projeto1_2.png";
import projeto1_3 from "./assets/projects/clinica-fisio/projeto1_3.png";
import projeto1_4 from "./assets/projects/clinica-fisio/projeto1_4.png";
import projeto1_5 from "./assets/projects/clinica-fisio/projeto1_5.png";
import projeto1_6 from "./assets/projects/clinica-fisio/projeto1_6.png";

import projeto2_1 from "./assets/projects/brookliss/projeto2_1.png";
import projeto2_2 from "./assets/projects/brookliss/projeto2_2.png";
import projeto2_3 from "./assets/projects/brookliss/projeto2_3.png";
import projeto2_4 from "./assets/projects/brookliss/projeto2_4.png";
import projeto2_5 from "./assets/projects/brookliss/projeto2_5.png";
import projeto2_6 from "./assets/projects/brookliss/projeto2_6.png";
import projeto2_7 from "./assets/projects/brookliss/projeto2_7.png";
import projeto2_8 from "./assets/projects/brookliss/projeto2_8.png";


export const projects = [
    {
        id: 0,
        name: "Gerenciamento de Pacientes",
        capa: capa1,
        images: [
            projeto1_1,
            projeto1_2,
            projeto1_3,
            projeto1_4,
            projeto1_5,
            projeto1_6,
        ],
        description: "Sistema para gerenciar pacientes e agendamentos de uma clínica de fisioterapia.",
    },
    {
        id: 1,
        name: "Landing Page Brookliss",
        capa: capa2,
        images: [
            projeto2_1,
            projeto2_2,
            projeto2_3,
            projeto2_4,
            projeto2_5,
            projeto2_6,
            projeto2_7,
            projeto2_8,
        ],
        description: "Landing page de uma loja de produtos de beleza capilar.",
        link: "https://brookliss.vercel.app/"
    },
    {
        id: 2,
        name: "Projeto 3",
        capa: none,
        description: "Ainda não há um projeto aqui!",
        link: "#"
    },
    {
        id: 3,
        name: "Projeto 4",
        capa: none,
        description: "Ainda não há um projeto aqui!",
        link: "#"
    },
];