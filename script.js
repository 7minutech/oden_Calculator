
let operator;
let input = "";
let firstInput = "";
let lastInput = "";
const screenInput = document.querySelector("#input")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector("#equalButton")
const clearButton = document.querySelector("#clearButton")



function add(a,b){
    return Number(a)+Number(b);
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,operator,b){
    switch (operator){
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "x":
            return multiply(a,b)
        case "/":
            return divide(a,b)
    }
}

function populate(){
    numberButtons.forEach(number => {
        number.addEventListener("click",function(){
            input+=number.textContent;
            screenInput.textContent = input;
        })
    });
    operatorButtons.forEach(operatorSign => {
        operatorSign.addEventListener("click",function(){
            if(firstInput == ""){
                firstInput = screenInput.textContent;
                input = ""
            }
            else{
                input = ""
                lastInput = screenInput.textContent;
                console.log(`${firstInput} ${operator} ${lastInput}`)
                screenInput.textContent = operate(firstInput,operator,lastInput)
                firstInput = operate(firstInput,operator,lastInput)
            }
            operator = operatorSign.textContent;

        })
    });
    equalButton.addEventListener("click",function(){
        firstInput = screenInput.textContent;
        console.log(`${firstInput} ${operator} ${lastInput}`)
        console.log(operate(firstInput,operator,lastInput))
        screenInput.textContent = operate(firstInput,operator,lastInput)
    })
    clearButton.addEventListener("click",function(){
        input = ""
        firstInput =""
        lastInput = ""
        screenInput.textContent = "";   
    })
    
}
populate()


