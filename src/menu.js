"use strict";
import "./menu.css";

function menuLayout() {
  const content = document.createElement("div");
  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = "Menu";
  content.appendChild(header);

  const main = document.createElement("h2");
  main.textContent = "Main Dishes";
  content.appendChild(main);

  const shiro = document.createElement("div");
  shiro.classList.add("shiro");
  shiro.innerHTML = `<h3>Shiro</h3> <p>Shiro is a traditional Ethiopian stew made from chickpea or broad bean flour, simmered with spices for a rich, savory flavor. It's often served with injera, offering a warm and comforting taste. Loved across Ethiopia, shiro embodies the simplicity and depth of the nation's cuisine.</p> <span>200 birr</span>`;
  const shiroImg = document.createElement("div");
  shiroImg.classList.add("shiroImg");
  shiroImg.innerHTML = "./shiro.jpg";
  shiro.appendChild(shiroImg);
  content.appendChild(shiro);

  const kitfo = document.createElement("div");
  kitfo.classList.add("kitfo");
  content.appendChild.kitfo;
  kitfo.innerHTML =
    "<h3>Kitfo</h3> <p> Kitfo is a traditional Ethiopian dish of finely minced raw beef, seasoned with spiced butter and mitmita, a fiery chili powder. Served with injera or kocho, it offers a bold, rich flavor. Kitfo is cherished for its simplicity and the intensity of its flavors, making it a highlight of Ethiopian cuisine.</p> <span>500 birr</span>";
  const kitfoImg = document.createElement("div");
  kitfo.classList.add("kitfoImg");
  kitfoImg.innerHTML = "./kitfo.jpg";
  kitfo.appendChild(kitfoImg);
}
