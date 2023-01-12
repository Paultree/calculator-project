export function plus(arr) {
  return arr.reduce((total, accum) => {
    return total + accum;
  });
}

export function minus(arr) {
  return arr.reduce((total, accum) => {
    return total - accum;
  });
}

export function multiply(arr) {
  return arr.reduce((total, accum) => {
    return total * accum;
  });
}

export function divide(arr) {
  return arr.reduce((total, accum) => {
    return total / accum;
  });
}

export function compute(arr, key, obj) {
  return obj[key](arr);
}
