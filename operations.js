const toNum = (s) => {
    return parseFloat(s)
}

const toScientific = (n) => {
    let num = toNum(n)
    return num.toExponential()
}

const addition = (x, y) => {
    return toNum(x) + toNum(y)
}

const subtraction = (x, y) => {
    return toNum(x) - toNum(y)
}

const multiplication = (x, y) => {
    return toNum(x) * toNum(y)
}

const division = (x, y) => {
    return toNum(x) / toNum(y)
}

const power = (x, y) => {
    return toNum(x) ** toNum(y)
}

const squareRoot = (x) => {
    return Math.sqrt(toNum(x))
}

const percentage = (x) => {
    return toNum(x) / 100
}

const reverse = (x) => {
    return 1 / toNum(x)
}

const negate = (x) => {
    return toNum(x) * (-1)
}
