//import htmlEduQuiz from './elem-edu-quiz.html';

// Импортируем страницы Video Algorithm
import htmlVAKulikov from './video-algorithm/1.html';


// Создаем массив страниц Video Algorithm
const htmlVA = [htmlVAKulikov];

// Функция добавляет обработчик клика для каждой страницы
export default function vaLinks() {

  console.log('vaLinks');
  const currentContent = document.querySelector('#video');

  const va = document.querySelectorAll('.video-algorithm');
  if (va) {
    for (let i = 0; i < va.length; i++) {
      va[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlVA[i]) {
          // currentContent.innerHTML = htmlVA[i];
          // backToVA();
        }
      });
    }
  }
}

function backToVA() {
  const currentContent = document.querySelector('#video');

  const linkToVA = document.getElementById('link-to-va');
  if (linkToVA) {
    linkToVA.addEventListener('click', (e) => {
      e.preventDefault();
      currentContent.innerHTML = 'htmlEduQuiz';
      vaLinks();
    });
  }
}
