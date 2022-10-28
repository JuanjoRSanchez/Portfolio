import './portfolio.css'
import '../../assets/styles/global.css'
import BoxElement from './boxElement'
import Snake from '../../assets/images/Snake_Logo.png'
import Pacman from '../../assets/images/Packman_Logo.png';
import conecta from '../../assets/images/Conecta_Logo.png';
import BoxElementAPI from './boxAPI'
import FilmotecaImg from '../../assets/images/LogoFilmoteca00.png'
import RickMorty from '../../assets/images/Rick-and-Morty.png'
import LogoPortfolio from '../../assets/images/logo_portfolio.png'

export default function Portfolio() {
  return (
    <>
      <div id='portfolio'>
        <section className='seccion-general box section_color01'>
          <p className='titulo'>Portfolio</p>
          <hr className='hr01' />
          <div className='text-content'>
            El protfolio está dividido en dos partes:
          </div>
          <div className='seccionesPortfolio' > 
           <a href='#juegosPortfolio' className='seccionPortfolio'>Juegos</a>
           <a href='#ApisPortfolio' className='seccionPortfolio'>API's</a>
          </div>
        </section>
        <section className='seccion-general box section_color02' id='juegosPortfolio'>
          <p className='titulo'>Juegos</p>
          <hr className='hr01' />
          <div className='text-content'>
            Aquí podrás ver los juegos que he desarrollado para practicar las habilidades de Javascript.
            Todos están hechos en Javascript y según mi propia lógica. 
          </div>
          <div className='portfolio-boxElement'>
            <BoxElement imag={Snake} title='Snake' dir='/snake' />
            <BoxElement imag={conecta} title='Conecta 4' dir='/conecta' />
            <BoxElement imag={Pacman} title='Pacman' dir='/pacman' />
          </div>
        </section>
        <section className='seccion-general box section_color03' id='ApisPortfolio'>
          <p className='titulo'>APIS</p>
          <hr className='hr01' />
          <div className='text-content'>
            Estás son algunas de las aplicaiones que he hecho hasta la actualidad. La intención era practicar tanto BackEnd como FrontEnd así que 
            he utilizado diferentes lenguajes y tecnologías.
          </div>
          <div className='portfolio-boxElement'>
            <BoxElementAPI imag={FilmotecaImg} title='Filmoteca' dir='https://82.223.108.65:9013' />
            <BoxElementAPI imag={RickMorty} title='Rick&Morty' dir='https://82.223.108.65:9014' />
          </div>
        </section>
        <section className='seccion-general box section_color04' id='ApisPortfolio'>
          <p className='titulo'>Portfolio</p>
          <hr className='hr01' />
          <div className='text-content'>
            Aquí muestro los enlaces al repositorio de GitHub de este portfolio.
          </div>
          <div className='portfolio-boxElement'>
            <BoxElementAPI imag={LogoPortfolio} title='Portfolio' dir='/' />
          </div>
        </section>
      </div >
    </>
  )
}
