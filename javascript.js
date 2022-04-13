let numbers = Array.from(document.getElementsByClassName('numbers'))
let operators = Array.from(document.getElementsByClassName('operators'))
let display = document.getElementById('display')
const equalButton = document.getElementById('equalButton')
const clearButton = document.getElementById('clearButton')
const deleteButton = document.getElementById('deleteButton')
const decimalButton = document.getElementById('decimalButton')

let inputValue = '';
let clickedOperator = '';
let storedNumber = ''; 
let result = ''; 


function numberClick(){
    numbers.forEach( number => {
        number.addEventListener('click',() => {
            if(result.toString().length <= 1 && storedNumber && inputValue && result){
                result = storedNumber
                result = ''
                inputValue = ''
                inputValue += number.textContent
                display.innerText =  inputValue
                decimalDisable()
            }else if(result.toString().length >= 1){
                inputValue = '';
                clickedOperator = '';
                storedNumber = ''; 
                result = '';
                inputValue += number.textContent
                display.innerText =  inputValue
                decimalDisable()
            }else{
                inputValue += number.textContent
                display.innerText = inputValue
                decimalDisable()
            }
        })
    })
}
numberClick()


function operatorClick(){
    operators.forEach(operator => {
        operator.addEventListener('click',() => {
            if(result.toString().length <= 1 && inputValue && storedNumber && clickedOperator){
                calculate()
                result = storedNumber
                inputValue = ''
                result = ''
                clickedOperator = operator.innerText
                display.innerText =  storedNumber + clickedOperator; 
                decimalDisable() 
            }else if(result.toString().length >= 1){
                storedNumber = result      
                result = ''
                inputValue = ''
                clickedOperator = operator.innerText
                display.innerText = clickedOperator + inputValue;
                decimalDisable()
            }else if(storedNumber && clickedOperator)  {
                inputValue = storedNumber
                inputValue = ''
                clickedOperator = operator.innerText
                display.innerText = clickedOperator + inputValue;
                decimalDisable()
            }else{
                storedNumber = inputValue            
                inputValue = ''
                clickedOperator = operator.innerText
                display.innerText = clickedOperator + inputValue;
                decimalDisable()
            }
        })
    })
}
operatorClick()

function calculate(){
        result = operate(parseFloat(storedNumber), parseFloat(inputValue), clickedOperator)
        display.innerText = result
        storedNumber = result
        clickedOperator = ''
        decimalDisable()
}

equalButton.addEventListener('click', calculate)

function clearKeyClick(){
    clearButton.addEventListener('click', () => {
        inputValue = '';
        clickedOperator = '';
        storedNumber = ''; 
        result =''
        decimalButton.disabled = false;
        display.innerText = 0
    })
}
clearKeyClick()

function deleteClickKey(){
    deleteButton.addEventListener('click', () =>{
        display.innerText = display.innerText.slice(0,-1)
        inputValue = display.innerText 
        decimalDisable()
    })
}
deleteClickKey()

function decimalDisable(){
    if(display.innerText.includes('.') === true){
    decimalButton.disabled = true;
    }if (display.innerText.includes('.') === false){
    decimalButton.disabled = false;
    }
}

decimalButton.addEventListener('click', () => {
    decimalDisable()
})

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
         case '÷':
            return divide (a,b)
            break;
        default:
            console.log('try again'); 
            break;
    }
}
