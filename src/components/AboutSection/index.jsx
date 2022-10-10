import { Container } from "./styles"

import footerImg from "../../assets/Saly-13.png"

export function AboutSection() {
    
    return(
        <Container>
            <div className="aboutSection-body">
                <div className="text-container">
                    <h2>Sobre mim</h2>
                    <p className="about-text">
                        Pós-Graduado em Engenharia de Software com experiência em projetos para Web com foco em Front End com JavaScript, HTML, CSS e React JS. Além disso, possuo conhecimentos em Scrum, TypeScript, Git, Sass, Styled Components, Figma, NodeJs, SQL entre outras tecnologias e bibliotecas.
                    </p>
                    
                    <p className="about-text">
                        Possuo conhecimento na área de desenvolvimento web desde 2011, quando era Web Designer e criava sites como freelancer. Atualmente estou me especializando em JavaScript para regressar a área de desenvolvimento web. Nos últimos seis anos atuei na área de supervisão de manutenção e automação.
                    </p>
                </div>

                <img src={footerImg} className="character" alt="" />
            </div>
        </Container>
    )
}
