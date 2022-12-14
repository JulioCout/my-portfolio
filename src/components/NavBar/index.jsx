import React, { useState } from "react";
import "./style.css";

import closeIcon from "../../assets/Close.svg"
import expandIcon from "../../assets/icon.svg"
import { useEffect } from "react";

export function NavBar({ setGlobalLangPortuguese }) {

    const [navBarClass, setNavBarClass] = useState("navbar-body")
    const [navBarIcon, setNavBarIcon] = useState(expandIcon)
    const [navLangPortuguese, setNavLangPortuguese] = useState(true)

    function handleMenuExpands() {
        if(navBarClass === "navbar-body") {
            setNavBarClass("navbar-body expand")
            setNavBarIcon(closeIcon)
        } else {
            setNavBarClass("navbar-body")
            setNavBarIcon(expandIcon)
        }
    }

    useEffect(() => {
        setGlobalLangPortuguese(navLangPortuguese)
    }, [navLangPortuguese])

    return(
        <div className={navBarClass}>

            <div className="head">

                <h2>Juliocoutinho</h2>
                <img onClick={handleMenuExpands} src={navBarIcon} alt="" />
                
            </div>

            <div className="links">

                <a href="#init">{navLangPortuguese ? "Início" : "Home"}</a>
                <a href="#about">{navLangPortuguese ? "Sobre" : "About"}</a>
                <a href="#skills">{navLangPortuguese ? "Habilidades" : "Skills"}</a>
                <a href="#projects">{navLangPortuguese ? "Projetos" : "Projects"}</a>
                

            </div>

            <div className="language-switch">
                <p>Português</p>
                <label className="label">
                    <div className="toggle">
                        <input className="toggle-state" type="checkbox" name="check" value="check" onClick={() => setNavLangPortuguese(!navLangPortuguese)} />
                        <div className="indicator"></div>
                    </div>
                </label>
                <p>English</p>
            </div>
        </div>
    )
}
