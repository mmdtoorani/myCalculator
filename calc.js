const numbers = document.querySelectorAll(".num");
const monitorBox = document.querySelector(".monitor-box");
const spanInMonX = document.createElement('span');
const spanInMonOp = document.createElement('span');
const spanInMonY = document.createElement('span');


spanInMonX.id = 'span-in-monitor-x'
spanInMonOp.id = 'span-in-monitor-op'
spanInMonY.id = 'span-in-monitor-y'

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

// implementation of operations
const operations = document.querySelectorAll(".opr")

Array.from(operations).forEach(operation => {
    monitorBox.appendChild(spanInMonOp)

    operation.addEventListener("click", () => {
        if (spanInMonX.textContent !== "") {
            spanInMonOp.append(operation.textContent)
        } else {
            spanInMonX.textContent = "0"
            spanInMonOp.append(operation.textContent)
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
    spanInMonY.innerText = "";
    spanInMonOp.innerText = "";
    spanInMonX.innerText = res;

})

// implementation of clear button
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    spanInMonY.innerText = "";
    spanInMonOp.innerText = "";
    spanInMonX.innerText = "";
})