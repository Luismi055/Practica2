/**
 * 
 * @param {string} number 
 */
function solution(number) {
    const app = document.getElementById("result");
    app.innerHTML = ''; // Limpiar resultados anteriores
    for (let i = 1; i <= number; i++) {
      const p = document.createElement("p");
      let text = '';
      
      if (i % 3 === 0) {
        text += 'Fizz';
        p.classList.add("Fizz");
      }
      if (i % 5 === 0) {
        text += 'Buzz';
        p.classList.add("Buzz");
      }
      if (text === '') {
        text = i;
      } else {
        p.classList.add("FizzBuzz");
      }
      
      p.innerText = text;
      app.appendChild(p);
    }
  }
  
  /**
   * 
   * @param {*} event 
   */
  function eventHandler(event) {
    event.preventDefault();
    const number = document.getElementById("number").value;
    solution(number);
  }