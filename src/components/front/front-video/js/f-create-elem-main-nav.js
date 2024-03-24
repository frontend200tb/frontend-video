/** ***************
Функция createElemMainNav принимает объект elements, создает и возвращает элемент mainNav
**************** */
/*
Алгоритм работы
1. Создадим элемент main-nav
2. Добавим в него ссылки навигации
3. Создадим и вызовем событие click на первой ссылке mainNav элемента
*/

export default function createElemMainNav(data) {
  // 1. Создадим элемент main-nav
  const mainNav = document.createElement('nav');
  mainNav.className = 'nav';
  mainNav.id = 'main-nav';

  // 2. Добавим в него ссылки навигации
  mainNav.append(...data.navDiv);

  // 3. Создадим и вызовем событие click на первой ссылке mainNav элемента
  const eventClick = new Event('click');
  data.navDiv[0].dispatchEvent(eventClick);

  return mainNav;
}
