// variables
const titleH1 = document.querySelector('#titlePage');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

// Recibir el formulario con la etiqueta <form> de HTML
// const sentForm = document.querySelector('#formu');

// RESULTADO
const pResult = document.querySelector('#result');


// .addEventListener()-> Método
// Utilizando el método "".addEventListener" es su propiedad "Escuchador de eventos" "Escucha cada vez que veas que sucede un cambio" "y cada vez que pase ejecute el codigo JavaScript que yo te diga", eso es lo que hace esta funcion de acá. 
// Es un Método así que tenemos que ejecutarla con parentesis, pero tenemos que enviarle 2 argumentos. El primero tiene que llevar como argumentos "nombre del elemento" que queramos ejecutar y el segundo es el codigo JavaScript que queramos mandar a llamar cuando suceda este evento.
// El evento que queremos escuchar de nuestro botón es el "click" y la función que queramos ejecutar es "btnOnClick"
btn.addEventListener('click', btnOnClick); // es mejor hacerso así ya que se cambia el tipo de propiedad de el botón desde HTML
// sentForm.addEventListener('submit', btnOnClick);


// Funcion del botón
function btnOnClick(){
    // Previniendo que el formulario actualice y en rute la información
    // event.preventDefault();

    // console.log('Escuchando el evento click desde una funcion');

    // De esta manera solo esta "concatenando los valores" necesitamos indicarle que son numeros
    // console.log(input1.value + input2.value);

    // console.log(parseInt(input1.value) + parseInt(input2.value));

    // RESOLVIENDO LA OPERACION Y MOSTRANDO RESULTADO EN PANTALLA
    const sumaOperation = parseInt(input1.value) + parseInt(input2.value);

    // pResult.innerText = 'El resultado de esta SUMA es: ' + sumaOperation;
    
    // OTRA FORMA 
    pResult.innerText = `El resultado de esta SUMA es: ${sumaOperation}`;
}