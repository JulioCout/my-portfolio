import './App.css'
import { ButtonSocial } from "./components/ButtonSocial"
import { Skill } from "./components/Skill"
import { Project } from "./components/Project"

function App() {

    const frontSkills = [
        {
            icon: "./src/assets/html5.svg",
            title: "HTML",
            description: "Desenvolvimento de sites completos."
        },
        {
            icon: "./src/assets/css3.svg",
            title: "CSS",
            description: "Sites fiéis aos mais variados designs propostos pelo cliente ou empresa."
        },
        {
            icon: "./src/assets/javascript.svg",
            title: "Javascript",
            description: "Criação de funções mais avançadas em aplicações web com JavaScript."
        },
        {
            icon: "./src/assets/reactjs.svg",
            title: "React",
            description: "Desenvolvimento de aplicações para web."
        }
    ]

    const backSkills = [
        {
            icon: "./src/assets/javascript.svg",
            title: "Javascript",
            description: "Criação de funções mais avançadas em aplicações web com JavaScript."
        },
        {
            icon: "./src/assets/nodejs.svg",
            title: "Node Js",
            description: "Criação de páginas interativas mais robustas com acesso a banco de dados, como páginas de cadastro, catálogos e banco de informações."
        },
        {
            icon: "./src/assets/mysql.svg",
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
            thumbnail: "src/assets/thumbnails/notesfront-thumbnail.png",
        },
        {
            title: "Notes Backend",
            description: "Backend de aplicação para guardar anotações e links úteis. Foi utilizado NodeJS, Express, Sqlite e Jest, alem de outras tecnologias para construção desse Backend.",
            linkDemo: "https://julionotes.netlify.app/",
            linkGit: "https://github.com/JulioCout/Notes_Backend",
            thumbnail: "src/assets/thumbnails/notesback-thumbnail.png",
        }
    ]

  return (
      <div className="App">
      {/* <div className="gradient1" ></div>
      <div className="gradient2" ></div> */}
      {/* <img className="obj-1" src="./src/assets/SuperToroid-Purple-Glossy.svg" /> */}
      
      {/* <img className="obj-2" src="./src/assets/Sphere-White-Matte.svg" />
      <img className="obj-3" src="./src/assets/Pill-Blue-Glossy.svg" />
      <img className="obj-4" src="./src/assets/RoundCube-Orange-Glossy.svg" />
    <img className="obj-5" src="./src/assets/SuperToroid-Yellow-Glossy.svg" /> */}
    
        <div className="head-container">
            <div className="text-container">
                <img src="./src/assets/profile-pic.png" alt="" />
                <h1>Olá! Eu sou o Julio.</h1>
                <h2> <span>Full Stack</span> Web Developer</h2>
                <a href="https://www.linkedin.com/in/juliocscoutinho/" target="_blank">
                <ButtonSocial />
                </a>
            </div>
            <img src="./src/assets/Saly-13.png" className="character" alt="" />
            
        </div>


        <div className="section">
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
        

        <div className="section">
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
    
            <h3>Front-end</h3>
            <div className="content-wrapper">
    
            </div>
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
                <img src="./src/assets/Saly-13.png" className="character" alt="" />
            </div>
        </div>
    </div>
  )
}

export default App