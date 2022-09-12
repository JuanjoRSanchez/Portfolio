//import { useRef, useEffect } from 'react';
import './conecta4.css'
import './conecta4Juego.css'
import './prueba.css'
import HeaderJuegos from '../headJuegos'

export default function JuegoPrueba() {


    var tabla1 = [
        {
            ocupado: false,
            nombre: 'A1',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'A2',
            jugador: 0,
        },
        {
            ocupado: false,
            nombre: 'A3',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'A4',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'A5',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'A6',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'A7',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'B1',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'B2',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'B3',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'B4',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'B5',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'B6',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'B7',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'C1',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'C2',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'C3',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'C4',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'C5',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'C6',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'C7',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'D1',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'D2',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'D3',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'D4',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'D5',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'D6',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'D7',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'E1',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'E2',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'E3',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'E4',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'E5',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'E6',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'E7',
            jugador: 0,
        },
        {
            ocupado: false,
            nombre: 'F1',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'F2',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'F3',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'F4',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'F5',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'F6',
            jugador: 0
        },
        {
            ocupado: false,
            nombre: 'F7',
            jugador: 0
        }

    ];

    // Objeto jugador con um number que ejerce de identificador y un booleano para definir su estado en el juego.
    let jugador1 = {
        id: 1,
        name: localStorage.getItem('nombre1'),
        activo: true
    }


    let jugador2 = {
        id: 2,
        name: localStorage.getItem('nombre2'),
        activo: false
    }

    // Array de arrays. Cada array contiene una combinación ganadora.
    var jugadasGanadoras = [
        ['A1', 'A2', 'A3', 'A4'],
        ['A1', 'B1', 'C1', 'D1'],
        ['A1', 'B2', 'C3', 'D4'],

        ['B1', 'B2', 'B3', 'B4'],
        ['B1', 'C2', 'D3', 'E4'],
        ['B1', 'C2', 'D3', 'E4'],

        ['C1', 'C2', 'C3', 'C4'],
        ['C1', 'D1', 'E1', 'F1'],
        ['C1', 'D2', 'E3', 'F4'],

        ['D1', 'D2', 'D3', 'D4'],
        ['D1', 'C2', 'B3', 'A4'],

        ['E1', 'E2', 'E3', 'E4'],
        ['E1', 'D2', 'C3', 'B4'],

        ['F1', 'F2', 'F3', 'F4'],
        ['F1', 'E2', 'D3', 'C4'],
        ////////////////////////////////

        ['A2', 'A3', 'A4', 'A5'],
        ['A2', 'B2', 'C2', 'D2'],
        ['A2', 'B3', 'C4', 'D5'],

        ['B2', 'B3', 'B4', 'B5'],
        ['B2', 'C3', 'D4', 'E5'],
        ['B2', 'C2', 'D2', 'E2'],

        ['C2', 'C3', 'C4', 'C5'],
        ['C2', 'D3', 'E4', 'F5'],
        ['C2', 'D2', 'E2', 'F2'],

        ['D2', 'D3', 'D4', 'D5'],
        ['D2', 'C3', 'B4', 'A5'],

        ['E2', 'E3', 'E4', 'E5'],
        ['E2', 'D3', 'C4', 'B5'],

        ['F2', 'F3', 'F4', 'F5'],
        ['F2', 'E3', 'D4', 'C5'],
        ///////////////////////////////

        ['A3', 'A4', 'A5', 'A6'],
        ['A3', 'B3', 'C3', 'D3'],
        ['A3', 'B4', 'C5', 'D6'],

        ['B3', 'B4', 'B5', 'B6'],
        ['B3', 'C4', 'D5', 'E6'],
        ['B3', 'C3', 'D3', 'E3'],

        ['C3', 'C4', 'C5', 'C6'],
        ['C3', 'D4', 'E5', 'F6'],
        ['C3', 'D3', 'E3', 'F3'],

        ['D3', 'D4', 'D5', 'D6'],
        ['D3', 'C4', 'B5', 'A6'],

        ['E3', 'E4', 'E5', 'E6'],
        ['E3', 'D4', 'C5', 'B6'],

        ['F3', 'F4', 'F5', 'F6'],
        ['F3', 'E4', 'D5', 'C6'],
        ///////////////////////////////

        ['A4', 'A5', 'A6', 'A7'],
        ['A4', 'B4', 'C4', 'D4'],
        ['A4', 'B5', 'C6', 'D7'],

        ['B4', 'B5', 'B6', 'B7'],
        ['B4', 'C5', 'D6', 'E7'],
        ['B4', 'C4', 'D4', 'E4'],
        ['B4', 'C3', 'D2', 'E1'],

        ['C4', 'C5', 'C6', 'C7'],
        ['C4', 'D5', 'E6', 'F7'],
        ['C4', 'D4', 'E4', 'F4'],
        ['C4', 'D3', 'E2', 'F1'],

        ['D4', 'D5', 'D6', 'D7'],
        ['D4', 'C5', 'B6', 'A7'],

        ['E4', 'E5', 'E6', 'E7'],
        ['E4', 'D5', 'C6', 'B7'],

        ['F4', 'F5', 'F6', 'F7'],
        ['F4', 'E5', 'D6', 'C7'],
        ///////////////////////////////

        ['A5', 'B5', 'C5', 'D5'],

        ['B4', 'C5', 'D6', 'E7'],

        ['C4', 'D4', 'E4', 'F4'],
        ///////////////////////////////

        ['A6', 'B6', 'C6', 'D6'],

        ['B6', 'C6', 'D6', 'E6'],

        ['C6', 'D6', 'E6', 'F6'],
        ///////////////////////////////

        ['A7', 'B7', 'C7', 'D7'],

        ['B7', 'C7', 'D7', 'E7'],

        ['C7', 'D7', 'E7', 'F7'],
    ];

    // String que contendrá el mensaje con el ganador del juego cuando esto ocurra.
    var mensaje = '';

    // Variable number que especifica el jugador que está activo.
    var jugador = 1;

    function mostrarJugador(jugador) {
        try {
            console.log('te muestro tol jugador')
            document.getElementById('jugadorNum').innerHTML = jugador;
        } catch (error) {
            console.log(error.e);
        }
    }


    // Array que almacena las jugadas del juagador 1.
    var ocupadasJugador1 = [];
    // Array que almacena las jugadas del juagador 2.
    var ocupadasJugador2 = [];
    // Variables number que servira de contador de las casillas que estén dentro de una combinación ganadora
    var lineaGanadora01 = 0;
    var lineaGanadora02 = 0;



    /*
    Función que recorre las casillas de la tabla, rellena los arrays especificos con las tiradas de cada jugador
    y despues recorre el array de jugadas acertadas buscando las coincidencias con el arreglo de cada uno de los jugadores, si 
    encuentra una coincidencia avisa del jugador ganador.
    */
    function buscarganadores(tira) {
        console.log('entro a buscarGanadores, tirada: ' + tira)

        if (tira.ocupado === true) {
            if (tira.jugador === 1) {
                ocupadasJugador1.push(tira.nombre)
            }
            if (tira.jugador === 2) {
                ocupadasJugador2.push(tira.nombre)
            }
        }
        // Jugador 01
        for (var x = 0; x < jugadasGanadoras.length; x++) {
            lineaGanadora01 = 0;
            for (var i = 0; i < ocupadasJugador1.length; i++) {
                if (jugadasGanadoras[x].includes(ocupadasJugador1[i])) {
                    lineaGanadora01++;
                }
                if (lineaGanadora01 > 3) {
                    mensaje = jugador1.name + ' ha ganado';
                    document.getElementById('mensajeGanador').style.display = 'block';
                    document.getElementById('ganador').innerHTML = mensaje;
                }
            }
        }
        // Jugador 02
        for (var p = 0; p < jugadasGanadoras.length; p++) {
            lineaGanadora02 = 0;
            for (var u = 0; u < ocupadasJugador2.length; u++) {
                if (jugadasGanadoras[p].includes(ocupadasJugador2[u])) {
                    lineaGanadora02++;
                } if (lineaGanadora02 > 3) {
                    mensaje = jugador2.name + ' ha ganado';
                    document.getElementById('mensajeGanador').style.display = 'block';
                    document.getElementById('ganador').innerHTML = mensaje;
                }
            }
        }


        //colorearBlancos();
    }

    // Función que cambia el juagador en activo.
    function jugadorNum() {
        let user;
        if (jugador === 2) {
            jugador = 1;
            user = jugador1.name;
        } else {
            jugador = 2
            user = jugador2.name;
        }
        console.log('muestro: ' + user)
        mostrarJugador(user);

    }

    mostrarJugador(jugador1.name);
    /*
    let btnNuevaPartida = document.getElementById('btn-nuevaPartida');
    btnNuevaPartida.addEventListener('click', nuevaPartida, false);
    
    let btnReinicio = document.getElementById('btn-reinicio');
    btnReinicio.addEventListener('click', reiniciarPartida, false);
    */

    ///////////////////////////////////////////////////////////////////////////
    /*
     let pulsador = document.getElementsByClassName('pulsador');
     for (let i = 0; i < pulsador.length; i++) {
         pulsador[i].addEventListener('click', tiradas, false);
     }
     */
    ///////////////////////////////////////////////////////////////

    /* Función que recibe como argumento un número de columna, revisa las casillas de la columna para ver la última 
    ocupada y coloca la nueva ficha encima de la misma con el color que corresponda al jugador en activo.
    Al final llama a la funcion que cambia el jugador en activo y a la función que busca si alguno de los jugadores 
    ha hecho una combinación ganadora. 
    */
    var tirada;
    function tiradas(tar) {
        switch (tar) {
            case '1':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '1') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                console.log('entro a colorear');
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                            if (jugador === 2) {
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                        }
                    }
                };
                break;
            case '2':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '2') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador
                                tirada = tabla1[i];
                                break;
                            } else if (jugador === 2) {
                                try {
                                    document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                                } catch (error) {

                                }

                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                        }
                    }
                };
                break;
            case '3':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '3') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                try {
                                    document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';

                                } catch (error) {

                                }
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            } else if (jugador === 2) {
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                        }
                    }
                };
                break;
            case '4':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '4') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            } else if (jugador === 2) {
                                try {
                                    document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';

                                } catch (error) {

                                }
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                        }
                    }
                };
                break;
            case '5':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '5') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                try {
                                    document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';

                                } catch (error) {

                                }
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            } else if (jugador === 2) {
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                        }
                    }
                };
                break;
            case '6':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '6') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            } else if (jugador === 2) {
                                try {
                                    document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';

                                } catch (error) {

                                }
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                        }
                    }
                };
                break;
            case '7':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '7') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                try {
                                    document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';

                                } catch (error) {

                                }
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            } else if (jugador === 2) {
                                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                                tabla1[i].ocupado = true;
                                tabla1[i].jugador = jugador;
                                tirada = tabla1[i];
                                break;
                            }
                        }
                    }
                };
                break;
            default:
                break;
        }
        jugadorNum();
        buscarganadores(tirada);
    }

    // Función que redirige a la página inicial, donde empezar de nuevo.
    function nuevaPartida() {
        window.location.href = "/conecta";
        document.cookie = "jugador1=";
        document.cookie = "jugador2="
    }

    function reiniciarPartida() {
        window.location.href = "/juegoPrueba";
    }


    return (
        <div className='body-conectaJuego'>
            <HeaderJuegos titulo='Conecta 4' />
            <div className='botonera-conecta'>
                <button onClick={nuevaPartida} className="btnPartida">Empezar nueva partida</button>
                <button onClick={reiniciarPartida} className="btnPartida">Reiniciar la partida</button>
            </div>
            <div id="cajaUsuario">
                <p>Le toca tirar al jugador:  </p>
                <p id="jugadorNum"></p>
            </div>
            <div className='tablero_conectaBox'>
                <div id="mensajeGanador">
                    <div id="ganador"></div>
                    <div className="contenedor">
                        <button className="btnFin" id='btn-nuevaPartida' onClick={nuevaPartida}>Salir de la partida</button>
                        <button className="btnFin" id='btn-reinicio' onClick={reiniciarPartida}>Reiniciar partida</button>
                    </div>
                </div>
                <div id="pulsadores">
                    <div className="pulsador" >
                        <div className="casillaPulsador" onClick={() => tiradas('1')}></div>
                    </div>
                    <div className="pulsador" onClick={() => tiradas('2')}>
                        <div className="casillaPulsador"></div>
                    </div>
                    <div className="pulsador" onClick={() => tiradas('3')}>
                        <div className="casillaPulsador"></div>
                    </div>
                    <div className="pulsador" onClick={() => tiradas('4')}>
                        <div className="casillaPulsador"></div>
                    </div>
                    <div className="pulsador" onClick={() => tiradas('5')}>
                        <div className="casillaPulsador"></div>
                    </div>
                    <div className="pulsador" onClick={() => tiradas('6')}>
                        <div className="casillaPulsador"></div>
                    </div>
                    <div className="pulsador" onClick={() => tiradas('7')}>
                        <div className="casillaPulsador"></div>
                    </div>
                </div>
                <div id="tablero-conecta">
                    <div className="casilla" id="F1">
                    </div>
                    <div className="casilla" id="F2">
                    </div>
                    <div className="casilla" id="F3">
                    </div>
                    <div className="casilla" id="F4">
                    </div>
                    <div className="casilla" id="F5">
                    </div>
                    <div className="casilla" id="F6">
                    </div>
                    <div className="casilla" id="F7">
                    </div>
                    <div className="casilla" id="E1">
                    </div>
                    <div className="casilla" id="E2">
                    </div>
                    <div className="casilla" id="E3">
                    </div>
                    <div className="casilla" id="E4">
                    </div>
                    <div className="casilla" id="E5">
                    </div>
                    <div className="casilla" id="E6">
                    </div>
                    <div className="casilla" id="E7">
                    </div>
                    <div className="casilla" id="D1">
                    </div>
                    <div className="casilla" id="D2">
                    </div>
                    <div className="casilla" id="D3">
                    </div>
                    <div className="casilla" id="D4">
                    </div>
                    <div className="casilla" id="D5">
                    </div>
                    <div className="casilla" id="D6">
                    </div>
                    <div className="casilla" id="D7">
                    </div>
                    <div className="casilla" id="C1">
                    </div>
                    <div className="casilla" id="C2">
                    </div>
                    <div className="casilla" id="C3">
                    </div>
                    <div className="casilla" id="C4">
                    </div>
                    <div className="casilla" id="C5">
                    </div>
                    <div className="casilla" id="C6">
                    </div>
                    <div className="casilla" id="C7">
                    </div>
                    <div className="casilla" id="B1">
                    </div>
                    <div className="casilla" id="B2">
                    </div>
                    <div className="casilla" id="B3">
                    </div>
                    <div className="casilla" id="B4">
                    </div>
                    <div className="casilla" id="B5">
                    </div>
                    <div className="casilla" id="B6">
                    </div>
                    <div className="casilla" id="B7">
                    </div>
                    <div className="casilla" id="A1">
                    </div>
                    <div className="casilla" id="A2">
                    </div>
                    <div className="casilla" id="A3">
                    </div>
                    <div className="casilla" id="A4">
                    </div>
                    <div className="casilla" id="A5">
                    </div>
                    <div className="casilla" id="A6">
                    </div>
                    <div className="casilla" id="A7">
                    </div>
                </div>
            </div>

        </div>
    )
}

