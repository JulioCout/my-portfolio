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
                            globalLangPortuguese ? "Pós-Graduado em Engenharia de Software com experiência em projetos para Web com foco em Front End com JavaScript, HTML, CSS e React. Além disso, possuo conhecimentos em Scrum, TypeScript, Git, Sass, Styled Components, Figma, NodeJs, SQL entre outras tecnologias e bibliotecas."
                            :
                            "Postgraduate in Software Engineering with experience in Web projects focused on Front End with JavaScript, HTML, CSS and React. Also, I have knowledge in Scrum, TypeScript, Git, Sass, Styled-Components, Figma, NodeJs, SQL among other technologies and libraries."
                        }
                    </p>
                    
                    <p className="about-text">
                        {
                            globalLangPortuguese ? "Possuo conhecimento na área de desenvolvimento web desde 2011, quando era Web Designer e criava sites como freelancer. Atualmente estou me especializando em JavaScript para regressar a área de desenvolvimento web. Nos últimos seis anos atuei na área de supervisão de manutenção e automação."
                            :
                            "I have knowledge in the area of web development since 2011, when I was a Web Designer and created websites as a free lancer. I'm currently specializing in JavaScript to return to web development. In the last 6 years I worked in the area of maintenance supervision and automation. I studied English for 8 years, and can understand and communicate in this language."
                        }
                    </p>
                </div>

            </div>
        </Container>
    )
}
