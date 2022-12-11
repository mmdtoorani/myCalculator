const numbers = document.querySelectorAll(".num")
const monitorBox = document.querySelector(".monitor-box")
const spanInMonX = document.createElement('span')
const spanInMonOp = document.createElement('span')
const spanInMonY = document.createElement('span')

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

const operations = document.querySelectorAll(".opr")

Array.from(operations).forEach(operation => {
    monitorBox.appendChild(spanInMonOp)
    operation.addEventListener("click", () => {
        spanInMonOp.append(operation.textContent)
    })
})