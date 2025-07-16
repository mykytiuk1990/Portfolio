const titleJs = document.getElementById('title-js');
const text = titleJs.innerText;

const letters = text
  .split('')
  .map(char => {
    if (char === ' ') {
      return char; // пробіл без span
    } else {
      return `<span>${char}</span>`; // літера у span
    }
  })
  .join('');

// Вставляємо готовий HTML у заголовок
titleJs.innerHTML = letters;

const spans = titleJs.querySelectorAll('span');

setInterval(() => {
  spans.forEach(span => span.style.opacity = 1);

  // Вибираємо випадковий span і робимо його напівпрозорим
  const randomIndex = Math.floor(Math.random() * spans.length);
  spans[randomIndex].style.opacity = 0.4;

}, 1500);
