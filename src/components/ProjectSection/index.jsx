import { Container } from "./styles"
import { useState } from "react"

import { Project } from "../Project"

import projects from "../../../jobs-data.json"

export function ProjectSection() {

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
                <h2>Meus Trabalhos</h2>

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