import {getArray} from "./00_get-array.mjs";

let count = 0;

const array = getArray(26, false, true, {min: -100, max: 100});

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minElemIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      count += 1;

      if (array[j] < array[minElemIdx]) {
        minElemIdx = j;
      }
    }

    let temp = array[i];
    array[i] = array[minElemIdx];
    array[minElemIdx] = temp;
  }

  return array;
}

console.log('array.length: ', array.length);
console.log('array: ', array);
console.log('sorted: ', selectionSort(array));
console.log('count: ', count);

// сложность O(n*n) -  O от n в квадрате, то есть количество итераций в квадрате, так как у нас есть цикл в цикле
