import { Container } from "./styles";

import { Skill } from "../Skill";

import html5Img from "../../assets/html.png";
import css3Img from "../../assets/css.png";
import javascriptImg from "../../assets/js.png";
import vueImg from "../../assets/vuejs.png";
import vuetifyImg from "../../assets/vuetify.png"
import nuxtImg from "../../assets/nuxt-logo.png"
import reactjsImg from "../../assets/react.png";
import nodejsImg from "../../assets/nodejs.svg";
import mysqlImg from "../../assets/mysql.svg";
import figmaImg from "../../assets/figma.webp";
import sassImg from "../../assets/sass.svg";
import githubImg from "../../assets/github.png";

export function SkillsSection({ globalLangPortuguese }) {
  const skills = [
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
      icon: `${vuetifyImg}`,
      title: "Vuetify",
      descriptionPT: "Desenvolvimento de aplicações para web com Vue e Vuetify.",
      descriptionEN: "Development of web applications with Vue and Vuetify.",
    },
    {
      id: 6,
      icon: `${nuxtImg}`,
      title: "Nuxt",
      descriptionPT: "Desenvolvimento de aplicações para web com Nuxt.",
      descriptionEN: "Development of web applications with Nuxt.",
    },
    {
      id: 7,
      icon: `${reactjsImg}`,
      title: "React",
      descriptionPT: "Desenvolvimento de aplicações para web com React.",
      descriptionEN: "Development of web applications with React.",
    },
    {
      id: 8,
      icon: `${nodejsImg}`,
      title: "Node.Js",
      descriptionPT: "Criação de páginas mais robustas com acesso a banco de dados.",
      descriptionEN: "Creation of more robust pages with database access.",
    },
    {
      id: 9,
      icon: `${mysqlImg}`,
      title: "MySql",
      descriptionPT: "Criação e manipulação de banco de dados na linguagem SQL.",
      descriptionEN: "Creation and manipulation of databases in SQL language.",
    },
    {
      id: 10,
      icon: `${figmaImg}`,
      title: "Figma",
      descriptionPT: "Interpretação e edição de designs com Figma",
      descriptionEN: "Interpretation and editing of designs with Figma",
    },
    {
      id: 11,
      icon: `${sassImg}`,
      title: "Sass",
      descriptionPT: "Utilização de pré-processadores de CSS como o Sass",
      descriptionEN: "Using CSS preprocessors like Sass",
    },
    {
      id: 12,
      icon: `${githubImg}`,
      title: "Github",
      descriptionPT: "Versionamento de código com Git and Github.",
      descriptionEN: "Code version control with Git and Github.",
    }
  ];

  return (
    <Container>
      <div id="skills" className="skillsSection-body">

        <h2>{globalLangPortuguese ? "Minhas Habilidades" : "My Skills"}</h2>

          <div className="cards-wrapper">

            {skills.map((skill) => (
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
    </Container>
  );
}
