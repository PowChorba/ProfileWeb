import React from 'react'
import Codigo from '../imagenes/codeando.png'
import Nav from '../Nav/Nav'
import Agop from '../imagenes/perfil.PNG'
import HTML from '../imagenes/img/html.png'
import css from '../imagenes/img/css.png'
import js from '../imagenes/img/js.png'
import react from '../imagenes/img/react.png'
import redux from '../imagenes/img/redux.png'
import node from '../imagenes/img/node.png'
import sql from '../imagenes/img/sql.png'
import sequelize from '../imagenes/img/sequelize.png'
import POKE from '../imagenes/img/pokedex.PNG'
import Linkedin from '../imagenes/img/linkedin.png'
import git from '../imagenes/img/github.png'

import s from './Home.module.css'

export default function Home(){
    return(
        <div className={s.contenedor}>
            <div className={s.nav}>
                <Nav/>
            </div>
            <div className={s.inicio} id='inicio'>
                <div>
                    <h1 className={s.inicioT}>Hi there!<br/><br/> I'm Agop Chorbadjian.</h1>
                    <p className={s.inicioP}>FullStack Web Developer</p>
                </div>
                <div><img src={Codigo} alt='asd' width='350px'/></div>
            </div>
            <div className={s.about} id='about' data-aos="zoom-in-left">
                
                    <h2 className={s.aboutT}>ABOUT ME</h2>
                <div className={s.desc}>
                    <h4 className={s.aboutH}>Who I Am</h4>
                    <p>I'm a FullStack Web Developer specializing in building and designing expectional digital expriencies.</p>
                    <p>I learned HTML & CSS ​​in a Web Programmer course taught by the IT Master academy in Buenos Aires, Argentina.</p>
                    <p>
                        I also took an intensive course given by the company Soy HENRY, in which, after 700+ hours of study, 
                        I was able to acquire the necessary knowledge to become a Junior FullStack Web Developer.
                    </p>
                    <h4 className={s.aboutH}>Goals</h4>
                    <p>I always found myself motivated and dedicated to develop, represent and execute solutions that responds to the needs people's with different degrees of scalability.
                    I work daily on small personal projects to improve my learning and skills.<br/>
                    Mi goal is to create websites focused on the user experience, with special attention to design and optimizing as many resources as possible.
                    I apply accesible and adatapble web design techniques to all devices, achieving a good visualization.
                    </p>
                    <h4 className={s.aboutH}>Technologies Skills</h4>
                    <div className={s.iconos}>
                        <img src={HTML} alt="asd" className={s.iconsGrandes}/>
                        <img src={css} alt="asd" className={s.iconsGrandes}/>
                        <img src={js} alt="asd" className={s.iconsGrandes}/>
                        <img src={react} alt="asd" width="48px" height="48px" className={s.iconsGrandes}/>
                        <img src={redux} alt="asd" className={s.iconsGrandes}/>
                        <img src={node}alt="asd" className={s.iconsGrandes}/>
                        <img src={sql} alt="asd" className={s.iconsGrandes}/>
                        <img src={sequelize} alt="asd" width="48px" height="48px" className={s.iconsGrandes}/>
                    </div>
                </div>
                <div>
                    <img src={Agop} alt="" className={s.agop}/>
                </div>
            </div>
            <div className={s.proyects} id='proyects'>
                <h2 className={s.proyectsT}>PROYECTS</h2>
                <div className={s.prueba}>
                <h4 className={s.gridTitulo}>PokeDex</h4>
                <div>
                <p>The functionality of this page is a Single Page Application (SPA) based on the Pokemon theme with
                information pulled from a REST API. <br/>In this app you can filter, sort and search for Pokemons
                with all their information. In turn, a new Pokemon can be created.</p>
                </div>
                <img src={POKE} alt="asd" width='100%'/>
                <a href="https://pi-pokemons-chi.vercel.app/" target="_onblank" className={s.linkRepo}>Link to Page</a>
                </div>
            </div>
            <div id='contact' className={s.contact}>
                <h2 className={s.contactTitulo}>CONTACT</h2>
            <form className={s.contactForm} action="https://formsubmit.co/pow.chorba@hotmail.com" method="POST">
                <div>
                    <label className={s.contactLabel}>Name</label>
                    <input type="text" name='name' className={s.input}/>
                </div>
                <div>
                    <label className={s.contactLabel}>Email</label>
                    <input type="email" name='email' className={s.input}/>
                </div>
                <div className={s.contactSubject}>
                    <label className={s.contactLabel}>Subject</label>
                    <input type="text" name='subject' className={s.inputSubject}/>
                </div>
                <div className={s.contactDivArea}>
                    <label className={s.contactLabel}>Message</label>
                    <textarea cols="30" rows="5" className={s.textarea} name='message'/>
                </div>
                <div className={s.contactBtn}>
                    <button type='submit' className={s.btn}>Send</button>
                </div>
            </form>
            </div>
            <div className={s.footer}>
                
                <h4>Created by Agop Chorbadjian</h4>
                <a href="https://www.linkedin.com/in/agop-chorbadjian-369767218/" target="_onblank"><img src={Linkedin} alt="asd"  width='48px'/></a>
                <a href="https://github.com/PowChorba" target="_onblank"><img src={git} alt="asd"  width='48px'/></a>
                
            </div>
        </div>)
}