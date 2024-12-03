/**
 * Пишемо свій слайдер зображень, який повинен:
 *
 * Відображати зображення та кнопки Next, Prev з боків від зображення.
 * При кліку на Next - показуємо наступне зображення.
 * При кліку на Prev - попереднє
 * При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
 * Кількість слайдів може бути будь-якою
 * Додати можливість навігації через точки під слайдами
 */

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  const offset = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;

  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) currentIndex++;
  updateSlider();
});

updateSlider();
