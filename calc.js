let numbers = document.querySelectorAll(".num")
let monitorBox = document.querySelector(".monitor-box")
let spanInMon = document.createElement('span')
spanInMon.id = 'span-in-monitor'
Array.from(numbers).forEach(num => {
    monitorBox.appendChild(spanInMon)
    num.addEventListener("click", e => {
        spanInMon.append(num.firstChild.textContent)
    })
})