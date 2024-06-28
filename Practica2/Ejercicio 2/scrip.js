/**
 * 
 * @param {string} numeroInicial 
 * @param {string} numeroFinal 
 */

function solution(numeroInicial, numeroFinal){
    const init = Number(numeroInicial) // convertir los valores a numeros
    const final = Number(numeroFinal) // convertir los valores a numeros
    const numbers = Array.from({length: final - init +1}, (_, index)=> init+index) // rellenar el array con los numeros del rango
    const result = numbers.reduce((acc, current)=>{
        return acc + current
    }, 0)

    console.log(result); 

}

/**
 * 
 * @param {*} event 
 */
function eventHandler(event){
    event.preventDefault();
    let numeroInicial = document.getElementById("numeroInicial").value;
    let numeroFinal = document.getElementById("numeroFinal").value;
    solution(numeroInicial, numeroFinal);
}