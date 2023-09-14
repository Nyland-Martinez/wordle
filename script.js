let diccionario = ["PLATA","TORTA","MENTA","CHIPA","TIGRE"];
console.log = (Math.floor(Math.random() * diccionario.length-1)+1);
let indice = Math.floor(Math.random() * diccionario.length-1)+1;
console.log (indice);

let palabra = diccionario[indice];
console.log(palabra);

let intentos = 6;


const input = document.getElementById("guess-input");
const valor = input.value;


const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    

    return intento;
}

function intentar(){
    const INTENTO = leerIntento();
        const GRID = document.getElementById('grid');
        const ROW = document.createElement('div');
        ROW.className = 'row'; 

        if (INTENTO.leerIntento != 5){
        alert('debe de ingresar una palabra de 5 letra');
        return
    }

    if (INTENTO === palabra ) {
            terminar("<h1>GANASTE!🤩</h1>")
            return
        
    }


    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
       
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#00c69e';
            
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f5e45f';
            
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#243700';
           
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--
    if ((intentos>0)&&(intentos<6)){
            terminar("<h1>SIGUE INTENTANDO!😀</h1>")
    }
    intentos--
    if (intentos==0){
            terminar("<h1>PERDISTE!😑</h1>")
    }
    
}

function terminar(mensaje){
    const input = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


