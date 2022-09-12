import './pacman.css'
import './estilosFantasmas.css'
import Tablero from './componentes/tablero'
import HeaderJuegos from '../headJuegos'

export default function Pacman() {
    return (
            <div className="body_pacman">
                <HeaderJuegos titulo='Pacman' />
                <Tablero />
                <div id="mensaje">
                    <div id="mensajeContenido">
                    </div>
                    <button onClick="reiniciarPartida()" className="btnCerrar_conecta">Cerrar</button>
                </div>
            </div>
    )
}

