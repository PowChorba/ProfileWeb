import React from "react";
import { Link } from "react-router-dom";
import s from './Nav.module.css'

export default function Nav(){
    return(
        <div className={s.contenedor}>
            <h2 className={s.titulo}>PROFILE WEB</h2>
                <ul>
                    <li className={s.list}><a href="#inicio" className={s.link}>HOME</a></li>
                    <li className={s.list}><a href='#about' className={s.link}>ABOUT</a></li>
                    <li className={s.list}><a href='#proyects' className={s.link}>PROYECTS</a></li>
                    <li className={s.list}><a href='#contact' className={s.link}>CONTACT</a></li>
                </ul>
                {/* <a href=""></a> */}
        </div>)
}