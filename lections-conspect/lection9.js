/**
 Створити конструктор, для роботи з числом користувача "n" (за замовчуванням 6):

 метод визначення суми натуральних чисел до “n” (1+2+...+n); // 21
 метод визначення факторіалу з “n” (1*2*...*n); // 720
 метод зведення числа “n” у ступінь “m” (2^2 = 2*2, 2^3 = 2*2*2, 2^4 = 2*2*2*2)
 пошук "n" числа Фібоначчі * (0, 1, 1, 2, 3, 5, 8, 13, 21, 34) // 8

 Умови
 Число "n" більше або дорівнює нулю
 Якщо користувач вводить менше нуля, віддавати ‘Error!’ на всіх методах
 Число вводить користувач (за замовчуванням 6)
 Усі методи (крім ступеня) можна викликати з будь-яким числом "n".
 Але за умовчанням, те, що вводив користувач при ініціалізації
 */

function NumberOperations(n = 6) {
  this.n = n >= 0 ? n : 'Error!';

  this.sum = function(n = this.n) {
    if (n === 'Error!') return 'Error!';
    if (n === 0) return 0;
    return n + this.sum(n - 1);
  };

  this.factorial = function(n = this.n) {
    if (n === 'Error!') return 'Error!';
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  };

  this.power = function(m) {
    if (this.n === 'Error!' || m < 0) return 'Error!';
    if (m === 0) return 1;
    return this.n * this.power(m - 1);
  };

  this.fibonacci = function(n = this.n) {
    if (n === 'Error!') return 'Error!';
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  };
}

const numOps = new NumberOperations(6);

console.log('Метод визначення суми натуральних чисел до “n” (1+2+...+n): ' + numOps.sum());
console.log('Метод визначення факторіалу з “n”: ' + numOps.factorial());
console.log('Метод зведення числа “n” у ступінь “m”: ' + numOps.power(2));
console.log('Пошук "n" числа Фібоначчі: ' + numOps.fibonacci());

