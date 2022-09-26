import React from "react";
import s from './Nav.module.css'
import { FaBars} from 'react-icons/fa'
import { useState } from "react";
import { useLocalStorage } from "../useLocalStoraje";

export default function Nav(){
    const [nav, setNav] = useState(false)
    const handleClic = () => {
        setNav(!nav)
    }
    
    const [idioma, setIdioma] = useLocalStorage('idioma', 'es')

    const languageChange = (e) => {
        setIdioma(e.target.value)
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }

    return(
        <div>
            <div className={s.responsive}>
                <FaBars className={s.bars} onClick={handleClic} value={nav}/>
                <h2 className={s.tituloR}>{idioma === 'en' ? 'PROFILE WEB' : 'PORTAFOLIO WEB'}</h2>
            </div>
            <div className={nav ? s.contenedoar : s.contenedor}>
                <h2 className={s.titulo}>{idioma === 'en' ? 'PROFILE WEB' : 'PORTAFOLIO WEB'}</h2>
                <ul className={s.ul}>
                    <li className={s.list}><a href="#inicio" className={s.link}>{idioma === 'en' ? 'HOME' : 'INICIO'}</a></li>
                    <li className={s.list}><a href='#about' className={s.link}>{idioma === 'en' ? 'ABOUT' : 'SOBRE MI'}</a></li>
                    <li className={s.list}><a href='#proyects' className={s.link}>{idioma === 'en' ? 'PROYECTS' : 'PROYECTOS'}</a></li>
                    <li className={s.list}><a href='#contact' className={s.link}>{idioma === 'en' ? 'CONTACT' : 'CONTACTO'}</a></li>
                </ul>
                <select onChange={languageChange} defaultValue={idioma} className={s.select}>
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                </select>
            </div>
                
        </div>)
}