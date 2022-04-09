let operator = ''


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

function operate (num1, num2){
    switch(operator){
        case 'add':
            return add(num1, num2)
            break;
        case 'substract':
            return substract(num1, num2)
            break;
        case 'multiply':
            return multiply(num1, num2)
            break;
        case 'divide' :
            return divide (num1, num2)
            break;
        default:
    }
}
