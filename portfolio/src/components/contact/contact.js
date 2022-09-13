import React from 'react';
import './contact.css'


export default function Contacto() {
    return (
        <div className='body-contacto'>
            
            <div className='rigth-contacto'>
                <h1>Si quiere contactar conmigo</h1>
                <hr id='hr01' />
                <div className='presentation-contacto'>
                    <div className='contactos-contacto'>
                        Teléfono
                    </div>
                    <div className='contactos-contacto'>
                        Email
                    </div>
                    <div className='contactos-contacto'>
                        Linkedin
                    </div>
                </div>

            </div>
        </div>
    )
}