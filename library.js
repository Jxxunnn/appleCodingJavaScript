"use strict";

export function hello() {
  console.log(1 + 1);
  setTimeout(function () {
    console.log(2 + 2);
  }, 1000);
  console.log(3 + 3);
}
