const numbers = document.querySelectorAll(".num");
const monitorBox = document.querySelector(".monitor-box");
const spanInMonX = document.createElement('span');
const spanInMonOp = document.createElement('span');
const spanInMonY = document.createElement('span');

spanInMonX.id = 'span-in-monitor-x'
spanInMonOp.id = 'span-in-monitor-op'
spanInMonY.id = 'span-in-monitor-y'

const isSpanXEmpty = () => {
    return spanInMonX.textContent === ""
}

const isSpanOpEmpty = () => {
    return spanInMonOp.textContent === ""
}

const isSpanYEmpty = () => {
    return spanInMonY.textContent === ""
}

const isLengthOfMonitorValid = () => {
    return spanInMonX.textContent.length + spanInMonOp.textContent.length + spanInMonY.textContent.length < 16;
}

const numAdd = (num) => {
    if (isSpanOpEmpty()) {
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

const pointLogicValidation = (cond, span) => {
    if (cond) {
        span.textContent = "0"
        span.textContent += point.textContent
    } else {
        span.textContent += point.textContent
    }
}

const pointLogic = () => {
    if (isSpanOpEmpty()) {
        pointLogicValidation(isSpanXEmpty, spanInMonX)
    } else {
        monitorBox.appendChild(spanInMonY)
        pointLogicValidation(isSpanYEmpty, spanInMonY)
    }
}

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

const clearMonitor = () => {
    spanInMonY.remove()
    spanInMonOp.innerText = "";
    spanInMonX.innerText = "";
}
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

const spanRequire = (func) => {
    if (monitorBox.contains(spanInMonX) && spanInMonX.textContent !== "") {
        if (monitorBox.contains(spanInMonY) && spanInMonY.textContent !== "") {
            spanInMonY.innerText = func(spanInMonY.textContent)
        } else {
            spanInMonX.innerText = func(spanInMonX.textContent)
        }
    }
}