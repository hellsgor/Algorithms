import {getArray} from "./00_get-array.mjs";

let count = 0;

const array = getArray(10, false, false, {min: 0});
// const array = [
//   17, 71, 12, 58, 9, 80, 12, 14, 3, 27, 31, 7,
//   50, 86, 20, 19, 89, 39, 42, 58, 38, 56, 12, 12,
//   26, 75, 70, 11, 8, 7, 48, 52, 73, 3, 32, 77,
//   18, 53, 99, 63, 31, 70, 66, 46, 78, 99, 89, 19,
//   68, 98, 29, 50, 77, 41, 91, 83, 63, 83, 56, 23,
//   19, 22, 52, 13, 57, 73, 15, 15, 82, 63, 58, 14,
//   93, 67, 57, 36, 34, 7, 87, 68, 86, 69, 51, 49,
//   45, 67, 89, 0, 88, 48, 9, 55, 24, 55, 67, 89,
//   10, 25, 13, 24
// ];

function linerSearch(array, searching) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === searching) return i;
  }

  return null;
}

console.log('array length:', array.length);
console.log('array:', array);
console.log('searching number index:', linerSearch(array, 5));
console.log('count:', count);

// сложность: O(n)
// то есть сложность линейного поиска равна O от количества итераций цикла
