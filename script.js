// script.js

// Дожидаемся полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript подключен и работает!');
});
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // При клике добавляем класс active на 200мс
    card.addEventListener('click', () => {
      card.classList.add('active');
      setTimeout(() => {
        card.classList.remove('active');
      }, 200);
    });
  });
});