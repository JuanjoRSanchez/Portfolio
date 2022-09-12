/*
let user = true;
let usuario1 = document.getElementsByClassName("usuario1")[0];
let usuario2 = document.getElementsByClassName("usuario2")[0];
*/

let btnInicio = document.getElementById('btn-inicio');
btnInicio.addEventListener('click', mostrarRegistro, false);

let btnGuardar = document.getElementById('btn-guardar');
btnGuardar.addEventListener('click', saveUser, false);

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
        window.location.href = "./conecta4Juego";
    }
    document.getElementsByClassName("usuario2")[0].style.display = "flex";
    console.log(document.cookie);
}
