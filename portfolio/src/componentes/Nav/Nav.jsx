import React from "react";
import s from './Nav.module.css'
import { FaBars} from 'react-icons/fa'
import { useState } from "react";

export default function Nav(){
    const [nav, setNav] = useState(false)
    const handleClic = () => {
        setNav(!nav)
    }
    
    return(
        <div>
            <div className={s.responsive}>
                <FaBars className={s.bars} onClick={handleClic} value={nav}/>
                <h2 className={s.tituloR}>PROFILE WEB</h2>
            </div>
            <div className={nav ? s.contenedoar : s.contenedor}>
                <h2 className={s.titulo}>PROFILE WEB</h2>
                <ul>
                    <li className={s.list}><a href="#inicio" className={s.link}>HOME</a></li>
                    <li className={s.list}><a href='#about' className={s.link}>ABOUT</a></li>
                    <li className={s.list}><a href='#proyects' className={s.link}>PROYECTS</a></li>
                    <li className={s.list}><a href='#contact' className={s.link}>CONTACT</a></li>
                </ul>
            </div>
                
        </div>)
}