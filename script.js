const opObj = {
  plus: plus,
  minus: minus,
  multiply: multiply,
  divide: divide,
  clear: clear,
  flip: flip,
  percent: percent,
};

const numObj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  decimal: ".",
};

function plus(arr) {
  return arr.reduce((total, accum) => {
    return total + accum;
  });
}

function minus(arr) {
  return arr.reduce((total, accum) => {
    return total - accum;
  });
}

function multiply(arr) {
  return arr.reduce((total, accum) => {
    return total * accum;
  });
}

function divide(arr) {
  return arr.reduce((total, accum) => {
    return total / accum;
  });
}

function compute(arr) {
  return opObj[opArr[0]](arr);
}

function clear() {
  numArr = [];
  opArr = [];
  displayArr = [];
  display.innerText = "";
}

function flip() {
  if (displayArr.includes("-")) {
    console.log("1");
    displayArr.shift("-");
  } else {
    displayArr.unshift("-");
  }
}

function percent() {
  let percent = Number(displayArr.join("")) / 100;
  displayArr = String(percent).split("");
}

const display = document.querySelector(".display");

const numButtons = document.querySelector("#numbers");

const opButtons = document.querySelector("#operators");

const container = document.getElementById("container");

let numArr = [];

let opArr = [];

let displayArr = [];

numButtons.addEventListener("click", (e) => {
  if (opArr.length > 1) {
    opArr.shift();
  }

  if (numObj.hasOwnProperty(e.target.id)) {
    displayArr.push(numObj[e.target.id]);
  } else {
    opObj[e.target.id]();
  }

  display.innerText = displayArr.join("");
});

opButtons.addEventListener("click", (e) => {
  if (numArr.length < 2) {
    numArr.push(Number(displayArr.join("")));
  }

  displayArr = [];

  if (opArr.length < 2) {
    opArr.push(e.target.id);
  }

  let result = compute(numArr);
  display.innerText = result;
  numArr = [result];

  if (e.target.id === "equal") {
    opArr = [];
  }
});
