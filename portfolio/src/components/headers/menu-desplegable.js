window.onload = function () {
    let lista = document.getElementsByClassName('desplegable')[0];
   
    let btn = document.getElementsByTagName('img')[0];

    btn.addEventListener('click', function () {
        if (lista.style.display === 'none') {
            lista.style.display = 'block';
        } else {
            lista.style.display = 'none';
        }

    });

};


