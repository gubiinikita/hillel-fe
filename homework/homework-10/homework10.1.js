/**
 * Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
 * Створіть метод об'єкту для отримання та відображення цих даних.
 */

const user = {
  name: 'Mykyta',
  email: 'mykyta.h@gmail.com',
  age: 29,
  role: 'Admin',
  userInfo() {
    return console.log(`User data: Name ${this.name}, email: ${this.email}, age: ${this.age}, role: ${this.role}`);
  }
}

user.userInfo();