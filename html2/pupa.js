const ID = '#calculator';

let number = 0;
let el = document.querySelector(ID);

function calculate(n){
    const calculatorNumber = document.querySelector('#calculatorNumber');
    number += n
    calculatorNumber.innerHTML = number;
}

function drowCalculator(){
    let calculatorNumber = document.createElement('div');
    calculatorNumber.id = 'calculatorNumber';
    calculatorNumber.innerHTML = number;

    let calculatorIncrease = document.createElement('button');
    calculatorIncrease.className = 'increase';
    calculatorIncrease.onclick = () => calculate(1);
    calculatorIncrease.innerHTML = '+';

    let calculatorDecrease = document.createElement('button');
    calculatorDecrease.className = 'decrease';
    calculatorDecrease.onclick = () => calculate(-1);
    calculatorDecrease.innerHTML = '-';

    el.appendChild(calculatorNumber);
    el.appendChild(calculatorIncrease);
    el.appendChild(calculatorDecrease);
}

drowCalculator();