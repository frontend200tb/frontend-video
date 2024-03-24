/** ***************
Функция createLearnedList возвращает список элементов li с
просмотренными видеокурсами для элемента Learned меню
**************** */
/*
Алгоритм работы
1. Функция createLearnedList принимает массив просмотренных видеокурсов
2. Отсортируем видеокурсы по дате просмотра
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка видеокурсов
5. Создадим объект video для записи свойств видео
  5.1 Свойство time объекта video содержит время в часах и минутах
6. Запишем свойства фильма в элемент списка фильмов
7. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

// 1. Функция createLearnedList принимает массив просмотренных видеокурсов
export default function createLearnedList(data) {
  // 2. Отсортируем видеокурсы по дате просмотра
  data.sort((a, b) =>
    // удалить всё, кроме цифр
    a.dateLearned.replace(/[^0-9]/gi, '') - b.dateLearned.replace(/[^0-9]/gi, ''));

  // 3. Создаем массив parentDiv для элементов li списка
  const parentDiv = [];
  for (let i = 0; i < data.length; i++) {
    // 4. Создадим элемент elementLi списка видеокурсов
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

    // 6. Запишем свойства фильма в элемент списка фильмов
    elementLi.innerHTML = `
    <span>${data[i].dateLearned}</span>
    <div><strong>[${data[i].year}] ${data[i].title}</strong></div>
    <div><em>${data[i].author} ${data[i].name}</em></div>
    <div>${data[i].numberLessons} Время ${video.time} Размер ${data[i].size}</div>
    <div>Изучено ${data[i].isLearned}</div>`;

    // 7. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);

    function origin(book) {
      if (book.origin) {
        return `(
        <strong>${book.origin.title}</strong>
        - <em>${book.origin.author}</em>
        )`;
      }
      return '';
    }

    function addColor() {
      elementLi.classList.add('over');
    }

    function removeColor() {
      elementLi.classList.remove('over');
    }
  }

  return parentDiv;
}
