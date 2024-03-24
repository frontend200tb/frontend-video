/** **************
Скрипт из файла front-video.js
Функция showFrontVideo показывает страницу front-video
****************** */
/*
Алгоритм работы
1. Создаем объект frontVideo
2. В объекте frontVideo создаем свойство input
3. В объекте frontVideo создаем свойство category
4. В объекте frontVideo создаем свойство elements
5. В объекте frontVideo создаем свойство mainNav
6. В объекте frontVideo создаем свойство elemSection
7. Экспортируем функцию showFrontVideo()
*/

import './element-front-video';
import createInput from './js/f-create-input';
import createCategory from './js/f-create-category';
import createElements from './js/f-create-elements';
import createElemMainNav from './js/f-create-elem-main-nav';
import createElemSection from './js/f-create-elem-section';

// 1. Создаем объект frontVideo
const frontVideo = {};

// 2. В объекте frontVideo создаем свойство input
frontVideo.input = createInput();

// 3. В объекте frontVideo создаем свойство category
frontVideo.category = createCategory(frontVideo.input);

// 4. В объекте frontVideo создаем свойство elements
frontVideo.elements = createElements(frontVideo.category);

// 5. В объекте frontVideo создаем свойство mainNav
frontVideo.mainNav = createElemMainNav(frontVideo.elements);

// 6. В объекте frontVideo создаем свойство elementSection
frontVideo.elemSection = createElemSection(frontVideo.elements);

// 7. Экспортируем функцию showFrontVideo()
export default function showFrontVideo() {
  const elementFrontVideo = document.querySelector('.front-video');
  if (elementFrontVideo) {
    elementFrontVideo.append(frontVideo.mainNav);
    elementFrontVideo.append(frontVideo.elemSection);
  }
}
