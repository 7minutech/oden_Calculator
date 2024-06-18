let a;
let b;
let operator;
let input = "";
function add(a,b){
    return a+b;
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
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
    }
}

function populate(){
    screenInput = document.querySelector("#input")
    numbers = document.querySelectorAll(".number")
    numbers.forEach(number => {
        number.addEventListener("click",function(){
            input+=number.textContent;
            screenInput.textContent = input;
        })
    });
}
populate()


