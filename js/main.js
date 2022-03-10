class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }

    clear() {
        this.currentTextEl = ""
        this.previousTextEl = ""
        this.operator = undefined
    }

    delete() {
        this.currentTextEl = this.currentTextEl.toString().slice(0, -1)
    }

    addNumber(number) {
        if (number === "." && this.currentTextEl.includes(".")) return
        this.currentTextEl = this.currentTextEl.toString() + number.toString()
    }

    chooseOperator(operator) {
        if (this.currentTextEl === "") return
        if (this.previousTextEl !== "") {
            this.calculate()
        }
        this.operator = operator
        this.previousTextEl = this.currentTextEl
        this.currentTextEl = ""
    }

    calculate() {
        let result 
        const previous = parseInt(this.previousTextEl)
        const current = parseInt(this.currentTextEl)
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operator) {
            case "+":
                result = previous + current
                break;
            case "-":
                result = previous - current
                break
            case "×":
                result = previous * current
                break
            case "÷":
                result = previous / current
                break
            default:
                return
        }
        this.currentTextEl = result
        this.operator = undefined
        this.previousTextEl = ""
    }

    update() {
        this.currentText.textContent = this.currentTextEl
        if (this.operator != null) {
            this.previousText.textContent =
                `${this.previousTextEl} ${this.operator}`  
        }              
    }
} 

const numberKeys = document.querySelectorAll(".number")
const operatorKeys = document.querySelectorAll(".operator")
const decimalKey = document.querySelector(".decimal")
const deleteKey = document.querySelector(".delete")
const clearKey = document.querySelector(".clear")
const equalKey = document.querySelector(".equal")
const currentText = document.querySelector(".current-text")
const previousText = document.querySelector(".previous-text")

const calculator = new Calculator(previousText, currentText)

numberKeys.forEach(button => {
    button.addEventListener("click", () => {
        calculator.addNumber(button.textContent)
        calculator.update()
    })
})

operatorKeys.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperator(button.textContent)
        calculator.update()
    })
})

equalKey.addEventListener("click", button => {
    calculator.calculate()
    calculator.update()
})

clearKey.addEventListener("click", button => {
    calculator.clear()
    calculator.update()
})

deleteKey.addEventListener("click", button => {
    calculator.delete()
    calculator.update()
})
