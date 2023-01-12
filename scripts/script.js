import { plus, minus, divide, multiply, compute } from "./operator-module.js";

const opObj = {
  plus: plus,
  minus: minus,
  multiply: multiply,
  divide: divide,
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

const display = document.querySelector(".display");

const numButtons = document.querySelector("#numbers");

const opButtons = document.querySelector("#operators");

let numArr = [];

let opArr = [];

let displayArr = [];

function flip() {
  let result = document.getElementById("display").innerText;
  displayArr = result.split("");
  if (displayArr.includes("-")) {
    displayArr.shift("-");
  } else {
    displayArr.unshift("-");
  }
}

function clear() {
  display.innerText = "";
  numArr = [];
  opArr = [];
  displayArr = [];
}

function percent() {
  displayArr = display.innerText.split("");
  let percent = Number(displayArr.join("")) / 100;
  displayArr = String(percent).split("");
}

numButtons.addEventListener("click", (e) => {
  if (opArr.length > 1) {
    opArr.shift();
  }

  if (numObj.hasOwnProperty(e.target.id)) {
    displayArr.push(numObj[e.target.id]);
  } else if (e.target.id !== "clear") {
    opObj[e.target.id]();
  }

  display.innerText = displayArr.join("");

  if (e.target.id === "clear") {
    clear();
  }
});

opButtons.addEventListener("click", (e) => {
  if (numArr.length < 2) {
    numArr.push(Number(displayArr.join("")));
  }

  displayArr = [];

  if (opArr.length < 2) {
    opArr.push(e.target.id);
  }

  let result = compute(numArr, opArr[0], opObj);
  display.innerText = result;
  numArr = [result];

  if (e.target.id === "equal") {
    opArr = [];
  }
  console.log(numArr);
});
