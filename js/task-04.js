"use strict";

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    let stringArr = string.split("");
    stringArr.splice(40);
    let stringCut = stringArr.join("");
    return stringCut + "...";
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
