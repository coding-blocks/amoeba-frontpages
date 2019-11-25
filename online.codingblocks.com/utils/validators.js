export const isArrayOfInts =
  arr => Array.isArray(arr) && arr.every(el => !isNaN(+el))
