import './portfolio.css'
import '../../assets/styles/global.css'
import BoxElement from './boxElement'
import snake from '../../assets/images/snake.jpg';
import Pacman from '../../assets/images/pacman01.png';
import conecta from '../../assets/images/conecta4.png';
import BoxElementAPI from './boxAPI'
import oleumImg from '../../assets/images/Oleum/oleumtempore-nature-pack.png'
import FloriImg from '../../assets/images/flori01.png'
import FilmotecaImg from '../../assets/images/LogoFilmoteca00.png'
import RickMorty from '../../assets/images/Rick-and-Morty.png'

export default function Portfolio() {
  return (
    <>
      <div id='portfolio'>
        <section className='portfolio-boxPresentacion box'>
          <p className='titulo'>Portfolio</p>
          <div className='text-content'>
            El protfolio está dividido en tres partes: Juegos en JavaScript, API's y LandingPages.
          </div>
        </section>
        <section className='portfolio-boxJuegos box'>
          <p className='titulo'>Juegos</p>
          <div className='text-content'>
            Aquí podrás ver los juegos que he desarrollado para practicar las habilidades de Javascript.
            Todos están hechos en Javascript y según mis propia lógica para bién o para mal.
          </div>
          <div className='portfolio-boxElement'>
            <BoxElement imag={snake} title='Snake' dir='/snake' />
            <BoxElement imag={conecta} title='Conecta 4' dir='/conecta' />
            <BoxElement imag={Pacman} title='Pacman' dir='/pacman' />
          </div>
        </section>
        <section className='portfolio-boxAPIS box'>
          <p className='titulo'>APIS</p>
          <div className='text-content'>
            Aquí podrás ver los juegos que he desarrollado para practicar las habilidades de Javascript.
            Todos están hechos en Javascript y según mis propia lógica para bién o para mal.
          </div>
          <div className='portfolio-boxElement'>
            <BoxElementAPI imag={FilmotecaImg} title='Filmoteca' dir='https://juanjorubiosancheportfolio.netlify.app/' />
            <BoxElementAPI imag={RickMorty} title='Rick and Morty' dir='/' />
          </div>
        </section>
        <section className='portfolio-boxLanding box'>
          <p className='titulo'>LandingPages</p>
          <div className='text-content'>
            Aquí podrás ver los juegos que he desarrollado para practicar las habilidades de Javascript.
            Todos están hechos en Javascript y según mis propia lógica para bién o para mal.
          </div>
          <div className='portfolio-boxElement'>
            <BoxElementAPI imag={oleumImg} title='Oleum Tempore' dir='/' />
            <BoxElementAPI imag={FloriImg} title='Floristerira Puertollano' dir='/' />
          </div>
        </section>
      </div >
    </>
  )
}

