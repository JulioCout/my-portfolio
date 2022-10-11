import { Container } from "./styles";

import { ButtonLinkedin } from "../ButtonLinkedin";
import { ButtonGithub } from "../ButtonGithub";
import { ButtonResume } from "../ButtonResume";


import headerImg from "../../assets/header-img.svg"
import profilePic from "../../assets/profile-pic.png"

export function HeaderSection({ globalLangPortuguese }) {
    return(
        <Container>
            <div id="init" className="head-container">
                <div className="text-container">

                    <img src={profilePic} className="profile-pic" alt="" />
                    <h1>{globalLangPortuguese ? "Olá! Eu sou o Julio." : "Hello! I'am Julio."} </h1>
                    <h2> <span>Full Stack</span> Web Developer</h2>

                    <div className="buttons-wrapper">
                        <a href="https://www.linkedin.com/in/juliocscoutinho/" target="_blank">
                        <ButtonLinkedin />
                        </a>
                        <a href="https://github.com/JulioCout" target="_blank">
                        <ButtonGithub />
                        </a>
                        <a href={globalLangPortuguese ? "https://drive.google.com/file/d/1j677c9W_adqSCdfju4Z1gYosQnZRLTTe/view?usp=sharing" : "https://drive.google.com/file/d/1ZUcwcLg7b6cQgRdzVhhJgK_D58mE7XIO/view?usp=sharing"} target="_blank">
                        <ButtonResume globalLangPortuguese={globalLangPortuguese} />
                        </a>
                    </div>

                </div>

                <img src={headerImg} className="character" alt="" />
            </div>
        </Container>
    )
}