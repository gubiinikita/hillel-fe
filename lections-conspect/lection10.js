/** Practice 1 */
const user = {
  name: 'Joe',
  age: 30,
  email: 'joe@exe.ua',
  isAdmin: true,
  getInfo: function() {
    return `User: ${this.name}, Age: ${this.age}, email: ${this.email}, Admin: ${this.isAdmin ? 'yes' : 'no'}`
  }
};

console.log(user.getInfo());

/** Practice 2 */
// function sumInput() {
//   let numbers = [];
//   let sum = 0;
//   while (true) {
//     let value = prompt('Input number: ', 0);
//     if (value === '' || value === null || isNaN(value)) break;
//     numbers.push(+value);
//   }
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// alert('Sum of inputs: ' + sumInput());
