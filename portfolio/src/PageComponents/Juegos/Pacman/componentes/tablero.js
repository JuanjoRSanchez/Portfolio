import '../pacman.css'
import '../estilosFantasmas.css'
import Casilla from './Casilla'
import { useEffect } from "react";
import { useState } from 'react';

export default function Pacman() {
    const [tablero, setTablero] = useState(
        [
            "2:2",
            "2:3",
            "2:4",
            "2:5",
            "2:6",
            "2:7",
            "2:8",
            "2:9",
            "2:10",
            "2:11",
            "2:12",
            "2:13",
            "2:16",
            "2:17",
            "2:18",
            "2:19",
            "2:20",
            "2:21",
            "2:22",
            "2:23",
            "2:24",
            "2:25",
            "2:26",
            "2:27",

            "3:2",
            "3:7",
            "3:13",
            "3:16",
            "3:22",
            "3:27",

            "4:2",
            "4:7",
            "4:13",
            "4:16",
            "4:22",
            "4:27",

            "5:2",
            "5:3",
            "5:4",
            "5:5",
            "5:6",
            "5:7",
            "5:8",
            "5:9",
            "5:10",
            "5:11",
            "5:12",
            "5:13",
            "5:14",
            "5:15",
            "5:16",
            "5:17",
            "5:18",
            "5:19",
            "5:20",
            "5:21",
            "5:22",
            "5:23",
            "5:24",
            "5:25",
            "5:26",
            "5:27",

            "6:2",
            "6:7",
            "6:10",
            "6:19",
            "6:22",
            "6:27",

            "7:2",
            "7:7",
            "7:10",
            "7:19",
            "7:22",
            "7:27",

            "8:2",
            "8:3",
            "8:4",
            "8:5",
            "8:6",
            "8:7",
            "8:10",
            "8:11",
            "8:12",
            "8:13",
            "8:16",
            "8:17",
            "8:18",
            "8:19",
            "8:22",
            "8:23",
            "8:24",
            "8:25",
            "8:26",
            "8:27",

            "9:13",
            "9:22",
            "9:7",
            "9:16",

            "10:13",
            "10:22",
            "10:7",
            "10:16",

            "11:7",
            "11:10",
            "11:11",
            "11:12",
            "11:13",
            "11:14",
            "11:15",
            "11:16",
            "11:17",
            "11:18",
            "11:19",
            "11:22",

            "12:10",
            "12:22",
            "12:7",
            "12:19",

            "13:10",
            "13:22",
            "13:7",
            "13:19",

            "14:1",
            "14:2",
            "14:3",
            "14:4",
            "14:5",
            "14:6",
            "14:7",
            "14:8",
            "14:9",
            "14:10",
            "14:19",
            "14:20",
            "14:21",
            "14:22",
            "14:23",
            "14:24",
            "14:25",
            "14:26",
            "14:27",
            "14:28",

            "15:10",
            "15:7",
            "15:22",
            "15:19",

            "16:7",
            "16:10",
            "16:22",
            "16:19",

            "17:7",
            "17:10",
            "17:11",
            "17:12",
            "17:13",
            "17:14",
            "17:15",
            "17:16",
            "17:17",
            "17:18",
            "17:19",
            "17:22",


            "18:13",
            "18:22",
            "18:7",
            "18:16",

            "19:13",
            "19:22",
            "19:7",
            "19:16",

            "20:2",
            "20:3",
            "20:4",
            "20:5",
            "20:6",
            "20:7",
            "20:10",
            "20:11",
            "20:12",
            "20:13",
            "20:16",
            "20:17",
            "20:18",
            "20:19",
            "20:22",
            "20:23",
            "20:24",
            "20:25",
            "20:27",
            "20:26",

            "21:7",
            "21:19",
            "21:27",
            "21:2",
            "21:22",
            "21:10",

            "22:7",
            "22:19",
            "22:27",
            "22:10",
            "22:2",
            "22:22",

            "23:2",
            "23:3",
            "23:4",
            "23:5",
            "23:6",
            "23:7",
            "23:8",
            "23:9",
            "23:10",
            "23:11",
            "23:12",
            "23:13",
            "23:14",
            "23:15",
            "23:16",
            "23:17",
            "23:18",
            "23:19",
            "23:20",
            "23:21",
            "23:22",
            "23:23",
            "23:24",
            "23:25",
            "23:26",
            "23:27",

            "24:2",
            "24:7",
            "24:13",
            "24:16",
            "24:22",
            "24:27",

            "25:2",
            "25:7",
            "25:13",
            "25:16",
            "25:22",
            "25:27",

            "26:2",
            "26:3",
            "26:4",
            "26:5",
            "26:6",
            "26:7",
            "26:8",
            "26:9",
            "26:10",
            "26:11",
            "26:12",
            "26:13",
            "26:14",
            "26:15",
            "26:16",
            "26:17",
            "26:18",
            "26:19",
            "26:20",
            "26:21",
            "26:22",
            "26:23",
            "26:24",
            "26:25",
            "26:26",
            "26:27",

        ]
    )
    
    useEffect(() => {
        const mensajeFantasma = 'Perdiste el juego te atrapó el fantasma';
        const mensajeComecocos = 'Perdiste chocaste con el fantasme';
        const mensajeVictoria = 'Has ganado ¡Felicidades!';

        const velocidad = 300;
        // Nodos cambio de dirección
        let nodoDIAA = ["5:7", "5:22", "14:7", "14:22", "23:7", "23:22"];
        let nodoDAb = ["2:2", "2:16", "8:16", "11:10", "20:2", "20:10", "14:19"];
        let nodoDAr = ["8:2", "8:10", "26:2", "17:10", "20:16"];

        let nodoIAb = ["2:27", "2:13", "8:13", "11:19", "20:19", "20:27", "8:13"];
        let nodoIAr = ["8:27", "17:19", "8:19", "20:13", "8:19", "26:27"];

        let nodoDIAb = ["2:7", "2:22", "5:19", "5:10", "17:13", "17:16", "2:7", "23:13", "23:16"];
        let nodoDIAr = ["26:22", "26:16", "26:13", "26:7", "23:10", "23:19", "11:13", "11:16", "5:16", "5:13"];

        let nodoAAD = ["5:2", "23:2", "8:22", "20:22", "14:19"];
        let nodoAAI = ["5:27", "23:27", "14:10", "8:7", "20:7"];
        let der = '14:1';
        let izq = '14:28';

        let direccion;
        let recorridoValido = [
            "2:2",
            "2:4",
            "2:6",
            "2:8",
            "2:10",
            "2:11",
            "2:13",
            "2:17",
            "2:19",
            "2:21",
            "2:23",
            "2:25",
            "2:27",
            "3:7",
            "3:16",
            "3:27",
            "4:7",
            "4:16",
            "4:27",
            "5:3",
            "5:5",
            "5:7",
            "5:9",
            "5:11",
            "5:13",
            "5:15",
            "5:17",
            "5:19",
            "5:21",
            "5:23",
            "5:25",
            "5:27",
            "6:7",
            "6:19",
            "6:27",
            "7:7",
            "7:19",
            "7:27",
            "8:3",
            "8:5",
            "8:7",
            "8:11",
            "8:13",
            "8:17",
            "8:19",
            "8:23",
            "8:25",
            "8:27",
            "9:13",
            "9:22",
            "10:13",
            "10:22",
            "11:10",
            "11:12",
            "11:14",
            "11:16",
            "11:18",
            "11:22",
            "12:10",
            "12:22",
            "13:10",
            "13:22",
            "14:2",
            "14:4",
            "14:6",
            "14:8",
            "14:10",
            "14:20",
            "14:22",
            "14:24",
            "14:26",
            "14:28",
            "15:10",
            "15:22",
            "16:10",
            "16:22",
            "17:10",
            "17:12",
            "17:14",
            "17:16",
            "17:18",
            "17:22",
            "18:13",
            "18:22",
            "19:13",
            "19:22",
            "20:3",
            "20:5",
            "20:7",
            "20:11",
            "20:13",
            "20:17",
            "20:19",
            "20:23",
            "20:25",
            "20:27",
            "21:7",
            "21:19",
            "21:27",
            "22:7",
            "22:19",
            "22:27",
            "23:3",
            "23:5",
            "23:7",
            "23:9",
            "23:11",
            "23:13",
            "23:15",
            "23:17",
            "23:19",
            "23:21",
            "23:23",
            "23:25",
            "23:27",
            "24:7",
            "24:16",
            "24:27",
            "25:7",
            "25:16",
            "25:27",
            "26:3",
            "26:5",
            "26:7",
            "26:9",
            "26:11",
            "26:13",
            "26:15",
            "26:17",
            "26:19",
            "26:21",
            "26:23",
            "26:25",
            "26:27",
            "2:3",
            "2:7",
            "2:12",
            "2:18",
            "2:22",
            "2:26",
            "3:13",
            "4:2",
            "4:22",
            "5:4",
            "5:8",
            "5:12",
            "5:16",
            "5:20",
            "5:24",
            "6:2",
            "6:22",
            "7:10",
            "8:2",
            "8:6",
            "8:12",
            "8:18",
            "8:24",
            "9:7",
            "10:7",
            "11:7",
            "11:13",
            "11:17",
            "12:7",
            "13:7",
            "14:1",
            "14:5",
            "14:9",
            "14:21",
            "14:25",
            "15:7",
            "16:7",
            "17:7",
            "17:13",
            "17:17",
            "18:7",
            "19:7",
            "20:2",
            "20:6",
            "20:12",
            "20:18",
            "20:24",
            "21:2",
            "21:22",
            "22:10",
            "23:2",
            "23:6",
            "23:10",
            "23:14",
            "23:18",
            "23:22",
            "23:26",
            "24:13",
            "25:2",
            "25:22",
            "26:4",
            "26:8",
            "26:12",
            "26:16",
            "26:20",
            "26:24",
            "2:5",
            "2:16",
            "2:24",
            "3:22",
            "5:2",
            "5:10",
            "5:18",
            "5:26",
            "7:2",
            "8:4",
            "8:16",
            "8:26",
            "10:16",
            "11:15",
            "12:19",
            "14:3",
            "14:19",
            "14:27",
            "16:19",
            "17:15",
            "18:16",
            "20:4",
            "20:16",
            "20:26",
            "22:2",
            "23:4",
            "23:12",
            "23:20",
            "24:2",
            "25:13",
            "26:6",
            "26:14",
            "26:22",
            "2:9",
            "3:2",
            "5:6",
            "5:22",
            "7:22",
            "8:22",
            "11:11",
            "13:19",
            "14:23",
            "17:11",
            "19:16",
            "20:22",
            "22:22",
            "23:16",
            "24:22",
            "26:10",
            "26:26",
            "2:20",
            "5:14",
            "8:10",
            "11:19",
            "15:19",
            "20:10",
            "23:8",
            "26:2",
            "4:13",
            "9:16",
            "17:19",
            "23:24",
            "6:10",
            "21:10",
            "14:7",
            "26:18"
        ];
        const puntos = [
            "2:2",
            "2:4",
            "2:6",
            "2:8",
            "2:10",
            "2:11",
            "2:13",
            "2:17",
            "2:19",
            "2:21",
            "2:23",
            "2:25",
            "2:27",
            "3:7",
            "3:16",
            "3:27",
            "4:7",
            "4:16",
            "4:27",
            "5:3",
            "5:5",
            "5:7",
            "5:9",
            "5:11",
            "5:13",
            "5:15",
            "5:17",
            "5:19",
            "5:21",
            "5:23",
            "5:25",
            "5:27",
            "6:7",
            "6:19",
            "6:27",
            "7:7",
            "7:19",
            "7:27",
            "8:3",
            "8:5",
            "8:7",
            "8:11",
            "8:13",
            "8:17",
            "8:19",
            "8:23",
            "8:25",
            "8:27",
            "9:13",
            "9:22",
            "10:13",
            "10:22",
            "11:10",
            "11:12",
            "11:14",
            "11:16",
            "11:18",
            "11:22",
            "12:10",
            "12:22",
            "13:10",
            "13:22",
            "14:2",
            "14:4",
            "14:6",
            "14:8",
            "14:10",
            "14:20",
            "14:22",
            "14:24",
            "14:26",
            "14:28",
            "15:10",
            "15:22",
            "16:10",
            "16:22",
            "17:10",
            "17:12",
            "17:14",
            "17:16",
            "17:18",
            "17:22",
            "18:13",
            "18:22",
            "19:13",
            "19:22",
            "20:3",
            "20:5",
            "20:7",
            "20:11",
            "20:13",
            "20:17",
            "20:19",
            "20:23",
            "20:25",
            "20:27",
            "21:7",
            "21:19",
            "21:27",
            "22:7",
            "22:19",
            "22:27",
            "23:3",
            "23:5",
            "23:7",
            "23:9",
            "23:11",
            "23:13",
            "23:15",
            "23:17",
            "23:19",
            "23:21",
            "23:23",
            "23:25",
            "23:27",
            "24:7",
            "24:16",
            "24:27",
            "25:7",
            "25:16",
            "25:27",
            "26:3",
            "26:5",
            "26:7",
            "26:9",
            "26:11",
            "26:13",
            "26:15",
            "26:17",
            "26:19",
            "26:21",
            "26:23",
            "26:25",
            "26:27",
            "2:3",
            "2:7",
            "2:12",
            "2:18",
            "2:22",
            "2:26",
            "3:13",
            "4:2",
            "4:22",
            "5:4",
            "5:8",
            "5:12",
            "5:16",
            "5:20",
            "5:24",
            "6:2",
            "6:22",
            "7:10",
            "8:2",
            "8:6",
            "8:12",
            "8:18",
            "8:24",
            "9:7",
            "10:7",
            "11:7",
            "11:13",
            "11:17",
            "12:7",
            "13:7",
            "14:1",
            "14:5",
            "14:9",
            "14:21",
            "14:25",
            "15:7",
            "16:7",
            "17:7",
            "17:13",
            "17:17",
            "18:7",
            "19:7",
            "20:2",
            "20:6",
            "20:12",
            "20:18",
            "20:24",
            "21:2",
            "21:22",
            "22:10",
            "23:2",
            "23:6",
            "23:10",
            "23:14",
            "23:18",
            "23:22",
            "23:26",
            "24:13",
            "25:2",
            "25:22",
            "26:4",
            "26:8",
            "26:12",
            "26:16",
            "26:20",
            "26:24",
            "2:5",
            "2:16",
            "2:24",
            "3:22",
            "5:2",
            "5:10",
            "5:18",
            "5:26",
            "7:2",
            "8:4",
            "8:16",
            "8:26",
            "10:16",
            "11:15",
            "12:19",
            "14:3",
            "14:19",
            "14:27",
            "16:19",
            "17:15",
            "18:16",
            "20:4",
            "20:16",
            "20:26",
            "22:2",
            "23:4",
            "23:12",
            "23:20",
            "24:2",
            "25:13",
            "26:6",
            "26:14",
            "26:22",
            "2:9",
            "3:2",
            "5:6",
            "5:22",
            "7:22",
            "8:22",
            "11:11",
            "13:19",
            "14:23",
            "17:11",
            "19:16",
            "20:22",
            "22:22",
            "23:16",
            "24:22",
            "26:10",
            "26:26",
            "2:20",
            "5:14",
            "8:10",
            "11:19",
            "15:19",
            "20:10",
            "23:8",
            "26:2",
            "4:13",
            "9:16",
            "17:19",
            "23:24",
            "6:10",
            "21:10",
            "14:7",
            "26:18"
        ];

        const comecocos = {
            puntoInicical: '20:27',
            puntosComidos: [],
            estado: 'normal',
            direccion: 'derecha'
        }
        var fantasmaNaranja = {
            posicion: '20:25',
            //posicionActual ,
            direccion: 'izquierda'
        }
        var fantasmaRojo = {
            posicion: '2:13',
            //posicionActual ,
            direccion: 'izquierda'
        }
        var fantasmaAzul = {
            posicion: '5:10',
            //posicionActual ,
            direccion: 'derecha'
        }
        var fantasmaRosa = {
            posicion: '26:15',
            //posicionActual ,
            direccion: 'izquierda'
        }
        const nueva = [];
        function crearEstructura() {
            let id;
            for (let i = 1; i < 28; i++) {
                for (let x = 1; x < 29; x++) {
                    let obj = {
                        id: '',
                        clase: ''
                    }
                    id = i + ':' + x;
                    obj.id = id;
                    switch (id) {
                        case comecocos.puntoInicical:
                            switch (comecocos.direccion) {
                                case 'comecocosDerecha':
                                    obj.clase = 'comecocosDerecha'
                                    break;
                                case 'comecocosIzquierda':
                                    obj.clase = 'comecocosIzquierda'
                                    break;
                                case 'comecocosArriba':
                                    obj.clase = 'comecocosArriba'
                                    break;
                                case 'comecocosAbajo':
                                    obj.clase = 'comecocosAbajo'
                                    break;
                                default:
                                    break;
                            }
                            obj.clase = 'comecocosDerecha';
                            break;
                        case fantasmaRosa.posicion:
                            obj.clase = 'punto fantasmaRosa01';
                            break;
                        case fantasmaRojo.posicion:
                            obj.clase = 'punto fantasmaRojo01';
                            break;
                        case fantasmaAzul.posicion:
                            obj.clase = 'punto fantasmaAzul01';
                            break;
                        case fantasmaNaranja.posicion:
                            obj.clase = 'punto fantasmaNaranja01';
                            break;
                        default:
                            if (puntos.includes(id)) {
                                obj.clase = 'punto';
                            } else {
                                obj.clase = 'cuadroPacman';
                            }

                            break;
                    }

                    nueva.push(obj);
                }
            }
            setTablero(nueva)

        }
        crearEstructura();
        /*
        Fantasmas
        */
        function evaluarMovimientoFantasma(posi) {
            if (recorridoValido.includes(posi)) {
                return true;
            }
            return false
        }

        function evaluarChoqueFantasmaConPacman(posi) {
            try {
                let clas = document.getElementById(posi).getAttribute('class');
                if (clas !== 'comecocosDerecha' && clas !== 'comecocosIzquierda' && clas !== 'comecocosArriba' &&
                    clas !== 'comecocosAbajo' && clas !== 'comecocosCerrado') {
                    return false;
                }
            } catch (error) {

            }

            return true;
        }

        function randomDireccionesTotal(posic) {
            if (nodoDIAA.includes(posic)) {
                let num01 = Math.round(Math.random() * 3) + 1;
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'izquierda';
                    case (3):
                        return 'abajo';
                    case (4):
                        return 'arriba';
                    default:
                        break;
                }
            }
            if (nodoDAb.includes(posic)) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 === 0) {
                    return 'derecha';
                } else {
                    return 'abajo';
                }
            }
            if (nodoDAr.includes(posic)) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 === 0) {
                    return 'derecha';
                } else {
                    return 'arriba';
                }
            }
            if (nodoIAb.includes(posic)) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 === 0) {
                    return 'izquierda';
                } else {
                    return 'abajo';
                }
            }
            if (nodoIAr.includes(posic)) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 === 0) {
                    return 'izquierda';
                } else {
                    return 'arriba';
                }
            }
            if (nodoDIAb.includes(posic)) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'izquierda';
                    case (3):
                        return 'abajo';
                    default:
                        break;
                }
            }
            if (nodoDIAr.includes(posic)) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'izquierda';
                    case (3):
                        return 'arriba';
                    default:
                        break;
                }
            }
            if (nodoAAD.includes(posic)) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'abajo';
                    case (3):
                        return 'arriba';
                    default:
                        break;
                }
            }
            if (nodoAAI.includes(posic)) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'izquierda';
                    case (2):
                        return 'abajo';
                    case (3):
                        return 'arriba';
                    default:
                        break;
                }
                //  }
            }
            if (posic === der) {
                return 'derecha';
            }
            if (posic === izq) {
                return 'izquierda';
            }
            return false;
        }

        function movimiento(caminos, caminoEvaluar, pos, color) {

            if (evaluarMovimientoFantasma(caminoEvaluar)) {
                let clase;
                switch (color) {
                    case 'rosa':
                        fantasmaRosa.posicion = caminoEvaluar;
                        clase = 'fantasmaRosa01';
                        break;
                    case 'rojo':
                        fantasmaRojo.posicion = caminoEvaluar;
                        clase = 'fantasmaRojo01';
                        break;
                    case 'azul':
                        fantasmaAzul.posicion = caminoEvaluar;
                        clase = 'fantasmaAzul01';
                        break;
                    case 'naranja':
                        fantasmaNaranja.posicion = caminoEvaluar;
                        clase = 'fantasmaNaranja01';
                        break;
                    default:
                        break;

                }
                try {
                    let classmovimiento = document.getElementById(caminoEvaluar).getAttribute('class');

                    if (classmovimiento === 'comecocos'
                        || classmovimiento === 'comecocosCerrado' || classmovimiento === 'comecocosDerecha' || classmovimiento === 'comecocosIzquierda'
                        || classmovimiento === 'comecocosArriba' || classmovimiento === 'comecocosAbajo' || classmovimiento === 'comecocosCerrado') {
                        if (evaluarChoqueFantasmaConPacman(caminoEvaluar)) {
                            mostrarMensaje(mensajeFantasma);
                        }
                    }
                } catch (error) {
                    console.log('hhhhhhhh');
                }
                if (caminos.includes(pos)) {
                    try {
                        document.getElementById(pos).setAttribute('class', 'punto');
                    } catch (error) {

                    }
                } else {
                    document.getElementById(pos).setAttribute('class', 'noPunto');
                }
                try {
                    document.getElementById(caminoEvaluar).classList.add(clase);
                } catch (error) {

                }
                if (!randomDireccionesTotal(caminoEvaluar)) {
                    return false;
                } else {

                    if (evaluarChoqueFantasmaConPacman(caminoEvaluar)) {
                        mostrarMensaje(mensajeFantasma);
                    }
                    switch (color) {
                        case 'rosa':
                            fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluar);
                            break;
                        case 'rojo':
                            fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluar);
                            break;
                        case 'azul':
                            fantasmaAzul.direccion = randomDireccionesTotal(caminoEvaluar);
                            break;
                        case 'naranja':
                            fantasmaNaranja.direccion = randomDireccionesTotal(caminoEvaluar);
                            break;
                        default:
                            break;
                    }
                }
            }
        }

        function movimientoFantasmaRosaTotal(caminos) {
            let pos = fantasmaRosa.posicion;
            let DX = parseInt(pos.split(':')[1]);
            let DY = parseInt(pos.split(':')[0]);
            let caminoEvaluarRosa;
            let color = 'rosa';
            switch (fantasmaRosa.direccion) {
                case 'derecha':
                    DX = DX + 1;
                    caminoEvaluarRosa = DY + ':' + DX;
                    if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                        break;
                    }
                    break;
                case 'izquierda':
                    DX = DX - 1;
                    caminoEvaluarRosa = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                        break;
                    }
                    break;
                case 'arriba':
                    DY = DY - 1;
                    caminoEvaluarRosa = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                        break;
                    }
                    break;
                case 'abajo':
                    DY = DY + 1;
                    caminoEvaluarRosa = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                        break;
                    }
                    break;
                default:
                    break;
            }
        }

        function movimientoFantasmaRojoTotal(caminos) {
            let pos = fantasmaRojo.posicion;
            let DX = parseInt(pos.split(':')[1]);
            let DY = parseInt(pos.split(':')[0]);
            let caminoEvaluarRojo;
            let color = 'rojo';
            switch (fantasmaRojo.direccion) {
                case 'derecha':
                    DX = DX + 1;
                    caminoEvaluarRojo = DY + ':' + DX;
                    if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                        break;
                    }
                    break;
                case 'izquierda':
                    DX = DX - 1;
                    caminoEvaluarRojo = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                        break;
                    }
                    break;
                case 'arriba':
                    DY = DY - 1;
                    caminoEvaluarRojo = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                        break;
                    }
                    break;
                case 'abajo':
                    DY = DY + 1;
                    caminoEvaluarRojo = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                        break;
                    }
                    break;
                default:
                    break;
            }

        }

        function movimientoFantasmaNaranjaTotal(caminos) {
            let pos = fantasmaNaranja.posicion;
            let DX = parseInt(pos.split(':')[1]);
            let DY = parseInt(pos.split(':')[0]);
            let caminoEvaluarNaranja;
            let color = 'naranja';
            switch (fantasmaNaranja.direccion) {
                case 'derecha':
                    DX = DX + 1;
                    caminoEvaluarNaranja = DY + ':' + DX;
                    if (!movimiento(caminos, caminoEvaluarNaranja, pos, color)) {
                        break;
                    }
                    break;
                case 'izquierda':
                    DX = DX - 1;
                    caminoEvaluarNaranja = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarNaranja, pos, color)) {
                        break;
                    }
                    break;
                case 'arriba':
                    DY = DY - 1;
                    caminoEvaluarNaranja = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarNaranja, pos, color)) {
                        break;
                    }
                    break;
                case 'abajo':
                    DY = DY + 1;
                    caminoEvaluarNaranja = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarNaranja, pos, color)) {
                        break;
                    }
                    break;
                default:
                    break;
            }
        }

        function movimientoFantasmaAzulTotal(caminos) {
            let pos = fantasmaAzul.posicion;
            let DX = parseInt(pos.split(':')[1]);
            let DY = parseInt(pos.split(':')[0]);
            let caminoEvaluarAzul;
            let color = 'azul';
            switch (fantasmaAzul.direccion) {
                case 'derecha':
                    DX = DX + 1;
                    caminoEvaluarAzul = DY + ':' + DX;
                    if (!movimiento(caminos, caminoEvaluarAzul, pos, color)) {
                        break;
                    }
                    break;
                case 'izquierda':
                    DX = DX - 1;
                    caminoEvaluarAzul = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarAzul, pos, color)) {
                        break;
                    }
                    break;
                case 'arriba':
                    DY = DY - 1;
                    caminoEvaluarAzul = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarAzul, pos, color)) {
                        break;
                    }
                    break;
                case 'abajo':
                    DY = DY + 1;
                    caminoEvaluarAzul = DY + ':' + (DX);
                    if (!movimiento(caminos, caminoEvaluarAzul, pos, color)) {
                        break;
                    }
                    break;
                default:
                    break;
            }
        }

        ////// manejar botón de reinicio //////////////
        function reiniciarPartida() {
            window.location.reload();
        }

        document.getElementsByClassName('btnCerrar_conecta')[0].addEventListener('click', reiniciarPartida);

        //////////////******** Pacman ********/////////////////////
        /*
        Función que dependiendo de la dirección que lleve Pacman orienta su cuerpo 
        */
        function mostrarPacman() {
            try {
                var pu = document.getElementById(comecocos.puntoInicical);
            } catch (error) {
                
            }
            if (pu.getAttribute('class') === 'comecocosDerecha' || pu.getAttribute('class') === 'comecocosIzquierda'
                || pu.getAttribute('class') === 'comecocosArriba' || pu.getAttribute('class') === 'comecocosAbajo') {
                pu.setAttribute('class', 'comecocosCerrado');
            } else {
                switch (comecocos.direccion) {
                    case 'derecha':
                        pu.setAttribute('class', 'comecocosDerecha');
                        break;
                    case 'izquierda':
                        pu.setAttribute('class', 'comecocosIzquierda');
                        break;
                    case 'arriba':
                        pu.setAttribute('class', 'comecocosArriba');
                        break;
                    case 'abajo':
                        pu.setAttribute('class', 'comecocosAbajo');
                        break;
                    default:
                        break;
                }
            }
        }

        // captura de teclado
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                case "1":
                    direccion = 'izquierda';
                    break;
                case "5":
                    direccion = 'arriba';
                    break;
                case "3":
                    direccion = 'derecha';
                    break;
                case "2":
                    direccion = 'abajo';
                    break;
                default:
                    break;
            }

        });

        function restantes(posi) {
            for (var i = puntos.length - 1; i >= 0; i--) {
                if (puntos[i] === posi) {
                    puntos.splice(i, 1);
                }
            }
        }
        // Evaluar si el mivimiento esta fuera del camino 
        function evaluarMovimiento(posi) {
            if (recorridoValido.includes(posi)) {
                return true;
            }
            return false
        }
        function evaluarChoquePacmanConFantasma(posi) {
            let clas = document.getElementById(posi).getAttribute('class');
            if (clas !== 'punto' && clas !== 'noPunto') {
                return true;
            }
            return false;
        }
        function evaluarVictoria() {
            let puntosRestantes = document.getElementsByClassName('punto').length;
            if (puntosRestantes === 0) {
                mostrarMensaje(mensajeVictoria);
            }
        }

        function mostrarMensaje(string) {
            try {
                document.getElementById('mensaje').style.display = 'block';
                document.getElementById('mensajeContenido').innerHTML = string;
            } catch (error) {

            }


        }
        function movimientosPacman() {
            let pos = comecocos.puntoInicical;
            let DX = parseInt(pos.split(':')[1]);
            let DY = parseInt(pos.split(':')[0]);
            let caminoEvaluar;
            let classComecocos;
            switch (direccion) {
                case 'derecha':
                    DX = DX + 1;
                    caminoEvaluar = DY + ':' + (DX);
                    classComecocos = 'comecocosDerecha'
                    evaluarmovimientoPacman(caminoEvaluar, pos, classComecocos, 'derecha');
                    break;
                case 'izquierda':
                    DX = DX - 1;
                    caminoEvaluar = DY + ':' + (DX);
                    classComecocos = 'comecocosIzquierda';
                    evaluarmovimientoPacman(caminoEvaluar, pos, classComecocos, 'izquierda');
                    break;
                case 'arriba':
                    DY = DY - 1;
                    caminoEvaluar = DY + ':' + (DX);
                    classComecocos = 'comecocosArriba';
                    evaluarmovimientoPacman(caminoEvaluar, pos, classComecocos, 'arriba');
                    break;
                case 'abajo':
                    DY = DY + 1;
                    caminoEvaluar = DY + ':' + (DX);
                    classComecocos = 'comecocosAbajo';
                    evaluarmovimientoPacman(caminoEvaluar, pos, classComecocos, 'abajo');
                    break;
                default:
                    break;
            }
            evaluarVictoria();

        }
        function evaluarmovimientoPacman(caminoEvaluar, pos, classComecocos, direccion) {
            try {
                document.getElementById(comecocos.puntoInicical).setAttribute('class', classComecocos);
            } catch (error) {

            }
            comecocos.direccion = direccion;
            if (document.getElementById(caminoEvaluar).getAttribute('class') === 'punto') {
                comecocos.puntosComidos.push(caminoEvaluar);
                restantes(caminoEvaluar);
            }
            if (evaluarMovimiento(caminoEvaluar)) {
                document.getElementById(pos).setAttribute('class', 'noPunto');
                comecocos.puntoInicical = caminoEvaluar;
                if (evaluarChoquePacmanConFantasma(comecocos.puntoInicical)) {
                    mostrarMensaje(mensajeComecocos);
                }
            }
        }
        function movimientoFantasmasYPacman() {
            movimientoFantasmaRosaTotal(puntos);
            movimientoFantasmaRojoTotal(puntos);
            movimientoFantasmaNaranjaTotal(puntos);
            movimientoFantasmaAzulTotal(puntos);
            movimientosPacman();
            mostrarPacman();
        }

        setInterval(crearEstructura, velocidad);
        setInterval(movimientoFantasmasYPacman, velocidad);
    }, [])


    return (
        <div className='body_pacmann'>
            <div className='tablero_boxPacman'>
                <div id="tablero_pacman">
                    {tablero.map((obj, index) => {
                        return (<Casilla id={obj.id} key={index} clase={obj.clase} estado={obj.estado} />)
                    })
                    }
                </div>
            </div>
        </div>

    )
}

