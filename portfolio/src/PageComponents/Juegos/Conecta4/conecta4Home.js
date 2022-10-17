import './conecta4.css'
import './conecta4Juego.css'
import HeaderJuegos from '../headJuegos'

export default function Conecta4Home() {
    function mostrarRegistro() {
        document.getElementsByClassName("usuario1")[0].style.display = "flex";
    }

    function saveUser() {
        if (document.getElementsByClassName("usuario1")[0].style.display === "flex") {
            let user1Name = document.getElementById('userName1').value;
            localStorage.setItem('nombre1', user1Name);
            document.getElementsByClassName("usuario1")[0].style.display = "none";

        } else {
            let user2Name = document.getElementById('userName2').value;
            localStorage.setItem('nombre2', user2Name);
            window.location.href = "/juegoPrueba";
        }
        document.getElementsByClassName("usuario2")[0].style.display = "flex";
    }


    return (
        <div className='body'>
            <div className='body-entradaConecta '>
                <HeaderJuegos titulo='Conecta 4' />
                <div className="contenido-conecta">
                    <button className="btn-conecta" id='btn-inicio' onClick={mostrarRegistro}>Empezar a jugar</button>
                    <div className="usuario1">
                        <div className="cl">
                            <label >Nombre del jugador 1</label>
                            <input type="text" name="nombre1" id="userName1" />
                            <button className="btnGuardar" onClick={saveUser}>Guardar usuario</button>
                        </div>
                    </div>
                    <div className="usuario2">
                        <div className="cl">
                            <label >Nombre del jugador 2</label>
                            <input type="text" name="nombre2" id="userName2" />
                            <button className="btnGuardar" onClick={saveUser} id='btn-guardar'>Guardar usuario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
