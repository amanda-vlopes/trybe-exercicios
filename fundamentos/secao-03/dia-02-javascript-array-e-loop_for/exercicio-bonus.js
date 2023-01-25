let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplicados = [];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//         if (numbers[index] < numbers[index2]) {
//             let position = numbers [index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = position
//         }
//     }
// } console.log (numbers);


// for (let index = 1; index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//         if (numbers[index] > numbers[index2]) {
//             let position = numbers [index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = position
//         }
//     }
// } console.log (numbers);


// ERRADO:
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 +=1) {
//         if (index2 < numbers.length) {
//             numbersMultiplicados.push(numbers[index]*numbers[index2]);
//         } else {
//             numbersMultiplicados.push(numbers[index]*2)
//         }
//     }
// }
// console.log(numbersMultiplicados);



for (let index = 0; index < numbers.length; index += 1) {
        if (index + 1 < numbers.length) {
            numbersMultiplicados.push(numbers[index]*numbers[index + 1]);
        } else {
            numbersMultiplicados.push(numbers[index]*2)
        }
    }
console.log(numbersMultiplicados);