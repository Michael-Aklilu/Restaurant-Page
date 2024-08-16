"use strict";
import "./style.css";
import layout from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
layout();
const body = document.querySelector("body");
const content = document.querySelector("#content");
const header = document.querySelector(".header");
header.addEventListener("click", (event) => {
  content.innerHTML = "";
  if (event.target.id === "menu") {
    menu();
  } else if (event.target.id === "contact") {
    contact();
  } else if (event.target.id === "home") {
    layout();
  }
});
