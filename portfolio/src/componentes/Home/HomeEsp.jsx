import React from 'react'
import AOS from 'aos'
import Nav from '../Nav/Nav'
import Agop from '../imagenes/perfil.svg'
import HTML from '../imagenes/img/html.png'
import css from '../imagenes/img/css.png'
import js from '../imagenes/img/js.png'
import ts from '../imagenes/img/ts.png'
import react from '../imagenes/img/react.png'
import redux from '../imagenes/img/redux.png'
import node from '../imagenes/img/node.png'
import sql from '../imagenes/img/sql.png'
import sequelize from '../imagenes/img/sequelize.png'
import mongoDb from '../imagenes/img/mongoDb.png'
import POKE from '../imagenes/img/pokedex.PNG'
import CHANGAPP from '../imagenes/Capture.PNG'
import Linkedin from '../imagenes/img/linkedin.png'
import git from '../imagenes/img/github.png'
import "aos/dist/aos.css";
import s from './Home.module.css'
import { useEffect } from 'react'
import { FiArrowUpCircle } from "react-icons/fi";


export default function HomeEsp() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])

    const onClick = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className={s.contenedor}>
            
            <div className={s.nav}>
                <Nav />
            </div>
            <div className={s.imagenFondo}>
                <div className={s.inicio} id='inicio'>
                    <div>
                        <h1 className={s.inicioT}>Hola!<br /> Soy Agop Chorbadjian.</h1>
                        <p className={s.inicioP}>FullStack Web Developer</p>
                    <button className={s.botonCV}><a href="./AgopChorbadjianCV.pdf" download className={s.cv}>Descargar CV</a></button>
                    </div>
                </div>
            </div>
            <div className={s.about} id='about' data-aos="fade-left">
                <h2 className={s.aboutT} data-aos="fade-down">SOBRE MI</h2>
                <div className={s.desc} data-aos="fade-right">
                    <h4 className={s.aboutH}>Quien soy?</h4>
                    <p>Soy un Desarrollador web Fullstack, especializado en crear y diseñar experiencias digitales excepcionales</p>
                    <p>Adquiri mis conocimientos de HTML & CSS en un curso de Desarrollador Web dictado por la academia IT Master en Buenos Aires, Argentina.</p>
                    <p>
                        Tambien realize un curso intensivo (bootcamp) dictado por la compañía Soy HENRY, en la cual, despues de +700 horas de estudio,
                        adquiri el conocimiento necesario para convertirme en un Desarrollador Web Fullstack Junior. 
                    </p>
                    <h4 className={s.aboutH}>Metas</h4>
                    <p>
                        Siempre me encuentro motivado y dedicado para representar, desarrollar y ejecutar soluciones que respondan con las necesidades de las personas. 
                        Trabajo en pequeños proyectos dia a dia para mejorar y afirmar mis conocimientos<br/>
                        Mi meta es crear paginas webs enfocadas en la expriencia del usuario, con especial atencion en el diseño y optimizando los recursos.
                    </p>
                    <h4 className={s.aboutH}>Tecnologias</h4>
                    <div className={s.iconos}>
                        <img src={HTML} alt="asd" className={s.iconsGrandes} />
                        <img src={css} alt="asd" className={s.iconsGrandes} />
                        <img src={js} alt="asd" className={s.iconsGrandes} />
                        <img src={ts} alt="asd" className={s.iconsGrandes} />
                        <img src={react} alt="asd" width="48px" height="48px" className={s.iconsGrandes} />
                        <img src={redux} alt="asd" className={s.iconsGrandes} />
                        <img src={node} alt="asd" className={s.iconsGrandes} />
                        <img src={sql} alt="asd" className={s.iconsGrandes} />
                        <img src={mongoDb} alt="asd" className={s.iconsGrandes} />
                        <img src={sequelize} alt="asd" width="48px" height="48px" className={s.iconsGrandes} />
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img src={Agop} alt="" className={s.agop} />
                </div>               
            </div>
            <div className={s.proyects} id='proyects'>
                <h2 className={s.proyectsT} data-aos="fade-down">PROYECTOS</h2>
                <div className={s.prueba} data-aos="flip-left">
                    <h4 className={s.gridTitulo}>PokeDex</h4>
                    <div>
                        <p>La funcionalidad de esta pagina es un SPA(Single Page Application), basada en la tematica Pokemon y obteniendo la informacion de una REST API. <br/>
                            Dentro de la aplicacion podes filtrar, ordenar o buscar los Pokemons con toda su informacion. Ademas, podes crear un Pokemon propio!
                        </p>    
                    </div>
                    <img src={POKE} alt="asd" width='100%' />
                    <a href="https://pi-pokemons-chi.vercel.app/" target="_onblank" className={s.linkRepo}>Link a la Pagina</a>
                </div>
                <div className={s.prueba} data-aos="flip-right">
                    <h4 className={s.gridTitulo}>ChangApp</h4>
                    <div>
                        <p>ChangApp es una pagina creada para esas personas que se dedican a realizar trabajos rapidos y pequeños (changas).
                            En la cual, la persona publica su perfil y otra persona lo contrata, arreglando dias y horarios.
                            Ademas, los clientes pueden dejar reseñas a los perfiles y asi alcanzar a mas clientes!</p>    
                    </div>
                    <img src={CHANGAPP} alt="asd" width='100%' />
                    <a href="https://changappv2.vercel.app/" target="_onblank" className={s.linkRepo}>Link a la Pagina</a>
                </div>
            </div>
            <div className={s.contact} id='contact' data-aos="fade-right">
                <h2 className={s.contactTitulo}>CONTACTO</h2>
                <form className={s.contactForm} action="https://formsubmit.co/pow.chorba@hotmail.com" method="POST">
                    <div>
                        <label className={s.contactLabel}>Nombre</label>
                        <input type="text" name='name' className={s.input} />
                    </div>
                    <div>
                        <label className={s.contactLabel}>Email</label>
                        <input type="email" name='email' className={s.input} />
                    </div>
                    <div className={s.contactSubject}>
                        <label className={s.contactLabel}>Asunto</label>
                        <input type="text" name='subject' className={s.inputSubject} />
                    </div>
                    <div className={s.contactDivArea}>
                        <label className={s.contactLabel}>Mensaje</label>
                        <textarea cols="30" rows="5" className={s.textarea} name='message' />
                    </div>
                    <div className={s.contactBtn}>
                        <button type='submit' className={s.btn}>Enviar</button>
                    </div>
                </form>
                <FiArrowUpCircle className={s.arrow} onClick={onClick}/>
            </div>
            <div className={s.footer}>
                <h4>Creado por Agop Chorbadjian</h4>
                <a href="https://www.linkedin.com/in/agopchorbadjian/" target="_onblank"><img src={Linkedin} alt="asd" width='48px' /></a>
                <a href="https://github.com/PowChorba" target="_onblank"><img src={git} alt="asd" width='48px' /></a>
            </div>
        </div>)
}