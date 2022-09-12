//import { useRef, useEffect } from 'react';
import './conecta4.css'
import './conecta4Juego.css'
import HeaderJuegos from '../headJuegos'

export default function Conecta4Juego() {
/*
    const lol = useRef();
    //console.log('ddddddddddddddddddddddddd: ' + lol.current.innerHTML);
    console.log(lol.current); // 👈️ undefined here

    useEffect(() => {
      const el2 = lol.current;
      console.log(el2); // 👈️ element here
    }, []);
  
    const handleClick = () => {
      console.log(lol.current); // 👈️ element here
    };
  
    

    function cambiarArojo() {
        lol.current.style.backgroundColor = 'red';
    }
*/


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

    /*
    let getCookie = name => {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    */
    // Objeto jugador con um number que ejerce de identificador y un booleano para definir su estado en el juego.
    var jugador1 = {
        id: 1,
        name: localStorage.getItem('nombre1'),
        activo: true
    }


    var jugador2 = {
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
    function mostrarJugador() {
        try {
            document.getElementById('jugadorNum').innerHTML = 'jugador1.name';
        } catch (error) {

        }
        //document.getElementById('jugadorNum').innerHTML = jugador1.name;

    }


    // Array que almacena las jugadas del juagador 1.
    var ocupadasJugador1 = [];
    // Array que almacena las jugadas del juagador 2.
    var ocupadasJugador2 = [];
    // Variables number que servira de contador de las casillas que estén dentro de una combinación ganadora
    var lineaGanadora01 = 0;
    var lineaGanadora02 = 0;

    // Bucle que recorre el array tabla1 que contiene las casillas y las colorea de blanco.
    function colorearBlancos() {
        for (var i = 0; i < tabla1.length; i++) {
            try {
                document.getElementById(tabla1[i].nombre).style.backgroundColor = 'white';

            } catch (error) {

            }
        };
    }

    mostrarJugador();

    /*
    Función que recorre las casillas de la tabla, rellena los arrays especificos con las tiradas de cada jugador
    y despues recorre el array de jugadas acertadas buscando las coincidencias con el arreglo de cada uno de los jugadores, si 
    encuentra una coincidencia avisa del jugador ganador.
    */
    function buscarganadores(tira) {
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
        try {
            document.getElementById('jugadorNum').innerHTML = jugador1.name;
        } catch (error) {

        }

        colorearBlancos();
    }

    // Función que cambia el juagador en activo.
    function jugadorNum() {
        if (jugador === 2) {
            jugador = 1;
            var user = jugador1.name;
        } else {
            jugador = 2
            user = jugador2.name;
        }
        try {
            document.getElementById('jugadorNum').innerHTML = user;
        } catch (error) {

        }

    }

    /*
    let btnNuevaPartida = document.getElementById('btn-nuevaPartida');
    btnNuevaPartida.addEventListener('click', nuevaPartida, false);
    
    let btnReinicio = document.getElementById('btn-reinicio');
    btnReinicio.addEventListener('click', reiniciarPartida, false);
    */
    let pulsador = document.getElementsByClassName('pulsador');
    for (let i = 0; i < pulsador.length; i++) {
        pulsador[i].addEventListener('click', tirada, false);
    }

    /* Función que recibe como argumento un número de columna, revisa las casillas de la columna para ver la última 
    ocupada y coloca la nueva ficha encima de la misma con el color que corresponda al jugador en activo.
    Al final llama a la funcion que cambia el jugador en activo y a la función que busca si alguno de los jugadores 
    ha hecho una combinación ganadora. 
    */
    function tirada(tar) {
        var tirada;
        switch (tar) {
            case '1':
                for (let i = 0; i < tabla1.length; i++) {
                    if (tabla1[i].nombre.substring(1) === '1') {
                        if (tabla1[i].ocupado === false) {
                            if (jugador === 1) {
                                //document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';                             
                                //handleClick();
                                //cambiarArojo()
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
        console.log('tirada ocupada: ' + tirada.ocupado)
        buscarganadores(tirada.ocupado);
    }

    // Función que redirige a la página inicial, donde empezar de nuevo.
    function nuevaPartida() {
        window.location.href = "/conecta";
        document.cookie = "jugador1=";
        document.cookie = "jugador2="
    }

    function reiniciarPartida() {
        window.location.href = "/conectaJuego";
    }


    function cargarPartida() {
        colorearBlancos();
    }
    return (
        <div className='body-conectaJuego'>
            <HeaderJuegos  titulo='Conecta 4'/>
            <div id="cajaUsuario">
                <p>Le toca tirar a:  </p>
                <p id="jugadorNum"></p>
            </div>
            <div id="mensajeGanador">
                <div id="ganador"></div>
                <div className="contenedor">
                    <button className="btnFin" id='btn-nuevaPartida' onClick={nuevaPartida}>Salir de la partida</button>
                    <button className="btnFin" id='btn-reinicio' onClick={reiniciarPartida}>Reiniciar partida</button>
                </div>
            </div>
            <button onClick={nuevaPartida} className="btnPartida">Empezar nueva partida</button>
            <button onClick={cargarPartida} className="btnPartidada">Empezar partida</button>
            <div id="pulsadores">
                <div className="pulsador" onClick={tirada('1')}>
                    <div className="casillaPulsador"></div>
                </div>
                <div className="pulsador" onClick={tirada('2')}>
                    <div className="casillaPulsador"></div>
                </div>
                <div className="pulsador" onClick={tirada('3')}>
                    <div className="casillaPulsador"></div>
                </div>
                <div className="pulsador" onClick={tirada('4')}>
                    <div className="casillaPulsador"></div>
                </div>
                <div className="pulsador" onClick={tirada('5')}>
                    <div className="casillaPulsador"></div>
                </div>
                <div className="pulsador" onClick={tirada('6')}>
                    <div className="casillaPulsador"></div>
                </div>
                <div className="pulsador" onClick={tirada('7')}>
                    <div className="casillaPulsador"></div>
                </div>
            </div>
            <div id="tablero-conecta">
                <div className="casilla" id="">
                    <div id="F1" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="F2" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="F3" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="F4" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="F5" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="F6" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="F7" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="E1" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="E2" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="E3" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="E4" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="E5" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="E6" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="E7" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="D1" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="D2" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="D3" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="D4" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="D5" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="D6" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="D7" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="C1" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="C2" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="C3" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="C4" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="C5" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="C6" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="C7" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="B1" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="B2" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="B3" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="B4" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="B5" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="B6" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="B7" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="A1" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="A2" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="A3" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="A4" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="A5" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="A6" className="circulo"></div>
                </div>
                <div className="casilla" id="">
                    <div id="A7" className="circulo"></div>
                </div>
            </div>
        </div>
    )
}

