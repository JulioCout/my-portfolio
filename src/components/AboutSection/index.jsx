import { Container } from "./styles"

import profileImg from "../../assets/profile-pic.png"

export function AboutSection({ globalLangPortuguese }) {
    
    return(
        <Container>
            <div id="about" className="aboutSection-body">

                <img src={profileImg} className="character" alt="" />

                <div className="text-container">
                    <h2 className="about-title">{globalLangPortuguese ? "Sobre mim" : "About me"}</h2>
                    <p className="about-text">
                        {
                            globalLangPortuguese ? "Técnico de Automação Industrial a 10 anos com experiência em lógica de programação, linguagem C++ e Ladder. Pós-graduado em Engenharia de Software com experiência no desenvolvimento backend com Python, Django, Node.js, SQL, noSQL, entre outras tecnologias e bibliotecas."
                            :
                            "Industrial Automation Technician for 10 years with experience in programming logic, C++ and Ladder languages. Postgraduate in Software Engineering with experience in backend development with Python, Django, Node.js, SQL, noSQL, among other technologies and libraries."
                        }
                    </p>
                </div>

            </div>
        </Container>
    )
}
