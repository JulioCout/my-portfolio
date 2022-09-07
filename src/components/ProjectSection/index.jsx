import { Container } from "./styles"
import { useState } from "react"

import { Project } from "../Project"

import notesfrontImg from "../../assets/thumbnails/notesfront-thumbnail.png"
import notesbackImg from "../../assets/thumbnails/notesback-thumbnail.png"
import resposiveComponent from "../../assets/thumbnails/responsiveComponent-thumbnail.png"
import imcComponent from "../../assets/thumbnails/imcComponent-thumbnail.png"


export function ProjectSection() {

    const projects = [
        {
            title: "Notes Frontend",
            description: "Frontend de aplicação para guardar anotações e links úteis. Foi utilizado React e Styled Components para construção desse frontend",
            linkDemo: "https://julionotes.netlify.app/",
            linkGit: "https://github.com/JulioCout/Notes_Frontend",
            thumbnail: `${notesfrontImg}`,
            tag: "frontend"
        },
        {
            title: "Notes Backend",
            description: "Backend de aplicação para guardar anotações e links úteis. Foi utilizado NodeJS, Express, Sqlite e Jest, alem de outras tecnologias para construção desse Backend.",
            linkDemo: "https://julionotes.netlify.app/",
            linkGit: "https://github.com/JulioCout/Notes_Backend",
            thumbnail: `${notesbackImg}`,
            tag: "backend"
        },
        {
            title: "Componente de Cards Responsivo",
            description: "Componente para exposição de cards que se adapta para até 3 tamanhos de telas.",
            linkDemo: "https://jobs-component.netlify.app/",
            linkGit: "https://github.com/JulioCout/responsive_grid",
            thumbnail: `${resposiveComponent}`,
            tag: "frontend"
        },
        {
            title: "Componente Cálculo de IMC",
            description: "Componente para realização de cálculo de índice de massa corporal.",
            linkDemo: "https://imc-component.netlify.app/",
            linkGit: "https://github.com/JulioCout/imc-component",
            thumbnail: `${imcComponent}`,
            tag: "tools"
        }
    ]

    const [isActive, setIsActive] = useState("all")
    const [cardsToShow, setCardsToShow] = useState(projects)


    function handleTabSelect(btn){

        if(btn === "all"){
            setCardsToShow(projects)
        } else if(btn === "frontend") {
            setCardsToShow(projects.filter(project => project.tag === "frontend"))
        } else if(btn === "backend") {
            setCardsToShow(projects.filter(project => project.tag === "backend"))
        } else if(btn === "tools") {
            setCardsToShow(projects.filter(project => project.tag === "tools"))
        }

        return setIsActive(btn)
    }

    return(
        <Container>
            <div className="component">
                <h1>Meus Trabalhos</h1>

                <div className="buttons-container">
                    <button onClick={() => handleTabSelect("all")}>
                        <span className={ isActive === "all" ? "active" : "inactive" }>Todos</span>
                    </button>
                    <button onClick={() => handleTabSelect("frontend")}>
                        <span className={ isActive === "frontend" ? "active" : "inactive" }>FrontEnd</span>
                    </button>
                    <button onClick={() => handleTabSelect("backend")}>
                        <span className={ isActive === "backend" ? "active" : "inactive" }>BackEnd</span>
                    </button>
                    <button onClick={() => handleTabSelect("tools")}>
                        <span className={ isActive === "tools" ? "active" : "inactive" }>Tools</span>
                    </button>                   
                </div>

                <div className="cards-container">
                    
                        {cardsToShow.map(project => (
                            <Project 
                                title={project.title}
                                description={project.description}
                                linkDemo={project.linkDemo}
                                linkGit={project.linkGit}
                                thumbnail={project.thumbnail}
                            />
                        ))}
                    
                    
                


                </div>
            </div>
        </Container>
    )
}