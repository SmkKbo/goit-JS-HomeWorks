"use strict";

const total = 100;
let ordered = 50;

if (total > ordered && total === 100) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров!");
}

ordered = 20;

if (total > ordered && total === 100) {
  console.log("Заказ оформлен, с вами свяжется менеджер ");
} else {
  console.log("На складе недостаточно товаров!");
}

ordered = 80;

if (total > ordered && total === 100) {
  console.log("Заказ оформлен, с вами свяжется менеджер ");
} else {
  console.log("На складе недостаточно товаров!");
}

ordered = 130;

if (total < ordered && total === 100) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров!");
}