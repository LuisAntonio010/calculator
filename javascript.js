let numbers = Array.from(document.getElementsByClassName('numbers'))
let operators = Array.from(document.getElementsByClassName('operators'))
let display = document.getElementById('display')
let equalButton = document.getElementById('equalButton')

let inputValue = '';
let clickedOperator = '';
let storedNumber = ''; 


let secondNumber = ''; 

numbers.forEach( number => {
    number.addEventListener('click',() => {
    inputValue += number.textContent
    display.innerText = inputValue
 
    })
})

operators.forEach(operator => {
    operator.addEventListener('click',() => {

        storedNumber = inputValue
        inputValue = ''

        clickedOperator = operator.innerText

        display.innerText = operator.innerText + inputValue
        
    })
})

equalButton.addEventListener('click', () =>{
    let result = ''
    
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
            console.log('try again'); 
            break;
    }
}
