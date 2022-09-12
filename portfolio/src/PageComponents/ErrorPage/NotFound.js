import React from 'react';
import './notFound.css';

export default function Home() {
    return (
        <>
            <div id='notFound'>
                <div className='content'>
                    <div className='box-pageNotFound'>
                        404 Page not Found
                    </div>
                    <p>La página a la que intentas acceder no existe</p>
                </div>
            </div>
        </>
    )
}