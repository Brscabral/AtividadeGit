const btn = document.querySelector('#btn');
let numero = document.querySelector('#js');
let lista = [];

function GerarNumero(){
    for(let i=0; i <= 10000; i++){
        lista.push(i);    
    }

    return lista[Math.floor(Math.random() * lista.length)];

    }


   let aleatorio= GerarNumero();

btn.addEventListener('click',() => {
numero.innerHTML = "O numero é:" + lista[Math.floor(Math.random() * lista.length)];
});