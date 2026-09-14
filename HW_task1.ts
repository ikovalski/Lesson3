/* Напишите программу, которая выводит убывающую арифметическую прогрессию начиная от 100 и до 0.
Например:
100
99 (100 - 1)
97 (99 - 2)
94 (97 - 3)
90 (94 - 4)
…
9
0

If (count < 0) {
 console.log(0)
 break;
}

*все переменные и условия должны быть в одной строчке цикла for

git branch --set-upstream-to=origin/main */

for (let count = 100, step = 1; count >= 0; count -= step, step++) {
    console.log(count);
    if (count - step < 0) {
        console.log(0);
        break;
    }
}
