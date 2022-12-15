const toNum = (s) => {
    return parseFloat(s)
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
    // console.log(toNum(x) ** toNum(y))
    return toNum(x) ** toNum(y)
}

const squareRoot = (x) => {
    return Math.sqrt(toNum(x))
}