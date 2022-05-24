import logo from './images/muie.svg';
import perfil from './images/perfil.jpg';
import logoandroid from './images/android.png';
import logocordel from './images/cordel.jpg'
import './App.css'
import curriculo from './links/curriculo.pdf'
import card from './links/Fabriciolopes.png';

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
      <main className='primeira'>
        <div className='home' id='home'>
          <div className='mim'>
            <p className='eu'>My name is  <br/><strong>Fabrício</strong></p>
            <p className='prof'>Sou Desenvolvedor Front-End</p>
            <div className='botoes'>
              <a href={curriculo} download="Curriculo Fabrício Lopes" ><p className='curriculo'>Curriculun</p></a>
              <a href={card} download="CardVisit FabrícioLopes"><p className='card'>Card Visit</p></a>
            </div>

              </div>
                    <div>
                    <img src={logo} className="photo"></img>
              </div>
              
          </div>
          <div className='scroll'>
              <p><a href='#sobre' className=''>Role para baixo</a></p>
          </div>
          </main>

        <section>
            <div className='sobreconfig'>
              <h2 id='sobre' className='sobre'>Saiba mais sobre mim</h2>
            </div>
              <div className='linha'></div>
            <div className='sobre2'>
              <p className='paragrafo'>
                Olá, tenho 19 anos, com um pouco de conhecimento em Inglês e aprendendo Japonês. Com conhecimentos básicos em HTML5, CSS3, JavaScript e ReactJS.
                Ainda sem experiência, pois estou estudando para poder conseguir um emprego na área da programação. De começo como Desenvolvedor Front-End Junior.</p>
                <img src={perfil} className='perfil'/>
            </div>     
              <div className='linha2'></div>
                <div>
                  <h2  id        = 'proj' className        = 'proj'>Projetos</h2>
                  <img src       = {logoandroid} className = "android"></img>
                  <p   className = 'descrição'>Projeto Android feito para testar minhas habilidades com o HTML e CSS com poucos meses de treinamento</p>
                  <img src       = {logocordel} className  = "cordelphoto"></img>
                  <p   className = 'descrição'>Projeto Android feito para testar minhas habilidades com o HTML e CSS com poucos meses de treinamento</p>
                </div>
                  
            
                    
            <h2 id='cont'>Contato</h2>
            <a href='https://www.linkedin.com/in/fabricio-lopes1325' target="_blank">LinkedIn</a>
                    
          </section>
      <footer>
        <p>Direitos Reservados &copy; Fabrício Oliveira Lopes</p>
      </footer>
    </div>
  );
}

export default App;
