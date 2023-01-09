// implementation of number buttons
Array.from(numbers).forEach(num => {
    if (isLengthOfMonitorValid()) {
        monitorBox.appendChild(spanInMonX)
        num.addEventListener("click", () => {
            numAdd(num.firstChild.textContent)
        })
    }
})

// implementation of point button
const point = document.querySelector("#point");
point.addEventListener("click", () => {
    pointLogic()
})

// implementation of operations
const operations = document.querySelectorAll(".opr")
Array.from(operations).forEach(operation => {
    monitorBox.appendChild(spanInMonOp)
    operation.addEventListener("click", () => {
        oprLogic(operation.textContent)
    })
})

// implementation of equal button
const equal = document.querySelector("#eql")
equal.addEventListener("click", equalFunc)

// implementation of clear button
const clear = document.querySelector("#clear");
const clearE = document.querySelector("#clre");
const CE = (btn) => btn.addEventListener("click", clearMonitor)

CE(clear);
CE(clearE);

// implementation of backspace button
const backspace = document.querySelector("#bkspc");
backspace.addEventListener("click", () => {
    deleteGradually()
})

//implementation of square root
const radicalBtn = document.querySelector("#radical");
radicalBtn.addEventListener("click", () => {
    spanRequire(squareRoot)
})

//implementation of percentage
const percentBtn = document.querySelector("#prcnt");

percentBtn.addEventListener("click", () => {
    spanRequire(percentage)
})

//implementation of reverse
const reverseBtn = document.querySelector("#onx");

reverseBtn.addEventListener("click", () => {
    spanRequire(reverse)
})

//implementation of negate
const negateBtn = document.querySelector("#negate");

negateBtn.addEventListener("click", () => {
    spanRequire(negate)
})

// implementation of keypress
document.addEventListener("keydown", (e) => {
    if (isLengthOfMonitorValid()) {
        for (let i = 0; i < 10; i++) {
            if (e.code === `Digit${i}` || e.code === `Numpad${i}`) {
                numAdd(i)
            }
        }
    }
    let codes = {
        "NumpadAdd": "+",
        "NumpadSubtract": "-",
        "NumpadMultiply": "×",
        "NumpadDivide": "÷"
    }
    for (let code in codes) {
        if (e.code === code) {
            oprLogic(codes[code])
        }
    }
    if (e.code === "NumpadDecimal") {
        pointLogic()
    }
    if (e.key === "Enter") {
        equalFunc()
    }
    if (e.key === "Backspace") {
        deleteGradually()
    }
    if (e.key === "Escape") {
        clearMonitor()
    }
});