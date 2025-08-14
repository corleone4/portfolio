import { useParams, Link } from "react-router-dom";
import { projects } from "./projects";
import Carousel from "./components/Carousel";


export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects[id];

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center h-screen p-8 bg-gray-100 dark:bg-stone-900">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Projeto não encontrado</h1>
                <Link to="/projetos">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Voltar
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-gray-100 h-screen dark:bg-[#121212]">
            <div className="max-w-5xl mx-auto p-8 flex flex-col gap-8">
                {/* Carrossel de imagens */}
                {project.images && project.images.length > 0 && (
                    <Carousel images={project.images} />
                )}

                {/* Informações do projeto */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                    <div className="flex-1">
                        <h1 className="text-5xl font-extrabold mb-4 dark:text-white">{project.name}</h1>
                        <p className="text-lg text-stone-700 dark:text-gray-300">{project.description}</p>
                    </div>

                    {/* Botões de ação */}
                    <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center"
                            >
                                Visitar página
                            </a>
                        )}
                        <Link to="/#projects">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
