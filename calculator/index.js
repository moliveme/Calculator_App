let operationStackInfix = []

let displayText = ""

let tempOperatorsStack = []
let operationStackPostfix = []

// need more info to do this :(

function zero() {
    operationStackInfix.push(0)
    updateDisplay()
    console.log(operationStackInfix)
}

function one() {
    operationStackInfix.push(1)
    updateDisplay()
}

function two() {
    operationStackInfix.push(2)
    updateDisplay()
}

function three() {
    operationStackInfix.push(3)
    updateDisplay()
}

function four() {
    operationStackInfix.push(4)
    updateDisplay()
}

function five() {
    operationStackInfix.push(5)
    updateDisplay()
}

function six() {
    operationStackInfix.push(6)
    updateDisplay()
}

function seven() {
    operationStackInfix.push(7)
    updateDisplay()
}

function eight() {
    operationStackInfix.push(8)
    updateDisplay()
}

function nine() {
    operationStackInfix.push(9)
    updateDisplay()
}

function add() {
    operationStackInfix.push("+")
    updateDisplay()
}

function subtract() {
    operationStackInfix.push("-")
    updateDisplay()
}

function multiply() {
    operationStackInfix.push("x")
    updateDisplay()
}

function divide() {
    operationStackInfix.push("%")
    updateDisplay()
}

function go() {
    
    // 1. handle numbers that have more than 1 digit

    // 1.1 stringify infix stack
    console.log(operationStackInfix)

    for (let i = 0; i < operationStackInfix.length; i++) {

        operationStackInfix[i] = operationStackInfix[i].toString()

    }

    displayText = operationStackInfix.reduce((a, b) => (a + b + ""))
    console.log(displayText)

    // 1.2 create regex to split by operators, update infix stack
    var expr = new RegExp("(?<=[-+x%])|(?=[-+x%])")  
    operationStackInfix = displayText.split(expr)
    console.log(operationStackInfix)

    // 1.3 convert all type string numbers to type number numbers

    let operationsStr = "-+x%"

    for (let i = 0; i < operationStackInfix.length; i++) {

        if (!operationsStr.includes(operationStackInfix[i])) {

            operationStackInfix[i] = +operationStackInfix[i]

        }

    }
    console.log(operationStackInfix)

    // 2. assign precedence to operators using dictionary
    var precedenceDict = {
        "x": 2,
        "%": 2,
        "+": 1,
        "-": 1
    };

    // 3. convert infix notation to postfix, meanwhile evaluating expn

    let currentEl

    for (let i = 0; i < operationStackInfix.length; i++) {

        // 3.1 if number, add to postfix stack

        currentEl = operationStackInfix[i]

        if (typeof currentEl === "number") {
            operationStackPostfix.push(currentEl)

        // 3.1 ...else, add to operators stack/evaluate
        } else {

            // 3.1.2 if currentEl is first operator to go on stack
            if (tempOperatorsStack.length === 0) {
                tempOperatorsStack[0] = currentEl

            // 3.1.2 else    
            } else {

                let tempOperator = ""
                let num1, num2, result

                while (true) {

                    prevOperator = tempOperatorsStack[tempOperatorsStack.length - 1]
                    if (precedenceDict[currentEl] > precedenceDict[prevOperator]) {
                        tempOperatorsStack.push(currentEl)
                        break
                    } 

                    tempOperator = tempOperatorsStack.pop()

                    // pop last two numbers, operate on them using tempOperator,
                    num1 = operationStackPostfix.pop()
                    num2 = operationStackPostfix.pop()

                    if (tempOperator === "+") {
                        result = num2 + num1
                    } else if (tempOperator === "-") {
                        result = num2 - num1
                    } else if (tempOperator === "x") {
                        result = num2 * num1
                    } else if (tempOperator === "%") {
                        result = num2 / num1
                    }

                    // push result onto postfix stack
                    operationStackPostfix.push(result)
                    
                }

            }

        }

        console.log(operationStackPostfix)
        console.log(tempOperatorsStack)

    }

    // for remaining operators in tempOp stack

    for (let i = 0; i < tempOperatorsStack.length; i++) {

        tempOperator = tempOperatorsStack.pop()

        // pop last two numbers, operate on them using tempOperator,
        num1 = operationStackPostfix.pop()
        num2 = operationStackPostfix.pop()

        if (tempOperator === "+") {
            result = num2 + num1
        } else if (tempOperator === "-") {
            result = num2 - num1
        } else if (tempOperator === "x") {
            result = num2 * num1
        } else if (tempOperator === "%") {
            result = num2 / num1
        }

        // push result onto postfix stack
        operationStackPostfix.push(result)

    }

    console.log("result: " + operationStackPostfix)

}    

function backspace() {
    operationStackInfix.pop()
    updateDisplay()
}

function updateDisplay() {
     
    if (operationStackInfix.length > 0) {

        displayText = operationStackInfix.reduce((a, b) => (a + " " + b + " "))

    } else {

        displayText = ""

    }
    
    document.getElementById("display").innerText = displayText
}