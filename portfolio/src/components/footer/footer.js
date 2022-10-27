import React from 'react'
import './footer.css'
import IconLinkedin from '../../assets/images/icono_linkedin.png'
import IconGithub from '../../assets/images/icono_github.png'



export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='container-footer'>
        <div className='left-footer'>
          <p>Juanjo Rubio Sánchez /
            Desarrollador Web Junior</p>
        </div>
        <div className='rigth-footer'>
          <div className='box_linkedin'>LinkedIn:
            <a className='linkedin_link' href='https://www.linkedin.com/in/juan-jose-rubio-sanchez-621034103/' target="_blank" rel="noreferrer noopener">
              <img src={IconLinkedin} alt='Icono de Linkedin' />
            </a>
          </div>
          <div className='box_gmail'>Email: <br /> <br /><br />
            juanjorsanchez81@gmail.com
          </div>
          <div className='box_telefono'>Teléfono:  <br /><br /><br />
            653 83 15 76
          </div>
          <div className='box_linkedin'>Github:
            <a className='linkedin_link' href='https://github.com/JuanjoRSanchez' target="_blank" rel="noreferrer noopener">
              <img src={IconGithub} alt='Icono de Linkedin' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
<img src={IconGmail} alt='Icono de Linkedin' /><br /> 
<img src={IconTelefono} alt='Icono de Linkedin' />
*/