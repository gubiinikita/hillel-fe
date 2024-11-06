/** Написати метод для повернення рядка у форматі "html - 5" */
//  let skill = {
//   name: 'html',
//   level: 5,
//   something: function() {
//     return `${this.name} ${this.level}`
//   }
// }
//
// console.log(skill.something());

/** Створити конструктор "Калькулятор". Який отримуватиме в момент створення 2 числа.
 Конструктор повинен мати метод:
 getPlus
 getMinus
 На основі конструктора створити 2 объекты з можливістю отримання результатів складання чисел, та значень ціх чисел */

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;

  this.getPlus = function() {
    return this.num1 + this.num2;
  };

  this.getMinus = function() {
    return this.num1 - this.num2;
  };

  this.getNumbers = function() {
    return { num1: this.num1, num2: this.num2 };
  };
}

const calculator1 = new Calculator(5, 3);
const calculator2 = new Calculator(10, 7);

console.log("Calculator1 Plus:", calculator1.getPlus());
console.log("Calculator2 Plus:", calculator2.getPlus());

console.log("Calculator1 Numbers:", calculator1.getNumbers());
console.log("Calculator2 Numbers:", calculator2.getNumbers());

console.log("Calculator1 Minus:", calculator1.getMinus());
console.log("Calculator2 Minus:", calculator2.getMinus());

