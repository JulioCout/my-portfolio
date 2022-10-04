import { Container } from "./styles"

import { Skill } from "../Skill"

import html5Img from "../../assets/html5.svg"
import css3Img from "../../assets/css3.svg"
import javascriptImg from "../../assets/javascript.svg"
import reactjsImg from "../../assets/reactjs.svg"
import nodejsImg from "../../assets/nodejs.svg"
import mysqlImg from "../../assets/mysql.svg"



export function SkillsSection() {
    
    const frontSkills = [
        {
            icon: `${html5Img}`,
            title: "HTML",
            description: "Desenvolvimento de sites completos."
        },
        {
            icon: `${css3Img}`,
            title: "CSS",
            description: "Sites fiéis aos mais variados designs propostos pelo cliente ou empresa."
        },
        {
            icon: `${javascriptImg}`,
            title: "Javascript",
            description: "Criação de funções mais avançadas em aplicações web com JavaScript."
        },
        {
            icon: `${reactjsImg}`,
            title: "React",
            description: "Desenvolvimento de aplicações para web."
        }
    ]

    const backSkills = [
        {
            icon: `${javascriptImg}`,
            title: "Javascript",
            description: "Criação de funções mais avançadas em aplicações web com JavaScript."
        },
        {
            icon: `${nodejsImg}`,
            title: "Node Js",
            description: "Criação de páginas interativas mais robustas com acesso a banco de dados, como páginas de cadastro, catálogos e banco de informações."
        },
        {
            icon: `${mysqlImg}`,
            title: "MySql",
            description: "Criação e manipulação de banco de dados na linguagem SQL."
        }
    ]

    return(
        <Container>
            <div className="skills-section-body">
            <h2>Algumas de minhas habilidades</h2>
            
            <h3>Front-end</h3>
            <div className="content-wrapper">
                {frontSkills.map(skill => (
                    <Skill 
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </div>

            <h3>Back-end</h3>
            <div className="content-wrapper">
                {backSkills.map(skill => (
                    <Skill 
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </div>
        </div>
        </Container>
    )
}