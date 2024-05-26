function getArray(length, isSorted, range = null) {
  if (isSorted
    && range
    && range.max - range.min + 1 > length
  ) {
    console.error('Неверные параметры массива');
    return;
  }

  const array = [];

  for (let i = 1; i <= length; i++) {
    array.push(isSorted
      ? (range?.min || 0) + i
      : Math.floor((Math.random() * ((range?.max || length) - (range?.min || 1))) + (range?.min || 1))
    );
  }

  console.log(array);
  return array;
}

getArray(10, false);
