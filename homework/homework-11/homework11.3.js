/** Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
 *  Вивести зображення, отримане випадковим чином (Math.random) */
const images = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpeg', '7.jpeg'
];

const randomIndex = Math.floor(Math.random() * images.length);

const randomImage = images[randomIndex];
console.log(randomIndex);

const imageElement = document.getElementById('random-image');
imageElement.src = `/source/homework11/${randomImage}`;

