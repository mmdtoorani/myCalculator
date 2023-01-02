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

point.addEventListener("click", () => {
    if (spanInMonOp.innerText === "") {
        if (spanInMonX.innerText === "") {
            spanInMonX.textContent = "0"
            spanInMonX.append(point.textContent)
        } else {
            spanInMonX.append(point.textContent)
        }

    } else {
        monitorBox.appendChild(spanInMonY)
        if (spanInMonY.innerText === "") {
            spanInMonY.textContent = "0"
            spanInMonY.append(point.textContent)
        } else {
            spanInMonY.append(point.textContent)
        }
    }
})

// implementation of operations
const operations = document.querySelectorAll(".opr")

Array.from(operations).forEach(operation => {
    monitorBox.appendChild(spanInMonOp)

    operation.addEventListener("click", () => {
        if (spanInMonOp.textContent === "") {
            if (spanInMonX.textContent !== "") {
                spanInMonOp.append(operation.textContent)
            } else {
                spanInMonX.textContent = "0"
                spanInMonOp.append(operation.textContent)
            }
        } else if (spanInMonY.textContent === "") {
            spanInMonOp.textContent = operation.textContent
        }
    })

})

// implementation of equal button
const equal = document.querySelector("#eql")

equal.addEventListener("click", () => {
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
    console.log(spanInMonX.innerText.length)
    if (spanInMonX.innerText.length > 16) {
        spanInMonX.textContent = toScientific(spanInMonX.textContent)
    }
})

// implementation of clear button
const clear = document.querySelector("#clear");
const clearE = document.querySelector("#clre");
const CE = (btn) => {
    btn.addEventListener("click", () => {
        spanInMonY.remove()
        spanInMonOp.innerText = "";
        spanInMonX.innerText = "";
    })
}
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

document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        deleteGradually()
    }
})

const backspace = document.querySelector("#bkspc");

backspace.addEventListener("click", () => {
    deleteGradually()
})

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

//implementation of reverse
const negateBtn = document.querySelector("#negate");

negateBtn.addEventListener("click", () => {
    spanRequire(negate)
})
