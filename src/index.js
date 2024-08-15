"use strict";
import "./style.css";
import layout from "./home.js";
import menu from "./menu.js";
layout();
const button = document.querySelector("button");
const content = document.querySelector("#content");
const header = document.querySelector(".header");
header.addEventListener("click", (event) => {
  if (event.target.id === "menu") {
    content.innerHTML = "";
    menu();
  } else if (event.target.id === "about") {
    content.innerHTML = "";
  }
});
