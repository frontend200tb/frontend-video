/** **************
Функция createElements принимает объект category, создает и возвращает массив elements
****************** */
/*
Алгоритм работы

*/
import vaLinks from './../pages/pages';
import createList from './f-create-list';
import createLearnedList from './f-create-learned-list';

export default function createElements(data) {
  // временные переменные для хранения контента, который появится на странице
  const aside = document.createElement('aside');
  aside.className = 'aside';

  const main = document.createElement('main');
  main.className = 'list';
  main.id = 'video';

  const h2 = document.createElement('h2');
  const currentContent = document.createElement('ol');
  currentContent.id = 'books';

  // 1. Создаем объект для main-nav, aside и main
  const elements = {};

  // 2. Создаем main-nav
  // 2.1 Создаем массив navDiv для элементов main-nav
  const navDiv = [];

  for (const category in data.result) {
    // 2.2 Создаем элемент elementNav для каждой категории
    const elementNav = document.createElement('a');
    elementNav.href = '#';
    elementNav.innerHTML = category;

    // 2.3 Добавляем элемент elementNav в массив navDiv
    navDiv.push(elementNav);

    // 3. Создаем aside меню
    // 3.1 Создаем массив asideDiv для элементов aside меню
    const asideDiv = [];

    for (const theme in data.result[category]) {
      // 3.2 Создаем элемент elementAside для каждой темы
      const elementAside = document.createElement('a');
      elementAside.href = '#';
      elementAside.innerHTML = theme;

      // 3.3 Добавляем элемент elementAside в массив asideDiv
      asideDiv.push(elementAside);

      // 4. Создаем контент для main
      // 4.1 Создаем массив mainDiv для элементов main
      const mainDiv = [];

      for (const content of data.result[category][theme]) {
        // 4.2 Добавим в массив mainDiv массив с фильмами
        mainDiv.push(content);
      }

      // 4.3 Создаем элемент elementsMain для каждой темы
      const elementMain = createList(mainDiv);

      // 5. По клику на элемент aside меню
      elementAside.addEventListener('click', (e) => {
        e.preventDefault();

        // 5.1 добавим ему class="active"
        classActive(asideDiv, elementAside);

        // 5.2 показываем нужный заголовок h2
        h2.innerHTML = theme;

        // покажем элемент aside меню
        aside.classList.remove('none');

        // 5.3 показываем нужный main
        currentContent.innerHTML = '';
        currentContent.append(...elementMain);

        // подключаем ссылки на страницы Pages
        vaLinks();
      });
    }

    // 6. По клику на элемент main-nav
    elementNav.addEventListener('click', (e) => {
      e.preventDefault();

      // 6.1 добавим ему class="active"
      classActive(navDiv, elementNav);

      // 6.2 показываем нужный aside
      aside.innerHTML = '';
      aside.append(...asideDiv);

      // 7. Создадим и вызовем событие click на первом aside эелементе
      const eventClick = new Event('click');
      asideDiv[0].dispatchEvent(eventClick);
    });
  }

  // 4. Добавим в navDiv пункт меню learned
  addLearned();
  // mainNav.append(...navDiv);

  // 6. Функция addLearned добавляет в main-nav элемент Learned
  function addLearned() {
    const elementNav = document.createElement('a');
    elementNav.href = '#';
    elementNav.innerHTML = 'learned';
    navDiv.push(elementNav);
    const elementMain = createLearnedList(data.learned);

    // По клику на элемент Learned
    elementNav.addEventListener('click', (e) => {
      e.preventDefault();

      // добавим ему class="active"
      classActive(navDiv, elementNav);

      // показываем нужный заголовок h2
      h2.innerHTML = 'Изученные видеокурсы по frontend разработке';

      // скрываем элемент aside меню
      aside.classList.add('none');

      // показываем нужный main
      currentContent.innerHTML = '';
      currentContent.append(...elementMain);
    });
  }

  // Ставим class="active" выбранному элементу меню и убираем с остальных
  function classActive(elementOl, elementLi) {
    elementOl.forEach((li) => {
      li.classList.remove('active');
    });
    elementLi.classList.add('active');
  }

  main.append(h2, currentContent);

  elements.navDiv = navDiv;
  elements.aside = aside;
  elements.main = main;

  return elements;
}
