/** ***************
Функция createElemSection принимает объект elements, создает и возвращает элемент Section
**************** */

export default function createElemSection(data) {
  const elemSection = document.createElement('section');
  elemSection.className = 'main__aside';
  elemSection.append(data.aside, data.main);

  return elemSection;
}
