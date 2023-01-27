// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.


const num1 = 30;
const num2 = 100;

function maiorNumero (a, b) {
    if (a > b) {
       return a;
    } else {
        return b;
    }
}

// console.log (maiorNumero(num1, num2));


// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const num3 = 200;

function maiorDeTodos (a, b, c) {
    if (a > b && a > c) {
        return a + ' é o maior de todos';
    } else if (b > a && b > c) {
        return b + ' é o maior de todos';
    } else if (c > a && c > b) {
        return c + ' é o maior de todos';        
    }
}

// console.log (maiorDeTodos(num1, num2, num3));



// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.


function positivoNegativo(parametro) {
    if (parametro > 0) {
        return 'positive';
    } else if (parametro < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

// console.log (positivoNegativo(0));


// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.



function angulosTriangulo (angulo1, angulo2, angulo3) {
    if (angulo1 + angulo2 + angulo3 == 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
        return 'true';
    } else if (angulo1 + angulo2 + angulo3 !== 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
        return 'false';
    } else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
        return 'erro'; 
    }
}

// console.log (angulosTriangulo(-20, 50, 80));







