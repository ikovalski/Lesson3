const startNum: number = 1;
const endNum: number = 20;

let result: string = "0";
let i: number = startNum;

//Написать программу, которая выводит сумму всех чисел от 1 до 20

while (i <= endNum) {
    result = String(Number(result) + i);
    i++;
}

console.log(result);
