/**Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:

 Поля:

 Name - обов'язкове текстове поле
 Message - текстове поле не менше 5 символів
 Phone number - обов'язкове поле типу phone. З початком на +380
 Email - email обов'язково повинен мати @ та крапку
 Після відправки, в консоль відображаємо дані, які ввів користувач.

 Під час помилки показувати її під полем.
 */
const form = document.getElementById('form-auth');
const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.textContent = '');

  const name = document.getElementById('name');
  const message = document.getElementById('message');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');

  if (name.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  if (message.value.trim().length < 5) {
    document.getElementById('messageError').textContent = 'Message must be at least 5 characters.';
    isValid = false;
  }

  if (!phoneRegex.test(phone.value.trim())) {
    document.getElementById('phoneError').textContent = 'Phone must start with +380 and have 9 digits.';
    isValid = false;
  }

  if (!emailRegex.test(email.value.trim())) {
    document.getElementById('emailError').textContent = 'Invalid email format.';
    isValid = false;
  }

  if (isValid) {
    console.log({
      name: name.value.trim(),
      message: message.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim()
    });
    form.reset();
  }
});