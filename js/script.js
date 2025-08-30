//Get elements
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";//what types in

buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        let value = btn.textContent;

        //Clear C button
        if(value==='C'){
            currentInput="";
            display.textContent="0";
        }

        //Delete button (backspace)
        else if(value==='Del'){
            currentInput=currentInput.slice(0,-1);
            display.textContent=currentInput || "0";
        }

        //Equal button
        else if(value==="="){
            try{
                //replace % with /100 for percentage
                let expression=currentInput.replace(/%/g, "/100");
                let result = eval(expression);
                display.textContent=result;
                currentInput=result.toString(); //allow chaining
            } catch{
                display.textContent="Error";
                currentInput="";
            }
        }

        //Pi button
        else if(value==="π"){
            currentInput+=Math.PI; //Inserts 3,14159...
            display.textContent=currentInput;
        }

        //Any other button (numbers/operators)
        else{
            currentInput+=value;
            display.textContent=currentInput;
        }
    });
});