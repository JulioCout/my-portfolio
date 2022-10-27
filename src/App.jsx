import { useEffect, useState } from 'react'
import './App.css'

import { SkillsSection } from "./components/SkillsSection"
import { ProjectSection } from "./components/ProjectSection"
import { AboutSection } from './components/AboutSection'
import { HeaderSection } from './components/HeaderSection'
import { NavBar } from "./components/NavBar"

function App() {

  const [globalLangPortuguese, setGlobalLangPortuguese] = useState(true)

  return (
      <div className="App">
        

        <NavBar setGlobalLangPortuguese={setGlobalLangPortuguese} />
        <HeaderSection globalLangPortuguese={globalLangPortuguese} />
        <AboutSection globalLangPortuguese={globalLangPortuguese} />
        <SkillsSection globalLangPortuguese={globalLangPortuguese} />        
        <ProjectSection globalLangPortuguese={globalLangPortuguese} />

        <footer>
          <p>Coded by Julio Coutinho</p>
        </footer>

    </div>
  )
}

export default App