"use strict";

let input;
const numbers = [];
let total = 0;

for (let i = 0; ;i += 1) {
  input = prompt("Введите число");
  numbers[i] = input;
  if (input === null) {
    numbers.pop();
    break;
  }
  if (Number.isNaN(parseFloat(input))) {
    alert(`Было введено не число, попробуйте еще раз`);
    numbers.splice(i, 1);
    i -= 1;   
    input = 0;
  }  
  total += parseFloat(input);
}

console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);