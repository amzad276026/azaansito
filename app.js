"use strict";
let menuOpenBtn = document.querySelector('#menu-open');
let menuCloseBtn = document.querySelector('#menu-close');
let menuOpen = document.querySelector("#menu");
menuOpenBtn.addEventListener("click", () => {
  menuOpen.style.display = "flex";
});
let menuClose = document.querySelector("#menu");

menuCloseBtn.addEventListener("click", () => {
  menuClose.style.display = "none";
});
