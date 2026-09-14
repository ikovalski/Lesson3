//Написать программу, которая проверяет, если
// число четное до выводит "чет", в ином случае
// выводит "нечет". Числа в диапазоне от 1 до 20.
//Одно решение с помощью цикла for, другое - while

const endN: number = 20;

console.log("result of the FOR cycle: ");
for (let i = 1; i <= endN; i++) {
    if (i % 2 === 0) console.log(`${i} - чет`);
    else console.log(`${i} - нечет`);
}

console.log("result of the WHILE cycle: ");
let i: number = 1;
while (i <= endN) {
    if (i % 2 === 0) console.log(`${i} - чет`);
    else console.log(`${i} - нечет`);
    i++;
}
