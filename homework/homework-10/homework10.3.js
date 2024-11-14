/**
 * Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі.
 * Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
 * Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.
 */
const contactBook = {
  contacts: [
    {
      name: 'Oleh',
      phone: '+380662223322',
      email: 'oleh@email.com'
    },
    {
      name: 'Anatoly',
      phone: '+380502223322',
      email: 'anatoly@email.com'
    },
    {
      name: 'Olga',
      phone: '+380672223322',
      email: 'olga@email.com'
    },
    {
      name: 'Krystyna',
      phone: '+380972223322',
      email: 'krystyna@email.com'
    },
  ],

  findContact(name) {
    return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || 'Contact not found';
  },

  addContact(name, phone, email) {
    const existingContact = this.findContact(name);
    if (existingContact === 'Contact not found') {
      this.contacts.push({ name, phone, email });
      return 'Contact added';
    }
    return 'Contact already exists';
  }
};

console.log(contactBook.findContact('Olga'));
console.log(contactBook.addContact('Olga', '+380999888777', 'olga@example.com'));
console.log(contactBook.findContact('Krystyna'));