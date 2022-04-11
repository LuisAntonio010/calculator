let numbers = Array.from(document.getElementsByClassName('numbers'))
let operators = Array.from(document.getElementsByClassName('operators'))
let display = document.getElementById('display')
const equalButton = document.getElementById('equalButton')
const clearButton = document.getElementById('clearButton')
const deleteButton = document.getElementById('deleteButton')

let inputValue = '';
let clickedOperator = '';
let storedNumber = ''; 

function numberClick(){
    numbers.forEach( number => {
        number.addEventListener('click',() => {
        inputValue += number.textContent
        display.innerText = inputValue
        })
    })
}
numberClick()

function operatorClick(){
    operators.forEach(operator => {
        operator.addEventListener('click',() => {

            storedNumber = inputValue
            inputValue = ''

            clickedOperator = operator.innerText

            display.innerText = clickedOperator + inputValue;
            
            
        })
    })
}
operatorClick()

function calculate(){
        const result = operate( parseFloat(storedNumber), parseFloat(inputValue), clickedOperator)
        display.innerText = result   
}

equalButton.addEventListener('click', calculate)


function clearKeyClick(){
    clearButton.addEventListener('click', () => {
        inputValue = '';
        clickedOperator = '';
        storedNumber = ''; 
        display.innerText = 0
    })
}
clearKeyClick()

function deleteClickKey(){
    deleteButton.addEventListener('click', () =>{
        display.innerText = display.innerText.slice(0,-1)
        inputValue = display.innerText
    })
}
deleteClickKey()


function add (a,b){
    return a + b
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
