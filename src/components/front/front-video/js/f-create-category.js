/** ***************
Функция createCategory принимает массив input, создает и возвращает объект category
**************** */
/*
Алгоритм работы
1. Импортируем массивы из файлов data-video.js...
2. Создаем объект dataFrontVideo
3. В объект dataFrontVideo добавим свойство inputArrays
и запишем в него массив импортированных массивов
4. В объект dataFrontVideo добавим свойство allVideo и запишем в него массив всех видео
5. В объект dataFrontVideo добавим свойство category для массива с категориями
5. В объект dataFrontVideo добавим свойство learned для массива с изученными видео
6. Проходим по массиву всех видео
  6.1 Если у видео есть категория и этой категории нет в массиве категорий то добавить
  6.2 Если у видео есть тема и этой темы нет в данной категории то добавить
  6.3 Если есть категория и тема то в тему добавить объект с видео
  6.4 Если видео имеет свойство isLearned === true, то добавляем его в массив dataFrontVideo.learned
7. Экспортируем объект dataFrontVideo
*/

export default function createCategory(data) {
  // 4. Создаем объект result
  const result = {};
  result.result = {};
  result.learned = [];

  // 6. Проходим по массиву data
  data.forEach((elem) => {
    // 6.1 Если у видео есть категория и этой категории нет в массиве категорий то добавить
    if (elem.category && !(elem.category in result.result)) {
      result.result[elem.category] = {};
    }

    // 6.2 Если у видео есть тема и этой темы нет в данной категории то добавить
    if (elem.theme && !(elem.theme in result.result[elem.category])) {
      result.result[elem.category][elem.theme] = [];
    }

    // 6.3 Если есть категория и тема то в тему добавить объект с видео
    if (elem.category && elem.theme) {
      result.result[elem.category][elem.theme].push(elem);
    }

    // 6.4 Если видео имеет свойство isLearned === true, то добавляем его в массив learned
    if (elem.isLearned === true) {
      result.learned.push(elem);
    }
  });

  // 9. Возвращаем объект result
  return result;
}
