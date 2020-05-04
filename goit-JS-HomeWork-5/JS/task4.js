"use strict";

//Задание 4
//Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
//Добавь классу следующий функционал:
//Геттер value - возвращает текущее значение поля _value
//Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
//Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
//Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder._value); // '.^'

builder.preppend("^");
console.log(builder._value); // '^.^'

builder.pad("=");
console.log(builder._value); // '=^.^='

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get name() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  preppend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
  }
}