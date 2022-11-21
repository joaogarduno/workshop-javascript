// VARIABLES
const articleSectionOne = document.querySelector('.section__article--one');
const paragrhapFirst = document.querySelector('.paragraph__section--one');
const articleSectionTwo = document.querySelector('.section__article--two');
const paragrhapSecound = document.querySelector('.paragraph__section--two');

// Event Listeners
// syntax: element.addEventListener(event, function, useCapture) ;


// ONE WAY
// paragrhapSecound.addEventListener('click', function(){articleSectionOne.style.background = 'cornsilk'})

// OTHER WAY
// paragrhapFirst.addEventListener('click', changeBackground);

// function changeBackground(){
//     articleSectionTwo.style.background = 'orange';
//     paragrhapSecound.textContent = 'Se ha cambiado el contenido del segundo párrafo, utilizando un evento de "click"'
// }


// MOUSE OVER
// articleSectionOne.addEventListener('mouseover', function(){articleSectionTwo.style.background = 'darkgreen'});


// OTHER WAY




// ------------
// WHEN WE WANT TO CHANGE THE CONTENT DEPENDING THE ORDER USING "useCapture"

// FIRT EXAMPLE:
// paragrhapSecound.addEventListener('click', changeText);

// function changeText(){
//     paragrhapFirst.textContent = 'Estes es el primer ejemplo de cambio de texto al darle click a la 2° caja';
// }


// OTHER EXAMPLE
articleSectionOne.addEventListener('click', changeOrderOne, false);
paragrhapFirst.addEventListener('click', changeOrderTwo, false);

// FUNCTION 1
function changeOrderOne(){
    paragrhapSecound.textContent = paragrhapSecound.textContent += 'Este es el primer parrafo escrito'
}

// FUNCTION 2
function changeOrderTwo(){
    paragrhapSecound.textContent = paragrhapSecound.textContent += 'Se agrega un segundo parrafo'

}