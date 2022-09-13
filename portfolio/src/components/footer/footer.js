import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='container-footer'>
        <div className='left-footer'>
          <p>Juanjo Rubio Sánchez /
            Desarrollador Web Junior</p>
          <hr className='hr_footer' />
        </div>
        <div className='rigth-footer'>
          <p> Contactame </p>
          <hr className='hr_footer'/>
          <div>Linkedin:
            <br />
            <a href='https://www.linkedin.com/in/juan-jose-rubio-sanchez-621034103/' target="_blank" rel="noreferrer noopener">
              https://www.linkedin.com/in/juan-jose-rubio-sanchez-621034103/</a> </div>
          <div>
            Email:   <br /> juanjorsanchez81@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}