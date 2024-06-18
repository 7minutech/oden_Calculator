
let operator;
let input = "";
let firstInput = "";
let lastInput = "";
const screenInput = document.querySelector("#input")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector("#equalButton")
const clearButton = document.querySelector("#clearButton")
let hasEqualed = false;

function checkDivisionByZero(result){
    if(result == "Nice try"){
        return true
    }
    else{
        return false
    }
}

function add(a,b){
    if(b == "." || a == "."){
        return "Nice try"
    }
    else{
        return Number(a) + Number(b);
    };
}
function subtract(a,b){
    if(b == "." || a == "."){
        return "Nice try"
    }
    else{
        return a-b
    }
}
function multiply(a,b){
    if(b == "." || a=="."){
        return "Nice try"
    }
    else{
        return a*b
    }
}
function divide(a,b){
    if(b == 0 || b == "." || a == "."){
        return "Nice try"
    }
    else{
        return a/b
    }
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
    //inputs numbers 
    numberButtons.forEach(number => {
        number.addEventListener("click",function(){
            input+=number.textContent;
            screenInput.textContent = input;
        })
    });
    //gets operator
    operatorButtons.forEach(operatorSign => {
        operatorSign.addEventListener("click",function(){
            if(checkDivisionByZero((screenInput.textContent))){
                input = ""
                firstInput = ""
                lastInput = ""
                screenInput.textContent = ""
            }
            //was equal button clicked
            //assign operator first
            if(hasEqualed){
                operator = operatorSign.textContent;
                hasEqualed = false;
            }
            //if no firstINput
            if(firstInput == ""){
                firstInput = screenInput.textContent;
                input = ""
            }
            //if first input get lastInput
            else{
                input = ""
                lastInput = screenInput.textContent;
                console.log(`${firstInput} ${operator} ${lastInput}`)
                screenInput.textContent = operate(firstInput,operator,lastInput)
                firstInput = operate(firstInput,operator,lastInput)
            }
        //if equal button wasn't clicked
        // assign operator last
        if(!(hasEqualed)){
            operator = operatorSign.textContent;
        }
            
        })
    });
    equalButton.addEventListener("click",function(){
        if(checkDivisionByZero((screenInput.textContent))){
            input = ""
            firstInput = ""
            lastInput = ""
            screenInput.textContent = ""
        }
        else{
            lastInput = screenInput.textContent;
            console.log(`${firstInput} ${operator} ${lastInput}`)
            console.log(operate(firstInput,operator,lastInput))
            screenInput.textContent = operate(firstInput,operator,lastInput)
            firstInput = ""
            hasEqualed = true
        }
    })
    clearButton.addEventListener("click",function(){
        input = ""
        firstInput =""
        lastInput = ""
        screenInput.textContent = "";   
    })
    
}
populate()


