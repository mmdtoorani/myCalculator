const numbers = document.querySelectorAll(".num");
const monitorBox = document.querySelector(".monitor-box");
const spanInMonX = document.createElement('span');
const spanInMonOp = document.createElement('span');
const spanInMonY = document.createElement('span');

spanInMonX.id = 'span-in-monitor-x'
spanInMonOp.id = 'span-in-monitor-op'
spanInMonY.id = 'span-in-monitor-y'

// implementation of number buttons
Array.from(numbers).forEach(num => {
    monitorBox.appendChild(spanInMonX)
    num.addEventListener("click", () => {
        if (spanInMonOp.innerText === "") {
            if (monitorBox.contains(spanInMonY)) {
                spanInMonX.textContent = num.firstChild.textContent
                spanInMonY.remove()
            } else {
                spanInMonX.append(num.firstChild.textContent)
            }
        } else {
            monitorBox.appendChild(spanInMonY)
            spanInMonY.append(num.firstChild.textContent)
        }
    })
})

// implementation of point button
const point = document.querySelector("#point");
const pointLogic = () => {
    if (spanInMonOp.innerText === "") {
        if (spanInMonX.innerText === "") {
            spanInMonX.textContent = "0"
            spanInMonX.textContent += point.textContent
        } else {
            spanInMonX.textContent += point.textContent
        }

    } else {
        monitorBox.appendChild(spanInMonY)
        if (spanInMonY.innerText === "") {
            spanInMonY.textContent = "0"
            spanInMonY.textContent += point.textContent
        } else {
            spanInMonY.textContent += point.textContent
        }
    }
}
point.addEventListener("click", () => {
    pointLogic()
})

// implementation of operations
const operations = document.querySelectorAll(".opr")
const oprLogic = (opr) => {
    if (spanInMonOp.textContent === "") {
        if (spanInMonX.textContent !== "") {
            spanInMonOp.textContent += `${opr}`;
        } else {
            spanInMonX.textContent = "0"
            spanInMonOp.textContent += `${opr}`;
        }
    } else if (spanInMonY.textContent === "") {
        spanInMonOp.textContent = `${opr}`;
    }
}

Array.from(operations).forEach(operation => {
    monitorBox.appendChild(spanInMonOp)
    operation.addEventListener("click", () => {
        oprLogic(operation.textContent)
    })
})

// implementation of operations keypress
let codes = {
    "NumpadAdd": "+",
    "NumpadSubtract": "-",
    "NumpadMultiply": "×",
    "NumpadDivide": "÷"
}

// implementation of equal button
const equal = document.querySelector("#eql")
const equalFunc = () => {
    let res;
    switch (spanInMonOp.textContent) {
        case "+":
            res = addition(spanInMonX.textContent, spanInMonY.textContent);
            break;
        case "-":
            res = subtraction(spanInMonX.textContent, spanInMonY.textContent);
            break;
        case "×":
            res = multiplication(spanInMonX.textContent, spanInMonY.textContent);
            break;
        case "÷":
            if (toNum(spanInMonY.textContent) !== 0) {
                res = division(spanInMonX.textContent, spanInMonY.textContent);
            } else {
                spanInMonX.textContent = ""
                spanInMonOp.textContent = ""
                spanInMonY.textContent = ""
            }
            break;
        case "^":
            res = power(spanInMonX.textContent, spanInMonY.textContent);
            break;
    }
    if (spanInMonOp.textContent !== "") {
        spanInMonY.innerText = "";
        spanInMonOp.innerText = "";
        spanInMonX.innerText = res;
    }
    if (spanInMonX.innerText.length > 16) {
        spanInMonX.textContent = toScientific(spanInMonX.textContent)
    }
}
equal.addEventListener("click", equalFunc)

// implementation of clear button
const clear = document.querySelector("#clear");
const clearE = document.querySelector("#clre");
const clearMonitor = () => {
    spanInMonY.remove()
    spanInMonOp.innerText = "";
    spanInMonX.innerText = "";
}
const CE = (btn) => btn.addEventListener("click", clearMonitor)

CE(clear);
CE(clearE);

// implementation of backspace button and backspace key
const backSpaceKey = (span) => {
    return span.innerText = span.textContent.substring(0, span.textContent.length - 1);
}

const deleteGradually = () => {
    if (monitorBox.contains(spanInMonY) && spanInMonY.textContent !== "") {
        backSpaceKey(spanInMonY);

    } else {
        if (spanInMonOp.textContent !== "") {
            backSpaceKey(spanInMonOp);
        } else {
            backSpaceKey(spanInMonX);
        }
    }
}

const backspace = document.querySelector("#bkspc");

backspace.addEventListener("click", () => {
    deleteGradually()
})

// implementation of the keys of the numbers
const numAdd = (num) => {
    if (spanInMonOp.innerText === "") {
        if (monitorBox.contains(spanInMonY)) {
            spanInMonX.textContent = `${num}`
            spanInMonY.remove()
        } else {
            spanInMonX.textContent += `${num}`
        }
    } else {
        monitorBox.appendChild(spanInMonY)
        spanInMonY.textContent += `${num}`
    }
}

//implementation of square root
const spanRequire = (func) => {
    if (monitorBox.contains(spanInMonX) && spanInMonX.textContent !== "") {
        if (monitorBox.contains(spanInMonY) && spanInMonY.textContent !== "") {
            spanInMonY.innerText = func(spanInMonY.textContent)
        } else {
            spanInMonX.innerText = func(spanInMonX.textContent)
        }
    }
}

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
    for (let i = 0; i < 10; i++) {
        if (e.code === `Digit${i}` || e.code === `Numpad${i}`) {
            numAdd(i)
        }
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