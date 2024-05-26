import {getArray} from "./00_get-array.mjs";

let count = 0;

const array = getArray(26, false, true, {min: -100, max: 100});

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count += 1;

      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log('array.length: ', array.length);
console.log('array: ', array);
console.log('sorted: ', bubbleSort(array));
console.log('count: ', count);

// сложность: O(n * n) - O от n в квадрате, то есть количество итераций вложенного цикла в квадрате, так как у нас есть цикл в цикле
