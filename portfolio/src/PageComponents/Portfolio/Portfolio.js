import './portfolio.css'
import '../../assets/styles/global.css'
import BoxElement from './boxElement'
import Snake from '../../assets/images/Snake_Logo.png'
import Pacman from '../../assets/images/Packman_Logo.png';
import conecta from '../../assets/images/Conecta_Logo.png';
import BoxElementAPI from './boxAPI'
import FilmotecaImg from '../../assets/images/LogoFilmoteca00.png'
import RickMorty from '../../assets/images/Rick-and-Morty.png'

export default function Portfolio() {
  return (
    <>
      <div id='portfolio'>
        <section className='portfolio-boxPresentacion box'>
          <p className='titulo'>Portfolio</p>
          <div className='text-content'>
            El protfolio está dividido en tres partes:
          </div>
          <div className='seccionesPortfolio' > 
           <a href='#juegosPortfolio' className='seccionPortfolio'>Juegos</a>
           <a href='#ApisPortfolio' className='seccionPortfolio'>API's</a>
          </div>
        </section>
        <section className='portfolio-boxJuegos box' id='juegosPortfolio'>
          <p className='titulo'>Juegos</p>
          <div className='text-content'>
            Aquí podrás ver los juegos que he desarrollado para practicar las habilidades de Javascript.
            Todos están hechos en Javascript y según mis propia lógica. 
          </div>
          <div className='portfolio-boxElement'>
            <BoxElement imag={Snake} title='Snake' dir='/snake' />
            <BoxElement imag={conecta} title='Conecta 4' dir='/conecta' />
            <BoxElement imag={Pacman} title='Pacman' dir='/pacman' />
          </div>
        </section>
        <section className='portfolio-boxAPIS box' id='ApisPortfolio'>
          <p className='titulo'>APIS</p>
          <div className='text-content'>
            Aquí podrás ver los juegos que he desarrollado para practicar las habilidades de Javascript.
            Todos están hechos en Javascript y según mis propia lógica para bién o para mal.
          </div>
          <div className='portfolio-boxElement'>
            <BoxElementAPI imag={FilmotecaImg} title='Filmoteca' dir='https://localhost:9013' />
            <BoxElementAPI imag={RickMorty} title='Rick and Morty' dir='/' />
          </div>
        </section>
        
      </div >
    </>
  )
}
