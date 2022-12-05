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
import FASTCHAT from '../imagenes/img/FastChatImg.PNG'
import Linkedin from '../imagenes/img/linkedin.png'
import git from '../imagenes/img/github.png'
import "aos/dist/aos.css";
import s from './Home.module.css'
import { useEffect } from 'react'
import { FiArrowUpCircle } from "react-icons/fi";


export default function HomeEng() {

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
                        <h1 className={s.inicioT}>Hello!<br /> I'm Agop Chorbadjian.</h1>
                        <p className={s.inicioP}>FullStack Web Developer</p>
                    <button className={s.botonCV}><a href="./AgopChorbadjianCV(Ingles).pdf" download className={s.cv}>Download CV</a></button>
                    </div>
                </div>
            </div>
            <div className={s.about} id='about' data-aos="fade-left">
                <h2 className={s.aboutT} data-aos="fade-down">ABOUT ME</h2>
                <div className={s.desc} data-aos="fade-right">
                    <h4 className={s.aboutH}>Who I Am</h4>
                    <p>I'm a FullStack Web Developer specializing in building and designing expectional digital expriencies.</p>
                    <p>I learned HTML & CSS ​​in a Web Programmer course taught by the IT Master academy in Buenos Aires, Argentina.</p>
                    <p>
                        I also took an intensive course given by the company Soy HENRY, in which, after 700+ hours of study,
                        I was able to acquire the necessary knowledge to become a Junior FullStack Web Developer.
                    </p>
                    <h4 className={s.aboutH}>Goals</h4>
                    <p>I always found myself motivated and dedicated to develop, represent and execute solutions that responds to the needs people's with different degrees of scalability.
                        I work daily on small personal projects to improve my learning and skills.<br />
                        Mi goal is to create websites focused on the user experience, with special attention to design and optimizing as many resources as possible.
                        I apply accesible and adatapble web design techniques to all devices, achieving a good visualization.
                    </p>
                    <h4 className={s.aboutH}>Technologies Skills</h4>
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
                    <img src={Agop} alt="" className={s.agop} height='400px'/>
                </div>               
            </div>
            <div className={s.proyects} id='proyects'>
                <h2 className={s.proyectsT} data-aos="fade-down">PROYECTS</h2>
                <div className={s.prueba} data-aos="flip-left">
                    <h4 className={s.gridTitulo}>PokeDex</h4>
                    <div>
                        <p>The functionality of this page is a Single Page Application (SPA) based on the Pokemon theme with
                            information pulled from a REST API. <br />In this app you can filter, sort and search for Pokemons
                            with all their information. In turn, a new Pokemon can be created.</p>
                    </div>
                    <img src={POKE} alt="asd" width='100%' />
                    <a href="https://pi-pokemons-chi.vercel.app/" target="_onblank" className={s.linkRepo}>Link to Page</a>
                </div>
                <div className={s.prueba} data-aos="flip-right">
                    <h4 className={s.gridTitulo}>ChangApp</h4>
                    <div>
                        <p>ChangApp is a page created for those people who are dedicated to doing quick and small jobs. 
                            Where you publish your job offer and another person hires you, agreeing on the day and time. 
                            In addition, people can rate you so you will reach more customers!</p>
                    </div>
                    <img src={CHANGAPP} alt="asd" width='100%' />
                    <a href="https://changappv2.vercel.app/" target="_onblank" className={s.linkRepo}>Link to Page</a>
                </div>
                <div className={s.prueba} data-aos="flip-right">
                    <h4 className={s.gridTitulo}>FastChat</h4>
                    <div>
                        <p>FastChat is a chat in real time, which consists of a registration system, login and email verification. Once entered on the main page,
                            you will be able to add, delete and block contacts. At the same time, you can create private chats and group chats. Also you can send images, icons,
                            audios and text messages.</p>    
                    </div>
                    <img src={FASTCHAT} alt="asd" width='100%' />
                    <a href="https://fast-chat-bice.vercel.app/" target="_onblank" className={s.linkRepo}>Link to Page</a>
                </div>
            </div>
            <div className={s.contact} id='contact' data-aos="fade-right">
                <h2 className={s.contactTitulo}>CONTACT</h2>
                <form className={s.contactForm} action="https://formsubmit.co/pow.chorba@hotmail.com" method="POST">
                    <div>
                        <label className={s.contactLabel}>Name</label>
                        <input type="text" name='name' className={s.input} />
                    </div>
                    <div>
                        <label className={s.contactLabel}>Email</label>
                        <input type="email" name='email' className={s.input} />
                    </div>
                    <div className={s.contactSubject}>
                        <label className={s.contactLabel}>Subject</label>
                        <input type="text" name='subject' className={s.inputSubject} />
                    </div>
                    <div className={s.contactDivArea}>
                        <label className={s.contactLabel}>Message</label>
                        <textarea cols="30" rows="5" className={s.textarea} name='message' />
                    </div>
                    <div className={s.contactBtn}>
                        <button type='submit' className={s.btn}>Send</button>
                    </div>
                </form>
                <FiArrowUpCircle className={s.arrow} onClick={onClick}/>
            </div>
            <div className={s.footer}>
                <h4>Created by Agop Chorbadjian</h4>
                <a href="https://www.linkedin.com/in/agopchorbadjian/" target="_onblank"><img src={Linkedin} alt="asd" width='48px' /></a>
                <a href="https://github.com/PowChorba" target="_onblank"><img src={git} alt="asd" width='48px' /></a>
            </div>
        </div>)
}