/**
 Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій:
 додавання, віднімання, множення та ділення.
 */
class Calculator {
  add(a, b) {
    return `Add result: ${a + b}`;
  }

  subtract(a, b) {
    return `Subtract result: ${a - b}`;
  }

  multiply(a, b) {
    return `Multiply result: ${a * b}`;
  }

  divide(a, b) {
    if (b !== 0) {
      return `Divide result: ${a / b}`;
    } else {
      console.log('Dividing to zero is impossible!')
    }
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4