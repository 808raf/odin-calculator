const add = (int1, int2) => {
    return int1 + int2
}

const subtract = (int1, int2) => {
    return int1 - int2
}

const multipy = (int1, int2) => {
    return int1 * int2
}

const divide = (int1, int2) => {
    return int1 / int2
}

const operate = (sign, int1, int2) => {
    switch (sign) {
        case "-":
            subtract(int1, int2);
            break;
        case "+":
            add(int1, int2);
            break;
        case "X":
            multipy(int1, int2);
            break;
        case "%":
            divide(int1, int2);
            break;
        default:
            break;
    }
}

const firstNumber = 0;
const secondNumber = 0;
const operator = "";