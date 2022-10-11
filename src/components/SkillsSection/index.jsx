import { Container } from "./styles"

import { Skill } from "../Skill"

import html5Img from "../../assets/html5.svg"
import css3Img from "../../assets/css3.svg"
import javascriptImg from "../../assets/javascript.svg"
import reactjsImg from "../../assets/reactjs.svg"
import nodejsImg from "../../assets/nodejs.svg"
import mysqlImg from "../../assets/mysql.svg"



export function SkillsSection({ globalLangPortuguese }) {
    
    const frontSkills = [
        {
            id: 1,
            icon: `${html5Img}`,
            descriptionPT: "Desenvolvimento de sites completos.",
            descriptionEN: "Development of complete websites."
        },
        {
            id: 2,
            icon: `${css3Img}`,
            descriptionPT: "Sites fiéis aos mais variados designs propostos pelo cliente ou empresa.",
            descriptionEN: "Webites identical to the most varied projects proposed by the company."
        },
        {
            id: 3,
            icon: `${javascriptImg}`,
            descriptionPT: "Criação de funções mais avançadas em aplicações web com JavaScript.",
            descriptionEN: "Creating more advanced functions in web applications using JavaScript."
        },
        {
            id: 4,
            icon: `${reactjsImg}`,
            descriptionPT: "Desenvolvimento de aplicações para web com React.",
            descriptionEN: "Development of web applications with React."
        }
    ]

    const backSkills = [
        {
            id: 1,
            icon: `${nodejsImg}`,
            descriptionPT: "Criação de páginas mais robustas com acesso a banco de dados.",
            descriptionEN: "Creation of more robust pages with database access."
        },
        {
            id: 2,
            icon: `${mysqlImg}`,
            descriptionPT: "Criação e manipulação de banco de dados na linguagem SQL.",
            descriptionEN: "Creation and manipulation of databases in SQL language."
        }
    ]

    return(
        <Container>
            <div id="skills" className="skillsSection-body">
                
                <h2>{globalLangPortuguese ? "Minhas Habilidades" : "My Skills"}</h2>

                <div className="skills-content">
                    <div className="content-wrapper">
                        <h3>Front End</h3>
                        {frontSkills.map(skill => (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                description={globalLangPortuguese? skill.descriptionPT : skill.descriptionEN}
                            />
                        ))}
                    </div>

                    <div className="content-wrapper">
                        <h3>Back End</h3>
                        {backSkills.map(skill => (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                title={skill.title}
                                description={globalLangPortuguese? skill.descriptionPT : skill.descriptionEN}
                            />
                        ))}
                    </div>
                </div>
                
        </div>
        </Container>
    )
}