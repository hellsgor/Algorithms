import {getArray} from "./00_get-array.mjs";

let count = 0;

const array = getArray(10000, true, false, {min: 0});

function binarySearch(array, searching) {
  let position = -1;
  let middle;
  let start = 0;
  let end = array.length;
  let found = false;

  while (!found && end >= start) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    console.log(middle, count);

    if (searching === array[middle]) {
      found = true;
      position = middle;
      return position;
    }

    if (array[middle] > searching) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return position;
}

console.log('array length: ', array.length);
console.log('array: ', array);
console.log('searching index: ', binarySearch(array, 917));
console.log('count: ', count);
