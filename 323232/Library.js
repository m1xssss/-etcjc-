// Определяем класс ArrayUtils для работы с массивами
class ArrayUtils {
    // Метод для сортировки массива по возрастанию
    static sortArray(arr) {
        // Используем метод sort для сортировки
        return arr.sort((a, b) => a - b);
    }

    // Метод для фильтрации массива по заданному условию
    static filterArray(arr, condition) {
        // Используем метод filter для фильтрации массива
        return arr.filter(condition);
    }
}

// Исходный массив, который мы будем использовать
const sampleArray = [5, 3, 8, 1, 2];

// Функция для сортировки массива и отображения результата
function sortArray() {
    // Сортируем массив и сохраняем результат
    const sorted = ArrayUtils.sortArray([...sampleArray]);
    // Отображаем отсортированный массив на странице
    document.getElementById('sortedArray').innerText = sorted.join(', ');
}

// Функция для фильтрации массива и отображения результата
function filterArray() {
    // Фильтруем массив, оставляя только числа больше 4
    const filtered = ArrayUtils.filterArray(sampleArray, num => num > 4);
    // Отображаем отфильтрованный массив на странице
    document.getElementById('filteredArray').innerText = filtered.join(', ');
}
