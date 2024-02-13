import Network from "./components/Resources/Objective/Network.svg"
import CurriculoFabrício from './components/Resources/Objective/curricoFabricio.pdf';

import { FaFacebook, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaLock, FaGithub, FaInstagram } from "react-icons/fa"
import { IoLogoJavascript } from 'react-icons/io5'

import picture from "./components/Resources/About/picture-me.jpeg"

import android from './components/Resources/Projects/android.svg';
import cordel from './components/Resources/Projects/cordel.svg';
import primeflix from './components/Resources/Projects/primeflix.svg';

import './index.css';

function App() {

    document.title = 'Portfolio'

    return (
        <div id='Principal'>
            <div id="AllProject">
                <div id="header">
                    <h1 id="title">Portfolio</h1>
                    <nav id="navegation">
                        <ol>
                            <li id='home'><a href="#AllObjective">Ínicio</a></li>
                            <li id='about'><a href="#AllAbout">Sobre</a></li>
                            <li id='project'><a href="#AllProjects">Projetos</a></li>
                            <li id='contact'><a href="#AllContact">Contato</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div id="AllObjective">
                <div id="panel">
                    <div id="my-person">
                        <p>Meu nome é <h2 id="my-name">Fabrício</h2></p>
                        <p>Sou desenvolvedor front end</p>
                        <a id="link" href={CurriculoFabrício} download="Curriculo Fabricio Lopes">Currículo</a>
                        <FaInstagram className="github" size={50}/>
                    </div>
                    <div>
                        <img id="svg" src={Network} alt="svg.png" />
                    </div>
                </div>
                <a id="down" href="#AllAbout">Role para baixo</a>
            </div>
            <div id="content-about">
                <div id="AllAbout">
                    <h2 id="TitleAbout">Saiba mais sobre mim</h2>
                    <p id="TextMe">
                        Olá, tenho 20 anos, com um pouco de conhecimento em Inglês e aprendendo Japonês. Com conhecimentos básicos em HTML5, CSS3, JavaScript e ReactJS.
                        Ainda sem experiência, pois estou estudando para poder conseguir um emprego na área da programação. De começo como Desenvolvedor Front-End Junior.</p>
                </div>
                <div id="divPic">
                    <img id='PicMe' src={picture} alt="me.png" />
                </div>
                <div id="disciplines">
                    <FaHtml5 className="courses" size={50} color="orange" />
                    <FaCss3Alt className="courses" size={50} color="blue" />
                    <IoLogoJavascript className="courses" size={50} color="yellow" />
                    <FaReact className="courses" size={50} color="rgba(59,130,246,.5)" />
                    <FaLock className="courses" size={50} />
                    <FaLock className="courses" size={50} />
                    <FaLock className="courses" size={50} />
                    <FaLock className="courses" size={50} />
                    <FaLock className="courses" size={50} />
                </div>
            </div>
            <div>
                <div id="AllProjects">
                    <div>
                        <h2 id="TitleProjects">Meus Projetos</h2>
                    </div>
                    <div id="projects">
                        <div id="whatever"  >
                            <img className="PicWhatever" src={android} alt="android.png" />
                            <p id="TextProjects">Projeto Android</p>
                            <a id="btns" href="https://fabrioco.github.io/Projeto-Android/">Acessar</a>
                        </div>
                        <div id='seconds'>
                            <img className="PicProjects" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRqUXfPI4sWuCm6NhX7G2rpIoG1cIYxpuNiI2sHNZOn2Iqka_7Dv9YQwh7WwUwoaES-w&usqp=CAU'} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRqUXfPI4sWuCm6NhX7G2rpIoG1cIYxpuNiI2sHNZOn2Iqka_7Dv9YQwh7WwUwoaES-w&usqp=CAU.png" />
                            <p id="TextProjects">Projeto chamados</p>
                            <a id="btns" href="https://callproject.netlify.app">Acessar</a>
                        </div>
                        <div id="first">
                            <img id="PicPrime" src={primeflix} alt="primeflix.png" />
                            <p id="TextProjects" >Prime Flix</p>
                            <a id="btns" href="https://primeflix-fabricio.netlify.app/">Acessar</a>
                        </div>
                        <div id='seconds'>
                        <img className="PicProjects" src={'https://newtransporterlopes.netlify.app/static/media/logo.c0a87afe020dc26757c6601f42a8c824.svg'} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRqUXfPI4sWuCm6NhX7G2rpIoG1cIYxpuNiI2sHNZOn2Iqka_7Dv9YQwh7WwUwoaES-w&usqp=CAU.png" />
                            <p id="TextProjects">Transportadora Lopes</p>
                            <a id="btns" href="https://newtransporterlopes.netlify.app">Acessar</a>
                        </div>

                        <div id="whatever">
                            <img className="PicWhatever" src={cordel} alt="cordel.png" />
                            <p id="TextProjects" >Projeto Cordel</p>
                            <a id="btns" href="https://fabrioco.github.io/Projeto-Cordel/">Acessar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="AllContact">
                <div id="Contact">
                    <h3 id="TitleContact" >Contatos</h3>
                    <p className="TextContact">Email: fabriciooliveiralopes50@gmail.com</p>
                    <p className="TextContact">Celular: (11) 96016-8159</p>
                </div>
                <div id="SocialMedia">
                    <h3 id="TitleContact" >Redes Sociais</h3>
                    <a className="TextContact" href="https://www.linkedin.com/in/fabricio-lopes1325">
                        <FaLinkedin size={25} id="svglinkedin" />LinkedIn</a>
                    <a href="https://github.com/Fabrioco?tab=repositories"  className="TextContact" id='svggithub'><FaGithub size={25}/>Github</a>
                    <a href="https://www.facebook.com/bibicio.oliveiralopes" className="TextContact">
                        <FaFacebook size={25} id="svgfacebook" />Facebook</a>
                </div>
            </div>
            <div id="btnBackTop">
                <a id="BackToTop" href="#header">&uarr;</a>
            </div>
        </div>
    )
}

export default App;