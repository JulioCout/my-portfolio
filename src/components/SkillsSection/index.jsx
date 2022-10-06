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
            id: 1,
            icon: `${html5Img}`,
            description: "Desenvolvimento de sites completos."
        },
        {
            id: 2,
            icon: `${css3Img}`,
            description: "Sites fiéis aos mais variados designs propostos pelo cliente ou empresa."
        },
        {
            id: 3,
            icon: `${javascriptImg}`,
            description: "Criação de funções mais avançadas em aplicações web com JavaScript."
        },
        {
            id: 4,
            icon: `${reactjsImg}`,
            description: "Desenvolvimento de aplicações para web com React."
        }
    ]

    const backSkills = [
        {
            id: 1,
            icon: `${nodejsImg}`,
            description: "Criação de páginas mais robustas com acesso a banco de dados."
        },
        {
            id: 2,
            icon: `${mysqlImg}`,
            description: "Criação e manipulação de banco de dados na linguagem SQL."
        }
    ]

    return(
        <Container>
            <div className="skillsSection-body">
                
                <h2>Minhas Habilidades</h2>

                <div className="skills-content">
                    <div className="content-wrapper">
                        <h3>Front-end</h3>
                        {frontSkills.map(skill => (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                description={skill.description}
                            />
                        ))}
                    </div>

                    <div className="content-wrapper">
                        <h3>Back-end</h3>
                        {backSkills.map(skill => (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                title={skill.title}
                                description={skill.description}
                            />
                        ))}
                    </div>
                </div>
                
        </div>
        </Container>
    )
}