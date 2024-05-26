export function getArray(length, isSorted, isUniqueValues, range = null) {
  if (isUniqueValues
    && range
    && range.max - range.min + 1 < length
  ) {
    console.error('Неверные параметры массива: диапазон слишком мал для уникальных значений');
    return;
  }

  const getValue = (i = null) => {
    return isSorted && i !== null
      ? (range?.min ?? 0) + i
      : Math.floor((Math.random() * ((range?.max ?? length) - (range?.min ?? 1) + 1)) + (range?.min ?? 1));
  }

  const array = isUniqueValues && !isSorted ? new Set() : [];

  for (let i = 1; i <= length; i++) {
    if (isUniqueValues && !isSorted) {
      let value = getValue();
      while (array.has(value)) {
        value = getValue();
      }
      array.add(value);
    } else {
      array.push(getValue(i));
    }
  }

  return Array.isArray(array) ? array : Array.from(array);
}
