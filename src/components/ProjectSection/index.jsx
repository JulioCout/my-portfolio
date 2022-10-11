import { Container } from "./styles"
import { useState } from "react"

import { Project } from "../Project"

import projects from "../../../jobs-data.json"

export function ProjectSection({ globalLangPortuguese }) {

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
            <div id="projects" className="projectSection-body">

                <h2>{globalLangPortuguese ? "Meus Trabalhos" : "My Projects"}</h2>

                <div className="buttons-container">
                    <button onClick={() => handleTabSelect("all")}>
                        <span className={ isActive === "all" ? "active" : "inactive" }>
                            {globalLangPortuguese ? "Todos" : "All"}
                        </span>
                    </button>
                    <button onClick={() => handleTabSelect("frontend")}>
                        <span className={ isActive === "frontend" ? "active" : "inactive" }>
                            Front End
                        </span>
                    </button>
                    <button onClick={() => handleTabSelect("backend")}>
                        <span className={ isActive === "backend" ? "active" : "inactive" }>
                            Back End
                        </span>
                    </button>
                    <button onClick={() => handleTabSelect("tools")}>
                        <span className={ isActive === "tools" ? "active" : "inactive" }>
                            Tools
                        </span>
                    </button>                   
                </div>

                <div className="cards-container">
                        {cardsToShow.map(project => (
                            <Project
                                key={project.id}
                                title={globalLangPortuguese ? project.titlePT : project.titleEN}
                                description={globalLangPortuguese ? project.descriptionPT : project.descriptionEN}
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