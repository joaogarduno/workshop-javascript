// creamos una variale
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const p = document.querySelector('p');
const parrafo = document.querySelector('.paragraph');
const pid = document.querySelector('#paragraphId');
const input = document.querySelector('input');

// Haremos un console.log solo de un elemento para identificar que es lo que esta sucediendo
console.log(h1);

// c
console.log(input.value);

//  Objeto de nuestros elementos para ver sus propiedades o funciones en el navegador
console.log({
    h1,
    parrafo,
    pid,
    input,
});

// MODIFICAR ELEMENTOS DE TIPO TEXTO Y ELEMENTOS DE TIPO HTML CON ".innerHTML" e ".innerText"
// h1.innerHTML = 'Seguimos aprendiendo para mejorar la manipulación del DOM';
// h1.innerHTML = 'Este es un nuevo ejemplo <br> con un salto de linea utilizando etiqueta "br"';
// h1.innerText = 'Este es un ejemplo con texto, sin interpretar elementos HTML <br>';

// OBTENER O SELECCIONAR ATRIBUTOS CON ".getAttribute" y ".setAttribute"
// console.log(h2.getAttribute('pantalla'));
// console.log(h2.getAttribute('class'));
console.log(h3.getAttribute('class'));

// MODIFICAR ESE ATRIBUTO DE TIPO CLASE O CLASS
// h3.setAttribute('class', 'blue');

// AGREGAR ATRIBUTOS DE CLASS
h3.classList.add('purple');
h3.classList.remove('green');

// EVENTOS
h3.classList.toggle('red');

// TIPO DE CONDICIONAL TRUE O FALSE
h3.classList.contains('purple');

// ENTRAR AL VALOR DEL INPUT
input.value = "456";


// CREAR ELEMENTO HTML DE 0 DESDE JAVASCRIPT UTILIZANDO:
// document.createElement('');

// SI CREAMOS UNA IMAGEN LO HACEMOS ASI
// console.log(document.createElement('img'));
// console.log(document.createElement('span'));

// lo primero que hacemos es crear nuestra imagen en JavaScript guardandola en una variable llamada imagen
const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://images.unsplash.com/photo-1666899155015-d33935023d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');

// imprimimos nuestra variable "imagen"
console.log('imagen');

// pid.append(imagen);

// RETO: Borrando el contenido del parrafo y solo agregando la imagen dentro de este parrafo
pid.innerHTML = '';
pid.appendChild(imagen);