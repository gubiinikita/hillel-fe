/**
 * Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
 * Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
 * ladder.up();
 * ladder.up();
 * ladder.down();
 * ladder.showStep(); // 1
 * Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
 * ladder.up().up().down().showStep(); // 1
 * Такий підхід широко використовується в бібліотеках JavaScript.
 */

let ladder = {
  step: 0,

  up: function () {
    this.step++;
    console.log(`Up: step = ${this.step}`);
    return this;
  },

  down: function () {
    this.step--;
    console.log(`Down: step = ${this.step}`);
    return this;
  },

  showStep: function () {
    console.log(`Current step = ${this.step}`);
    return this;
  }
};

ladder.up().up().down().showStep();
