/** ***************
Функция createList возвращает список элементов li с видео курсами для элемента aside меню
**************** */
/*
Алгоритм работы
1. Функция createList принимает массив курсов по одной теме
2. Отсортируем курсы по дате и названию
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка курсов
5. Создадим объект video для записи свойств видео
  5.1 Свойство time объекта video содержит время в часах и минутах
6. Запишем свойства фильма в элемент списка фильмов
7. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

import sortVideo from './sort-video';

// 1. Функция createList принимает массив курсов по одной теме
export default function createList(data) {
  // 2. Отсортируем курсы по названию
  data = sortVideo(data);

  // 3. Создаем массив parentDiv для элементов li списка
  const parentDiv = [];
  for (let i = 0; i < data.length; i++) {
    // 4. Создадим элемент elementLi списка курсов
    const elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);

    // 5. Создадим объект video для записи свойств видео
    const video = {};

    // 5.1 Свойство time объекта video содержит время в часах и минутах
    if (data[i].time_h_m) {
      video.time = `Время ${data[i].time_h_m[0] ? `${data[i].time_h_m[0]}ч` : ''} ${data[i].time_h_m[1] ? `${data[i].time_h_m[1]}м` : ''}`;
    } else {
      video.time = `Время ${data[i].time}`;
    }

    // 6.1 Свойство link объекта video содержит ссылки на видео
    if (data[i].link) {
      video.link = '<a href="1.html" class="video-algorithm">открыть</a>';
    } else {
      video.link = '';
    }

    // 6. Запишем свойства фильма в элемент списка фильмов
    elementLi.innerHTML = `
    <strong>[${data[i].year}] ${data[i].title}</strong>
    <div>${data[i].author} ${data[i].name}</div>
    <div>${data[i].numberLessons} видео. ${video.time} Размер ${data[i].size}</div>
    <div>${video.link}</div>
    <div>Изучено ${data[i].isLearned}</div>`;

    // 7. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);

    function addColor() {
      elementLi.classList.add('over');
    }

    function removeColor() {
      elementLi.classList.remove('over');
    }
  }

  return parentDiv;
}
