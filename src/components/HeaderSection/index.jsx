import { Container } from "./styles";

import { ButtonLinkedin } from "../ButtonLinkedin";
import { ButtonGithub } from "../ButtonGithub";
import { ButtonResume } from "../ButtonResume";

export function HeaderSection({ globalLangPortuguese }) {
    return(
        <Container>
            <div id="init" className="head-container">
                <div className="text-container">

                    <h1>{globalLangPortuguese ? "Olá! Eu sou Julio Coutinho." : "Hello! I'am Julio Coutinho."} </h1>
                    <h2>{globalLangPortuguese ? "Desenvolvedor Web Full Stack" : "Full Stack Web Developer"} </h2>

                    <div className="buttons-wrapper">
                        <a href="https://www.linkedin.com/in/juliocscoutinho/" target="_blank">
                        <ButtonLinkedin />
                        </a>
                        <a href="https://github.com/JulioCout" target="_blank">
                        <ButtonGithub />
                        </a>
                        <a href={globalLangPortuguese ? "https://drive.google.com/file/d/1Ym2oTLmGI-xz8-IhiVAdipvTPf08IPHo/view?usp=sharing" : "https://drive.google.com/file/d/1Ym2oTLmGI-xz8-IhiVAdipvTPf08IPHo/view?usp=sharing"} target="_blank">
                        <ButtonResume globalLangPortuguese={globalLangPortuguese} />
                        </a>
                    </div>

                </div>

            </div>
        </Container>
    )
}
