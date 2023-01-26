let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

// console.log(fatorial);


// ERRADO:
// let word = 'tryber';
// for (let index = 0; index < word.length; index += 1) {
//     word [0] = word [6];
//     word [2] = word [5];
//     word [3] = word [4];
//     word [4] = word [3];
//     word [5] = word [2];
//     word [6] = word [1];
// }

// console.log(word);


let word = 'tryber';
let reverseWord = '';
for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

// console.log(reverseWord);


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array [0];
let menorPalavra = array [0];

for (index = 0; index <array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array [index];
    }
}

// console.log (maiorPalavra);

for (index = 0; index <array.length; index += 1) {
    if (array[index].length < maiorPalavra.length) {
        maiorPalavra = array [index];
    }
}
// console.log (menorPalavra);


let maiorNumeroPrimo = 0;

for (let numero = 2; numero <= 50; numero += 1) {
    let numeroPrimo = true;
    for (let numeroDivisor = 2; numeroDivisor < numero; numeroDivisor += 1) {
        if (numero % numeroDivisor === 0) {
            numeroPrimo = false;
        } 
    } 
    if (numeroPrimo) {
        maiorNumeroPrimo = numero;
    }
}
// console.log(maiorNumeroPrimo);


let n = 6;
let simbolo = "*";
let linha = '';

for (let index = 0; index < n; index += 1) {
    linha += simbolo;
}
for (let index = 0; index < n; index +=1) {
    console.log (linha);
}



