// const a = 12;

// const b = 8;

// const c = 4;

// console.log (a+b);

// console.log (a-b);

// console.log (a*b);

// console.log (a/b);

// console.log (a%b);


// if (a > b) {
//     console.log (a);
// } else if (b > a) {
//     console.log (b)
// }


// if (a > b && a > c) {
//     console.log (a)
// } else if (b > a && b > c) {
//     console.log (b)
// } else if (c > a && c > b) {
//     console.log (c)
// }


// let numero = -3;

// if (numero > 0) {
//     console.log ('positivo')
// } else if (numero < 0) {
//     console.log ('negativo')
// } else {
//     console.log (0)
// }


// const angulo1 = 20;
// const angulo2 = 60;
// const angulo3 = 90;

// if (angulo1 + angulo2 + angulo3 === 180 && angulo1 >0 && angulo2 > 0 && angulo3 > 0) {
//     console.log (true);
// } else {
//     console.log (false);
// }


// let pecaXadrez = 'REI';

// switch (pecaXadrez.toLowerCase()) {
//     case 'rei':
//     console.log ('Qualquer direção, apenas uma casa por vez')
//     break;

//     case 'dama':
//     console.log ('Qualquer direção, quantas casas quiser')
//     break;

//     case 'torre':
//     console.log ('Linha reta, quantas casas quiser')
//     break;

//     case 'bispo':
//     console.log ('Diagonal, quantas casas quiser')
//     break;

//     case 'cavalo':
//     console.log ('Move em "L", duas na vertical/horizontal e uma na horizontal/vertical')
//     break;

//     case 'peão':
//     console.log ('Uma casa pra frente, não pode retroceder')
//     break;
// }


// let porcentagem = 120;

// if (porcentagem >= 90 && porcentagem <= 100) {
//     console.log ('A');
// } else if (porcentagem >= 80 && porcentagem <=90) {
//     console.log ('B');
// } else if (porcentagem >= 70 && porcentagem <= 80) {
//     console.log ('C');
// } else if (porcentagem >= 60 && porcentagem <= 70) {
//     console.log ('D');
// } else if (porcentagem >= 50 && porcentagem <= 60) {
//     console.log ('E');
// } else if (porcentagem < 50) {
//     console.log ('F');
// } else if (porcentagem < 0 || porcentagem > 100) {
//     console.log ('Erro');
// }


// const num = 1;
// const num2 = 5;
// const num3 = 17;

// if (num % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     console.log (true)
// } else {
//     console.log (false)
// }


// const num = 2;
// const num2 = 15;
// const num3 = 18;

// if (num % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log (true)
// } else {
//     console.log (false)
// }


// const custoProduto = 133;
// const vendaProduto = -2;

// if (vendaProduto >= 0 && custoProduto >=0) {
//     const custoTotal = custoProduto * 1.2;
//     const lucroTotal = (vendaProduto -custoTotal) * 1000;
//     console.log (lucroTotal);
// } else {
//     console.log ('Error, os valores não podem ser negativos')
// }


let salarioBruto = 5000;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    let salarioBase = salarioBruto * 0.92
    if (salarioBase <= 1903.98) {
        salarioLiquido === salarioBase;
    } 
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    let salarioBase = salarioBruto * 0.91
    if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        salarioLiquido = salarioBase - ((salarioBase*0.075) - 142.80);
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        salarioLiquido = salarioBase -((salarioBase*0.15) - 354.80);
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido = salarioBase -((salarioBase*0.225) - 636.13);
    } else if (salarioBase > 4664.68) {
        salarioLiquido = salarioBase -((salarioBase*0.275) - 869.36);
    }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    let salarioBase = salarioBruto * 0.89
    if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        salarioLiquido = salarioBase - ((salarioBase*0.075) - 142.80);
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        salarioLiquido = salarioBase -((salarioBase*0.15) - 354.80);
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido = salarioBase -((salarioBase*0.225) - 636.13);
    } else if (salarioBase > 4664.68) {
        salarioLiquido = salarioBase -((salarioBase*0.275) - 869.36);
    }
} else if (salarioBruto > 5189.82) {
    let salarioBase = salarioBruto - 570.88
    if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido = salarioBase -((salarioBase*0.225) - 636.13);
    } else if (salarioBase > 4664.68) {
        salarioLiquido = salarioBase -((salarioBase*0.275) - 869.36);
    }
}

console.log (salarioLiquido);









