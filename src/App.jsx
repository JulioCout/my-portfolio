import './App.css'
import { ButtonLinkedin } from "./components/ButtonLinkedin"
import { ButtonGithub } from "./components/ButtonGithub"
import { ButtonResume } from './components/ButtonResume'
import { Skill } from "./components/Skill"
import { SkillsSection } from "./components/SkillsSection"
import { ProjectSection } from "./components/ProjectSection"

import profilePic from "./assets/profile-pic.png"
import headerImg from "./assets/header-img.svg"
import footerImg from "./assets/Saly-13.png"

import html5Img from "./assets/html5.svg"
import css3Img from "./assets/css3.svg"
import javascriptImg from "./assets/javascript.svg"
import reactjsImg from "./assets/reactjs.svg"
import nodejsImg from "./assets/nodejs.svg"
import mysqlImg from "./assets/mysql.svg"



function App() {

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

  return (
      <div className="App">

        <div className="head-container">
            <div className="text-container">
                <img src={profilePic} alt="" />
                <h1>Olá! Eu sou o Julio.</h1>
                <h2> <span>Full Stack</span> Web Developer</h2>
                <a href="https://www.linkedin.com/in/juliocscoutinho/" target="_blank">
                <ButtonLinkedin />
                </a>
                <a href="https://github.com/JulioCout" target="_blank">
                <ButtonGithub />
                </a>
                <a href="https://drive.google.com/file/d/1ZUcwcLg7b6cQgRdzVhhJgK_D58mE7XIO/view?usp=sharing" target="_blank">
                <ButtonResume />
                </a>

            </div>
            <img src={headerImg} className="character" alt="" />
        </div>

        {/* <SkillsSection /> */}
        <div className="skills-section">
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
        

        <div className="projects-section">
            <ProjectSection />
        </div>

        <div className="about-section">
            <div className="about-text-container">
            <h2>Sobre mim</h2>
            <p className="about">
            Sempre fui entusiasta de tecnologia e estou em transição de carreira para a área de programação web. Sou pós-graduado em engenharia de software e desenvolvo Frontend com JavaScript, HTML, CSS e React. Além disso, desenvolvo Backend com Node.js, Express e SQL. Tenho contato com desenvolvimento web há 11 anos como hobby e agora estou me profissionalizando na área.
            </p>
            
            <p className="about">
                Atuo a mais de 6 anos com cargo de gestão na área de manutenção, e essa experiência me fez desenvolver alta capacidade de resolução de conflitos, com senso de prioridade e comunicação assertiva.
            </p>
            </div>
            <div className="about-img-container">
                <img src={footerImg} className="character" alt="" />
            </div>
        </div>
    </div>
  )
}

export default App