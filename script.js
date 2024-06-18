
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
    numberButtons.forEach(number => {
        number.addEventListener("click",function(){
            input+=number.textContent;
            screenInput.textContent = input;
        })
    });
    operatorButtons.forEach(operatorSign => {
        
        operatorSign.addEventListener("click",function(){
            if(checkDivisionByZero((screenInput.textContent))){
                input = ""
                firstInput = ""
                lastInput = ""
                screenInput.textContent = ""
            }
            if(hasEqualed){
                operator = operatorSign.textContent;
                hasEqualed = false;
            }
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


