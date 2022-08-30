import './App.css'
import { ButtonLinkedin } from "./components/ButtonLinkedin"
import { ButtonGithub } from "./components/ButtonGithub"
import { Skill } from "./components/Skill"
import { Project } from "./components/Project"

import profilePic from "./assets/profile-pic.png"
import headerImg from "./assets/header-img.svg"
import footerImg from "./assets/Saly-13.png"

import html5Img from "./assets/html5.svg"
import css3Img from "./assets/css3.svg"
import javascriptImg from "./assets/javascript.svg"
import reactjsImg from "./assets/reactjs.svg"
import nodejsImg from "./assets/nodejs.svg"
import mysqlImg from "./assets/mysql.svg"

import notesfrontImg from "./assets/thumbnails/notesfront-thumbnail.png"
import notesbackImg from "./assets/thumbnails/notesback-thumbnail.png"

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

    const fullStackProjects = [
        {
            title: "Notes Frontend",
            description: "Frontend de aplicação para guardar anotações e links úteis. Foi utilizado React e Styled Components para construção desse frontend",
            linkDemo: "https://julionotes.netlify.app/",
            linkGit: "https://github.com/JulioCout/Notes_Frontend",
            thumbnail: `${notesfrontImg}`,
        },
        {
            title: "Notes Backend",
            description: "Backend de aplicação para guardar anotações e links úteis. Foi utilizado NodeJS, Express, Sqlite e Jest, alem de outras tecnologias para construção desse Backend.",
            linkDemo: "https://julionotes.netlify.app/",
            linkGit: "https://github.com/JulioCout/Notes_Backend",
            thumbnail: `${notesbackImg}`,
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

            </div>
            <img src={headerImg} className="character" alt="" />
        </div>


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
            <h2>Meus Projetos</h2>
    
            <h3>Full Stack</h3>
            <div className="content-wrapper">
                {fullStackProjects.map(project => (
                    <Project 
                        title={project.title}
                        description={project.description}
                        linkDemo={project.linkDemo}
                        linkGit={project.linkGit}
                        thumbnail={project.thumbnail}
                    />
                ))}
            </div>
    
            {/* <h3>Front-end</h3>
            <div className="content-wrapper">
            </div> */}

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