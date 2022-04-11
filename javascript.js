let numbers = Array.from(document.getElementsByClassName('numbers'))
let operators = Array.from(document.getElementsByClassName('operators'))
let display = document.getElementById('display')

let firstNumber = '';
let clickedOperator = '';
let storedNumber = ''; 
let secondNumber = ''; 

numbers.forEach( number => {
    number.addEventListener('click',() => {
    firstNumber += number.textContent
    display.innerText = firstNumber
    })
})

operators.forEach(operator => {
    operator.addEventListener('click',() => {
        firstNumber = storedNumber
    })
})


function add (a,b){
    return a+b
}

function substract (a,b){
    return a-b
}

function multiply (a,b) {
    return a*b
}

function divide (a,b) {
    return a/b
}


function operate (a, b, operator){
    switch(operator){
        case '+':
            return add(a, b)
            break;
        case '-':
            return substract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '÷' :
            return divide (a, b)
            break;
        default:
            break;
    }
}
