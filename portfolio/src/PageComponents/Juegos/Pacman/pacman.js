import './pacman.css'
import './estilosFantasmas.css'
import Tablero from './componentes/tablero'
import HeaderJuegos from '../headJuegos'

export default function Pacman() {
////// manejar botón de reinicio //////////////
    function reiniciarPartida() {
        window.location.reload();
    }
    let mensajeInicio = 'El Pacman lo puedes mover con las siguientes teclas: izquierda => 1, derecha => 3, arriba => 5, abajo => 2'

    return (
            <div className="body_pacman">
                <HeaderJuegos titulo='Pacman' />
                <div className='mensajeInicio'>{mensajeInicio}</div>
                <Tablero />
                <div id="mensaje">
                    <div id="mensajeContenido">
                    </div>
                    <button onClick={reiniciarPartida} className="btnCerrar_conecta">Cerrar</button>
                </div>
            </div>
    )
}

