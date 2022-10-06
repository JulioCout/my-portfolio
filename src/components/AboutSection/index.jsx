import { Container } from "./styles"

import footerImg from "../../assets/Saly-13.png"

export function AboutSection() {
    
    return(
        <Container>
            <div className="aboutSection-body">
                <div className="text-container">
                    <h2>Sobre mim</h2>
                    <p className="about-text">
                    Sempre fui entusiasta de tecnologia e estou em transição de carreira para a área de programação web. Sou pós-graduado em engenharia de software e desenvolvo Frontend com JavaScript, HTML, CSS e React. Além disso, desenvolvo Backend com Node.js, Express e SQL. Tenho contato com desenvolvimento web há 11 anos como hobby e agora estou me profissionalizando na área.
                    </p>
                    
                    <p className="about-text">
                        Atuo a mais de 6 anos com cargo de gestão na área de manutenção, e essa experiência me fez desenvolver alta capacidade de resolução de conflitos, com senso de prioridade e comunicação assertiva.
                    </p>
                </div>

                <img src={footerImg} className="character" alt="" />
            </div>
        </Container>
    )
}