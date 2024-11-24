// <!--Написати код відправки форми.-->
// <!--Після відправки, в консоль відображаємо дані, які ввів користувач.-->
// <!--Додатково додати туди тип відправки форми, та адресу відправки-->
// const loginForm = document.getElementById('form-login')
// loginForm.addEventListener('submit',e =>{
//   e.preventDefault()
//   const formData = new FormData(e.target)
//   const loginData = Object.fromEntries(formData)
//   console.log(loginData)
// })


<!--Створити повзунок, який при зміні значення буде регулювати розмір зображення:-->
// const slider = document.getElementById("sizeSlider");
// const sizeValue = document.getElementById("sizeValue");
// const image = document.getElementById("image");
//
// slider.addEventListener("input", function() {
//   const size = slider.value;
//   sizeValue.textContent = size + "px";
//   image.style.width = size + "px";
// });

/**
Створити регулярний вираз для пошуку десяткових дробів (чисел з плаваючою точкою)

Рядок: 0 1 12.345 789.0
Результат: ['12.345', '789.0']
*/
const str = "0 1 12.345 789.0";
const reg = /\d+\.\d+/g;
const res = str.match(reg);
console.log(res); // ['12.345', '789.0']

/**Створити вираз на пошук HTML-тегу, що відкриває або закриває, без атрибутів

 Рядок: <h1>Привіт!</h1>
 Результат: ['<h1>', '</h1>'] */
const string = "<h1>Привіт!</h1>";
const regex = /<\/?[a-zA-Z][a-zA-Z0-9]*>/g;
const result = string.match(regex);
console.log(result); // ['<h1>', '</h1>']