import './App.css'

import { SkillsSection } from "./components/SkillsSection"
import { ProjectSection } from "./components/ProjectSection"
import { AboutSection } from './components/AboutSection'
import { HeaderSection } from './components/HeaderSection'

function App() {

  return (
      <div className="App">

        <HeaderSection />
        <SkillsSection />        
        <ProjectSection />
        <AboutSection />

    </div>
  )
}

export default App