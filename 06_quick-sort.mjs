import {getArray} from "./00_get-array.mjs";

let count = 0;

const array = getArray(26, false, true, {min: -100, max: 100});

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIdx = Math.floor(array.length / 2);
  let pivot = array[pivotIdx];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;

    if (i === pivotIdx) continue;

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('array.length: ', array.length);
console.log('array: ', array);
console.log('sorted: ', quickSort(array));
console.log('count: ', count);

// быстрая сортировка или сортировка Хоара
// находим опорный элемент массива. Обычно центральный
// массив по опорному элементу делится на два массива, с большими и с меньшими значениями чем значение опорного элемента
// возвращаем массив, в который развернули:
// - массив с меньшими чем центральный элементами,
// - опорным элементом
// - и большими чем центральным элементами.
// Рекурсивно вызываем функцию на каждом подмассиве до тех пор, пока в массиве не будет 1 элемент

// средняя сложность O(n log n), в худшем случае O(n^2)
