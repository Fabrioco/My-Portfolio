import logo from './logo.png';
import './App.css'
import curriculo from './links/curriculo.pdf'

function App() {
  return (
    <div>
      <header>
        <h1>Titulo</h1>
      <nav>
        <a className='link' href='#home'>Home</a>
        <a className='link' href='#sobre'>Sobre</a>
        <a className='link' href='#exp'>Experiência</a>
        <a className='link' href='#proj'>Projetos</a>
        <a className='link' href='#cont'>Contato</a>
      </nav>
      </header>
      <main>
        <section className='principal' id='home'>
          <p className='me'>
            Olá, eu sou <strong>Fabrício Lopes</strong>, Desenvolvedor Front-End Junior!
          </p>
          <img src={logo} className="pic"></img>
        </section>
          <h2 id='sobre'>Quem sou eu?</h2>
          <h2>São Paulo, Brasil</h2>
          <p>
            Olá, tenho 19 anos, com um pouco de conhecimento em Inglês(avançado) e aprendendo Japonês. Com conhecimentos básicos em HTML5, CSS3, JavaScript e ReactJS.
          </p>
          <a href={curriculo} download="Curriculo Fabrício Lopes">Currículo</a>
      </main>
      <section>
        <h2 id='exp'>Experiência</h2>
        <p>Ainda sem experiência, pois estou estudando para poder conseguir um emprego na área da programação. De começo como Desenvolvedor Front-End Junior</p>
        <h2 id='proj'>Projetos</h2>
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
