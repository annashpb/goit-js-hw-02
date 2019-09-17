"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  if (input === null) {
      break;
  }
  else if (Number.isNaN(parseFloat(input))) {
      alert(`Было введено не число, попробуйте еще раз`);
      input = 0;
  }
  else {
    numbers.push(input);
  }
  total += parseFloat(input);
}

console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
