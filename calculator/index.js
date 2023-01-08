let operationStack = []

let displayText = ""

// need more info to do this :(

function zero() {
    operationStack.push(0)
    updateDisplay()
    console.log(operationStack)
}

function one() {
    operationStack.push(1)
    updateDisplay()
}

function two() {
    operationStack.push(2)
    updateDisplay()
}

function three() {
    operationStack.push(3)
    updateDisplay()
}

function four() {
    operationStack.push(4)
    updateDisplay()
}

function five() {
    operationStack.push(5)
    updateDisplay()
}

function six() {
    operationStack.push(6)
    updateDisplay()
}

function seven() {
    operationStack.push(7)
    updateDisplay()
}

function eight() {
    operationStack.push(8)
    updateDisplay()
}

function nine() {
    operationStack.push(9)
    updateDisplay()
}

function add() {
    operationStack.push("+")
    updateDisplay()
}

function subtract() {
    operationStack.push("-")
    updateDisplay()
}

function multiply() {
    operationStack.push("x")
    updateDisplay()
}

function divide() {
    operationStack.push("%")
    updateDisplay()
}

function go() {
    // assuming only single digit values

    // figure RPN

}    

function backspace() {
    operationStack.pop()
    updateDisplay()
}

function updateDisplay() {
     
    if (operationStack.length > 0) {
        displayText = operationStack.reduce((a, b) => (a + " " + b + " "))
    } else {
        displayText = ""
    }
    
    document.getElementById("display").innerText = displayText
}