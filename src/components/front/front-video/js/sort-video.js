/** ***************
Функция sortVideo сортирует курсы по году, автору и названию
**************** */
export default function sortVideo(video) {
  video.sort((a, b) => {
    if (a.year === b.year) {
      // Если год одинаковый то сортировать по автору
      if (a.author === b.author) {
        // Если автор одинаковый то сортировать по названию
        return a.title.localeCompare(b.title, 'en');
      }
      // Иначе сортировать по автору
      return a.author.localeCompare(b.title, 'en');
    }
    // Иначе сортировать по году
    return a.year - b.year;
  });
  return video;
}
