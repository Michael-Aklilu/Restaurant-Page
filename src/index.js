"use strict";
import "./style.css";
import layout from "./home.js";
layout();
const button = document.querySelector("button");
const content = document.querySelector("#content");
header.addEventListener("click", (event) => {
  if (event.target.id === "menu") {
    content.innerHTML = "";
  } else if (event.target.id === "about") {
    content.innerHTML = "";
  }
});
