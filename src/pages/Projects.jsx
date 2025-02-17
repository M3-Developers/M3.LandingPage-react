import "../Globals.scss";
import "../Style/Projects.scss"
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import ProjectCard from "../components/Projects/ProjectCard";
import {useState, useEffect} from "react";

// Simulação BD dos Projetos
import ProjectsObject from "../SimBD/ProjectsBD.js";

export default function Projects() {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setProjects(ProjectsObject);
        }, 500);
    }, []);

    return (    
        <section className="Projects_Container">
            <Header />
            <main className="Product_Content">
                <h1 className="BlueTitle_Color Projects_Title">Nossos Projetos:</h1>
                {
                    projects ? (
                        Object.entries(projects).map(([Key, ProjectValue]) => (
                            <ProjectCard key={Key} ProjectObject={ProjectValue} />
                        ))
                    ) : (
                        <p className="Loaging_Text">Carregando os projetos...</p>
                    )
                } 
            </main>
            <Footer />
        </section>
    );
}