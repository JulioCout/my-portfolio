import { Container } from "./styles"
import { useState } from "react"

import { Project } from "../Project"

import notesfrontImg from "../../assets/thumbnails/notesfront-thumbnail.png"
import notesbackImg from "../../assets/thumbnails/notesback-thumbnail.png"
import resposiveComponent from "../../assets/thumbnails/responsiveComponent-thumbnail.png"


export function ProjectSection() {

    const fullStackProjects = [
        {
            title: "Notes Frontend",
            description: "Frontend de aplicação para guardar anotações e links úteis. Foi utilizado React e Styled Components para construção desse frontend",
            linkDemo: "https://julionotes.netlify.app/",
            linkGit: "https://github.com/JulioCout/Notes_Frontend",
            thumbnail: `${notesfrontImg}`,
        },
        {
            title: "Notes Backend",
            description: "Backend de aplicação para guardar anotações e links úteis. Foi utilizado NodeJS, Express, Sqlite e Jest, alem de outras tecnologias para construção desse Backend.",
            linkDemo: "https://julionotes.netlify.app/",
            linkGit: "https://github.com/JulioCout/Notes_Backend",
            thumbnail: `${notesbackImg}`,
        }
    ]

    const frontEndProjects = [
        {
            title: "Componente de Cards Responsivo",
            description: "Componente para exposição de cards que se adapta para até 3 tamanhos de telas.",
            linkDemo: "https://jobs-component.netlify.app/",
            linkGit: "https://github.com/JulioCout/responsive_grid",
            thumbnail: `${resposiveComponent}`,
        }
    ]

    const [isActive, setIsActive] = useState("fullstack")
    const [cardsToShow, setCardsToShow] = useState(fullStackProjects)


    function handleTabSelect(btn){

        if(btn === "fullstack"){
            setCardsToShow(fullStackProjects)
        } else {
            setCardsToShow(frontEndProjects)
        }

        return setIsActive(btn)
    }

    return(
        <Container>
            <div className="component">
                <h1>Meus Trabalhos</h1>

                <div className="buttons-container">
                    <button onClick={() => handleTabSelect("fullstack")}>
                        <span className={ isActive === "fullstack" ? "active" : "inactive" }>Full Stack</span>
                    </button>
                    <button onClick={() => handleTabSelect("frontend")}>
                        <span className={ isActive === "frontend" ? "active" : "inactive" }>FrontEnd</span>
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