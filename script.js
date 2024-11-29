let btnADD = document.querySelector(".btnADD");
let btnSUB = document.querySelector(".btnSUB");
let btnMUL = document.querySelector(".btnMUL");
let btnDIV = document.querySelector(".btnDIV");
let btnEQL = document.querySelector(".btnEQL");
let btnAC = document.querySelector(".btnAC");
let justOperated = 0;

let add = function(a,b=a){
    return round(a+b);
}
let subtract = function(a,b=a){
    return round(a-b);
}
let multiply = function(a,b=a){
    return round(a*b);
}
let divide = function(a,b=a){
    if (b == 0){
        displayString = "DIVIDE BY 0!"
        display(displayString);
        equation = ``;
        displayString=``;
        return null;
    }

    return round(a/b);
}
let round = function(number){
    number = (Math.round(number*1000))/1000;
    return number;
}

let equation =``;
let displayString = ``;

let display = function(string) {
    let dis = document.querySelector("#display");
    let checker =-2;
    for(let i =0;i<displayString.length;i++){
        if (displayString[i] != '0'){
            checker = i-1;
            break;
        }
    }

    if(checker === -2){
        displayString = `0`;
    }
    else if(checker>-1){
        displayString  = displayString.slice(checker+1);
    }

    dis.textContent = displayString;
}

for(let i=0;i<10;i++){
    let btn = document.querySelector(`.btn${i}`);
    btn.addEventListener("click",()=>{

        if(justOperated === 0){

            if(displayString.length<10){
                displayString += i;
                equation += i;
                display(displayString);

            }
        }
        else{
            justOperated = 0;
            displayString = ``;
            equation = ``;
            displayString += i;
            equation += i;
            display(displayString);
        }
    });
}

function isOnlyNumbers(str) {
    return !isNaN(str) && Number.isInteger(Number(str));
}





btnADD.addEventListener("click",()=>{
    if(equation.length === 0){
        return;
    }
    justOperated = 0;
    if(isOnlyNumbers(equation)){
        equation += "+";
        displayString = ``;
    }
    else{
        let newValue = operate();

        if (newValue === "null"){
            return;
        }

        displayString = newValue;
        equation = newValue + "+";
        display(displayString);
        displayString = ``;
    }
});

btnSUB.addEventListener("click",()=>{
    if(equation.length === 0){
        return;
    }
    justOperated = 0;
    if(isOnlyNumbers(equation)){
        equation += "-";
        displayString = ``;
    }
    else{
        let newValue = operate();

        if (newValue === "null"){
            return;
        }

        displayString = newValue;
        equation = newValue + "-";
        display(displayString);
        displayString = ``;
    }
});

btnMUL.addEventListener("click",()=>{
    if(equation.length === 0){
        return;
    }
    justOperated = 0;
    if(isOnlyNumbers(equation)){
        equation += "*";
        displayString = ``;
    }
    else{
        let newValue = operate();

        if (newValue === "null"){
            return;
        }

        displayString = newValue;
        equation = newValue + "*";
        display(displayString);
        displayString = ``;
    }
});

btnDIV.addEventListener("click",()=>{
    if(equation.length === 0){
        return;
    }
    justOperated = 0;
    if(isOnlyNumbers(equation)){
        equation += "/";
        displayString = ``;
    }
    else{
        let newValue = operate();

        if (newValue === "null"){
            return;
        }

        displayString = newValue;
        equation = newValue + "/";
        display(displayString);
        displayString = ``;
    }
});

btnEQL.addEventListener("click",()=>{
    if(equation.length === 0){
        return;
    }

    let newValue = operate();

    if (newValue === "null"){
        return;
    }

    displayString = operate();
    equation = operate();
    display(displayString)
    justOperated = 1;
});

btnAC.addEventListener("click",()=>{
    displayString = ``;
    equation = ``;
    display(displayString);
})

let operate = function(){
    if(equation.length === 0){
        return "0";
    }
    if(isOnlyNumbers(equation)){
        return equation;
    }
    else{

        if(equation.includes("+")){
            let arr = equation.split("+");
            if (arr[1] === ""){
                return String(add(Number(arr[0])));
            }
            return String(add(Number(arr[0]),Number(arr[1])));
        }
        else if(equation.includes("-")){
            if(equation.includes("-")){
                let arr = equation.split("-");
                if (arr[1] === ""){
                    return String(subtract(Number(arr[0])));
                }
                return String(subtract(Number(arr[0]),Number(arr[1])));
            }
        }
        else if(equation.includes("*")){
            if(equation.includes("*")){
                let arr = equation.split("*");
                if (arr[1] === ""){
                    return String(multiply(Number(arr[0])));
                }
                return String(multiply(Number(arr[0]),Number(arr[1])));
            }
        }
        else{
            if(equation.includes("/")){
                let arr = equation.split("/");
                if (arr[1] === ""){
                    return String(divide(Number(arr[0])));
                }
                return String(divide(Number(arr[0]),Number(arr[1])));
            }
        }
    }


}