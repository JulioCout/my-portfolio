import { Container } from "./styles";

import { Skill } from "../Skill";

import html5Img from "../../assets/html5.svg";
import css3Img from "../../assets/css3.svg";
import javascriptImg from "../../assets/javascript.svg";
import vueImg from "../../assets/vue.svg"
import reactjsImg from "../../assets/reactjs.svg";
import nodejsImg from "../../assets/nodejs.svg";
import mysqlImg from "../../assets/mysql.svg";
import expressImg from "../../assets/express.svg";

export function SkillsSection({ globalLangPortuguese }) {
  const frontSkills = [
    {
      id: 1,
      icon: `${html5Img}`,
      title: "HTML",
      descriptionPT: "Desenvolvimento de sites completos.",
      descriptionEN: "Development of complete websites.",
    },
    {
      id: 2,
      icon: `${css3Img}`,
      title: "CSS",
      descriptionPT:
        "Sites fiéis aos mais variados designs propostos pelo cliente ou empresa.",
      descriptionEN:
        "Webites identical to the most varied projects proposed by the company.",
    },
    {
      id: 3,
      icon: `${javascriptImg}`,
      title: "JavaScript",
      descriptionPT:
        "Criação de funções mais avançadas em aplicações web com JavaScript.",
      descriptionEN:
        "Creating more advanced functions in web applications using JavaScript.",
    },
    {
      id: 4,
      icon: `${vueImg}`,
      title: "Vue",
      descriptionPT: "Desenvolvimento de aplicações para web com Vue.",
      descriptionEN: "Development of web applications with Vue.",
    },
    {
      id: 5,
      icon: `${reactjsImg}`,
      title: "React",
      descriptionPT: "Desenvolvimento de aplicações para web com React.",
      descriptionEN: "Development of web applications with React.",
    },
  ];

  const backSkills = [
    {
      id: 1,
      icon: `${nodejsImg}`,
      title: "Node.Js",
      descriptionPT:
        "Criação de páginas mais robustas com acesso a banco de dados.",
      descriptionEN: "Creation of more robust pages with database access.",
    },
    {
      id: 2,
      icon: `${expressImg}`,
      title: "Express",
      descriptionPT: "Criação de APIs RESTful com o framework Express.",
      descriptionEN: "Building RESTful APIs with the Express framework.",
    },
    {
      id: 3,
      icon: `${mysqlImg}`,
      title: "MySql",
      descriptionPT:
        "Criação e manipulação de banco de dados na linguagem SQL.",
      descriptionEN: "Creation and manipulation of databases in SQL language.",
    },
  ];

  return (
    <Container>
      <div id="skills" className="skillsSection-body">
        <h2>{globalLangPortuguese ? "Minhas Habilidades" : "My Skills"}</h2>

        <div className="skills-content">
          <h3>Front End</h3>
          <div className="content-wrapper">
            {frontSkills.map((skill) => (
              <Skill
                key={skill.id}
                icon={skill.icon}
                title={skill.title}
                description={
                  globalLangPortuguese
                    ? skill.descriptionPT
                    : skill.descriptionEN
                }
              />
            ))}
          </div>

          <h3>Back End</h3>
          <div className="content-wrapper">
            {backSkills.map((skill) => (
              <Skill
                key={skill.id}
                icon={skill.icon}
                title={skill.title}
                description={
                  globalLangPortuguese
                    ? skill.descriptionPT
                    : skill.descriptionEN
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
