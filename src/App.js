import logo from './images/photo.svg';
import perfil from './images/perfil.jpg';
import logoandroid from './images/android.png';
import logocordel from './images/cordel.jpg';
import breve from './images/embreve.jpg';

import curriculo from './links/curriculo.pdf';
import card from './links/Fabriciolopes.png';

import './App.css';


function App() {
  return (
    <div>
      <header>
        <h1>Portfolio</h1>
        <nav>
          <a className='link' href='#home'> • Home</a>
          <a className='link' href='#sobre'> • Sobre</a>
          <a className='link' href='#proj'> • Projetos</a>
          <a className='link' href='#cont'> • Contato</a>
        </nav>
      </header>
      <div className='project-all'>
        <main className='main'>
          <div className='home' id='home'>
            <div className='contents-main'>
              <p className='contents-me'>My name is  <br/><strong>Fabrício</strong></p>
              <p className='profissao'>Sou Desenvolvedor Front-End</p>
              <div className='btns'>
                <a href={curriculo} download="Curriculo Fabrício Lopes" ><p className='curriculo'>Curriculun</p></a>
                <a href={card} download="CardVisit FabrícioLopes"><p className='visitcard'>Card Visit</p></a>
              </div>
                </div>
                <div className='contents-photo'>
                      <img src={logo} className="photo" alt='img.jpg'></img>
                </div>
            </div>
            <div className='nextpage'>
                <p><a href='#sobre' className=''>Role para baixo</a></p>
            </div>
            </main>
          <section>
              <div className='contents-about'>
                <h2 id='sobre' className='about'>Saiba mais sobre mim</h2>
              </div>
                <div className='linha'></div>
              <div className='big-description'>
                <p className='main-description'>
                  Olá, tenho 19 anos, com um pouco de conhecimento em Inglês e aprendendo Japonês. Com conhecimentos básicos em HTML5, CSS3, JavaScript e ReactJS.
                  Ainda sem experiência, pois estou estudando para poder conseguir um emprego na área da programação. De começo como Desenvolvedor Front-End Junior.</p>
                      <img src={perfil} className='photo-me' alt='img.jpg'/>
              </div>
                <div className='linha2'></div>
                    <h2  id        = 'proj' className        = 'project-title'>MY PROJECTS</h2>
                    <div className='projects'>
                      <div className = "contents-project">
                        <img src       = {logoandroid} className = "project" alt='img.jpg' />
                        <p   className = 'project-description'>Projeto Android feito para testar minhas habilidades com o HTML e CSS com poucos meses de treinamento</p>
                          <a className="btn" href='https://fabrioco.github.io/HTML-CSS/Desafios/Desafio%205/index.html' target="_blank" rel="noreferrer">Acessar link </a>
                      </div>
                      <div className = "contents-project">
                        <img src       = {logocordel} className  = "project" alt='img.jpg' ></img>
                        <p   className = 'project-description'>Projeto Cordel feito para testar minhas habilidades com o HTML e CSS com poucos meses de treinamento</p>
                          <a className='btn' href='https://fabrioco.github.io/Projeto-Cordel/' target="_blank" rel="noreferrer">Acessar link</a>
                      </div>
                      </div >
                      <div className='projects'>
                        <div  className = "contents-project">
                        <img src= {breve}  className = "project" alt='img.jpg' ></img>
                          <p   className = 'project-description'>Este site ainda está em andamento, vamos com calma, estará saindo o mais rapido possível</p>
                        </div>
                        <div className = "contents-project">
                          <img src       = {breve} className  = "project" alt='img.jpg' ></img>
                          <p   className = 'project-description'>Este site ainda está em andamento, vamos com calma, estará saindo o mais rapido possível</p>
                        </div>
                  </div>
              <div className='contact' id='cont'>
                <div className='contents-contact'>
                  <h2 className='contact-title'>Contact</h2>
                  <p className='my-contact'>Email: fabriciooliveiralopes50@gmail.com</p>
                  <p className='my-contact'>Telefone: (11) 96016-8159</p>
                </div>
                <div className='linha3'></div>
                <div className='contents-contact'>
                  <h2 className='contact-title'>Social Media</h2>
                <p className='my-contact'><a href='https://www.linkedin.com/in/fabricio-lopes1325' target="_blank" rel="noreferrer"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg> LinkedIn</a></p>
                <p className='my-contact'><a href='https://www.facebook.com/bibicio.oliveiralopes' target="_blank" rel="noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg> Facebook</a></p>
                </div>
              </div>
            </section>
      </div>
      <footer>
        <p>Copyright &copy; Fabrício Lopes</p>
      </footer>
    </div>
  );
}

export default App;
