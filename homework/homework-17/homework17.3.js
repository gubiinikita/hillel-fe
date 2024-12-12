/**
 Створіть клас BankAccount, який буде представляти банківський рахунок.
 Додайте властивість балансу та методи для внесення та зняття грошей.
 */
class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.error('Deposit amount should be greater than 0');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else if (amount > this.balance) {
      console.error('Not enough money');
    } else {
      console.error('Withdraw amount should be greater than 0');
    }
  }

  getBalance() {
    return `Your current balance: ${this.balance}`;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300