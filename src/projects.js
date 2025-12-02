import none from "./assets/none.gif";
import capa2 from "./assets/projects/capa_projeto2.png";
import capa3 from "./assets/projects/capa_projeto3.png";


import projeto1_1 from "./assets/projects/brookliss/projeto2_1.png";
import projeto1_2 from "./assets/projects/brookliss/projeto2_2.png";
import projeto1_3 from "./assets/projects/brookliss/projeto2_3.png";
import projeto1_4 from "./assets/projects/brookliss/projeto2_4.png";
import projeto1_5 from "./assets/projects/brookliss/projeto2_5.png";
import projeto1_6 from "./assets/projects/brookliss/projeto2_6.png";
import projeto1_7 from "./assets/projects/brookliss/projeto2_7.png";
import projeto1_8 from "./assets/projects/brookliss/projeto2_8.png";

import projeto2_1 from "./assets/projects/leitura-biblica/projeto3_1.png";
import projeto2_2 from "./assets/projects/leitura-biblica/projeto3_2.png";
import projeto2_3 from "./assets/projects/leitura-biblica/projeto3_3.png";
import projeto2_4 from "./assets/projects/leitura-biblica/projeto3_4.png";
import projeto2_5 from "./assets/projects/leitura-biblica/projeto3_5.png";
import projeto2_6 from "./assets/projects/leitura-biblica/projeto3_6.png";
import projeto2_7 from "./assets/projects/leitura-biblica/projeto3_7.png";

export const projects = [

    {
        id: 0,
        name: "Landing Page Brookliss",
        capa: capa2,
        images: [
            projeto1_1,
            projeto1_2,
            projeto1_3,
            projeto1_4,
            projeto1_5,
            projeto1_6,
            projeto1_7,
            projeto1_8,
        ],
        description: "Landing page de uma loja de produtos de beleza capilar.",
        link: "https://brookliss.vercel.app/"
    },
    {
        id: 1,
        name: "Leitura Biblica",
        capa: capa3,
        images: [
            projeto2_1,
            projeto2_2,
            projeto2_3,
            projeto2_4,
            projeto2_5,
            projeto2_6,
            projeto2_7,
         
        ],
        description: "Lista de conclusão de capítulos da Bíblia Sagrada",
        link: "https://leitura-biblica-nine.vercel.app/"
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