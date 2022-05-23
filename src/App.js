import logo from './logo.png';
import perfil from './images/perfil.jpg';
import logoandroid from './images/android.png';
import logocordel from './images/cordel.jpg'
import './App.css'
import curriculo from './links/curriculo.pdf'

function App() {
  return (
    <div>
      <header>
        <h1>Fabricio</h1>
        <nav>
          <a className='link' href='#home'>Home</a>
          <a className='link' href='#sobre'>Sobre</a>
          <a className='link' href='#proj'>Projetos</a>
          <a className='link' href='#cont'>Contato</a>
        </nav>
      </header>
      <main>
        <section className='home' id='home'>
          <p className='eu'>
            Olá, eu sou <strong>Fabrício Lopes</strong>, <br/> Desenvolvedor Front-End!
          </p>
          <img src={logo} className="photo"></img>
        </section>
          <h2 id='sobre' className='sobre'>Quem sou eu?</h2>
            <h2 className='pais'>São Paulo, Brasil</h2>

            <main className='sobre2'>
            <p className='paragrafo'>
              Olá, tenho 19 anos, com um pouco de conhecimento em Inglês e aprendendo Japonês. Com conhecimentos básicos em HTML5, CSS3, JavaScript e ReactJS.
              Ainda sem experiência, pois estou estudando para poder conseguir um emprego na área da programação. De começo como Desenvolvedor Front-End Junior.</p>
            <img src={perfil} className="photo2" />
            </main>

            <main>
              <a href={curriculo} download="Curriculo Fabrício Lopes" className='curriculo' ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
              </svg> Currículo</a>
            </main>
        </main>

      <section>
        <h2 id='proj' className='proj'>Projetos</h2>
            <img src={logoandroid} className="android"></img>
            <p className='descrição'>Projeto Android feito para testar minhas habilidades com o HTML e CSS com poucos meses de treinamento</p>
            <img src={logocordel} className="cordelphoto"></img>
            <p className='descrição'>Projeto Android feito para testar minhas habilidades com o HTML e CSS com poucos meses de treinamento</p>
      </section>

        <main>
          <h2 id='cont'>Contato</h2>
          <a href='https://www.linkedin.com/in/fabricio-lopes1325' target="_blank">LinkedIn</a>
        </main>
      <footer>
        <p>Direitos Reservados &copy; Fabrício Oliveira Lopes</p>
      </footer>
    </div>
  );
}

export default App;
