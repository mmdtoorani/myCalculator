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
            spanInMonX.append(num.firstChild.textContent)
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
                res = division(spanInMonX.textContent, spanInMonY.textContent);
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
})

// implementation of clear button
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    spanInMonY.innerText = "";
    spanInMonOp.innerText = "";
    spanInMonX.innerText = "";
})

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
const radicalBtn = document.querySelector("#radical");

radicalBtn.addEventListener("click", () => {
    if (monitorBox.contains(spanInMonY) && spanInMonY.textContent !== "") {
        spanInMonY.innerText = squareRoot(spanInMonY.textContent)
    } else {
        spanInMonX.innerText = squareRoot(spanInMonX.textContent)
    }
})

//implementation of percentage
const percentBtn = document.querySelector("#prcnt");

percentBtn.addEventListener("click", () => {
    if (monitorBox.contains(spanInMonY) && spanInMonY.textContent !== "") {
        spanInMonY.innerText = percentage(spanInMonY.textContent)
    } else {
        spanInMonX.innerText = percentage(spanInMonX.textContent)
    }
})
