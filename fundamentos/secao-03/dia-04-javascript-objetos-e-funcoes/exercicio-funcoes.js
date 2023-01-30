// Exercicio 1

function adition (a, b) {
    return a + b;
}

// console.log (adition(4, 2));


// Exercicio 2

function subtraction (a, b) {
    return a - b;
}

// console.log (subtraction(80, 13));


// Exercicio 3

function multiplication (a, b) {
    return a * b;
}

// console.log (multiplication(8, 9));


// Exercicio 4

function division (a, b) {
    return a / b;
}

// console.log (division(58, 4));


// Exercicio 5

function module (a, b) {
    return a % b;
}

// console.log(module(78, 4));


// Exercicio 6

const num1 = 30;
const num2 = 150;

function maiorNumero (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// console.log (maiorNumero(num1, num2));


// Exercicio 7

const n1 = 44;
const n2 = 58;
const n3 = 22;

function maiorDeTodos (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

// console.log (maiorDeTodos(n1, n2, n3));


// Exercicio 8

function positivoNegativo (valor) {
    if (valor > 0) {
        return 'positivo'
    } else if (valor < 0) {
        return 'negativo'
    } else {
        return 'zero'
    }
}

// console.log (positivoNegativo(-5));


// Exercicio 9

function angulosTriangulo (a1, a2, a3) {
    if (a1 + a2 + a3 === 180 && a1 > 0 && a2 > 0 && a3 > 0) {
        return 'true, são ângulos de um triângulo';
    } else if (a1 + a2 + a3 !== 180 && a1 > 0 && a2 > 0 && a3 > 0) {
        return 'false, não são ângulos de um triângulo'
    } else if (a1 < 0 || a2 < 0 || a3 < 0) {
        return 'erro, angulos inválidos'
    }
}

// console.log (angulosTriangulo(30, 45, 90));
