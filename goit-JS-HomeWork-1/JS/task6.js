"use strict";

let input;
let total = 0;
// let userRequest;


while (true) {
  input = prompt("Введите число!");

  if (input === null) {
    alert("Отменено пользователем :(");
    break;
  }
    input = Number(input);
   const notANamber = Number.isNaN(input);

    if (notANamber) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    } 
      total += input;
    }

alert(`Общая сумма чисел равна ${total}`);