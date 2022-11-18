// variables
const titleH1 = document.querySelector('#titlePage');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

// RESULTADO
const pResult = document.querySelector('#result');


// Funcion del botón
function btnOnClick(){
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