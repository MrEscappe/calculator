// pegar o numero1 e guardar em uma variavel

// pegar o numero 2 e guardar em outra variavel

// pegar o operator e guardar em um variavel

// ao apertar o sinal de igual, pegar o numero 1 o operador
// e o numero2 e fazer a conta referente ao operador

// e exibir o resultado na tela


const screenText = document.querySelector(".screen-text")
const keys = document.querySelector("#buttons")
let number1 = ""
let number2 = ""
let operator = ""
let result = ""
let result2 = result
let dot = ""
let dot2 = ""

keys.addEventListener("click", (e) =>{    
    if(event.currentTarget === event.target) return;   
    
    const key = e.target    
    const keyValue = key.textContent    
    const screenTextValue = screenText.textContent   
    if(key.classList.contains("number")){
        if(!number1 || !operator){
            if(screenTextValue === "0"){
                number1 = keyValue            
                screenText.textContent = keyValue
            } else {
                number1 += keyValue
                screenText.textContent += keyValue
                
            }
        } else if (!result) {
            number2 += keyValue
            screenText.textContent += keyValue
        }        
        
    }
    if (result) {
        if (key.classList.contains("operator")) {
            operator = keyValue
            number1 = result
            number2 = ""
            dot = ""
            dot2 = ""
            screenText.textContent += keyValue
        }
        if (key.classList.contains("number")) {
            if (result) {                               
                number2 += keyValue                
                screenText.textContent += keyValue
            }
        }
    }

    if(key.classList.contains("operator")){
        if(!operator){
            operator = keyValue
            screenText.textContent += keyValue
        }            
    }

    if (keyValue === ".") {
        if(dot === "." && dot2 === ".") return
        if(!dot){
            number1 += keyValue
            dot = keyValue
            screenText.textContent += keyValue
        } else if (!dot2 ) {            
            dot2 = keyValue
            number2 += keyValue
            screenText.textContent += keyValue
        }
        
    }
    
    
    if(keyValue === "="){
        operate()
    }

    if(keyValue === "AC"){
        reset()
    }

})

function operate() {
    if(operator === "+"){
        const add = Number(number1) + Number(number2)
        result = add;
        screenText.textContent = result;    
    }
    if(operator === "-"){
        const subtract = Number(number1) - Number(number2)
        result = subtract;
        screenText.textContent = result
    }
    if(operator === "×"){
        const multiply = Number(number1) * Number(number2)
        result = multiply;
        screenText.textContent = result
    }
    if(operator === "÷"){
        const divide = Number(number1) / Number(number2)
        result = divide;
        screenText.textContent = result
    }

    if (number2 === "0" && operator === "÷") {
        screenText.textContent = "ERROR!"
    }
        

}

function reset(){
    screenText.textContent = 0
    result = ""
    number1 = ""
    number2 = ""
    operator = ""
    dot = ""
    dot2 = ""
}





