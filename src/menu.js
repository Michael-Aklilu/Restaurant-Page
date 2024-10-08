"use strict";
import "./menu.css";
import shiroImage from "./shiro.jpeg";
import kitfoImage from "./kitfo.jpg";
import tibsImages from "./tibs.jpg";
export default function menuLayout() {
  const mainContent = document.querySelector("#content");
  if (mainContent) {
    mainContent.innerHTML = "";
  }

  const menuContent = document.createElement("div");
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Menu";
  menuContent.appendChild(title);

  const main = document.createElement("h2");
  main.textContent = "Main Dishes";
  menuContent.appendChild(main);

  const shiro = document.createElement("div");
  shiro.classList.add("shiro");
  shiro.innerHTML = `<h3>Shiro</h3> <p>Shiro is a traditional Ethiopian stew made from chickpea or broad bean flour, simmered with spices for a rich, savory flavor. It's often served with injera, offering a warm and comforting taste. Loved across Ethiopia, shiro embodies the simplicity and depth of the nation's cuisine.</p> <div class='price'>500 birr</div>`;
  const shiroImg = document.createElement("img");
  shiroImg.classList.add("shiroImg");
  shiroImg.src = shiroImage;
  shiro.appendChild(shiroImg);
  menuContent.appendChild(shiro);

  const kitfo = document.createElement("div");
  kitfo.classList.add("kitfo");
  menuContent.appendChild(kitfo);
  kitfo.innerHTML =
    "<h3>Kitfo</h3> <p> Kitfo is a traditional Ethiopian dish of finely minced raw beef, seasoned with spiced butter and mitmita, a fiery chili powder. Served with injera or kocho, it offers a bold, rich flavor. Kitfo is cherished for its simplicity and the intensity of its flavors, making it a highlight of Ethiopian cuisine.</p> <div class='price'>500 birr</div>";
  const kitfoImg = document.createElement("img");
  kitfoImg.classList.add("kitfoImg");
  kitfoImg.src = kitfoImage;
  kitfo.appendChild(kitfoImg);

  const tibs = document.createElement("div");
  tibs.classList.add("tibs");
  tibs.innerHTML =
    "<h3>Tibs</h3> <p>Tibs is a flavorful Ethiopian dish, often made from sautéed meat, typically beef or lamb, cooked with onions, peppers, and a blend of spices. It’s a vibrant and aromatic dish that embodies the rich culinary traditions of Ethiopia. Served with injera, tibs offers a perfect balance of savory and spicy flavors, making it a beloved favorite in Ethiopian cuisine.</p> <div class='price'>350 birr</div>";

  const tibsImage = document.createElement("img");
  tibsImage.classList.add("tibsImg");
  tibsImage.src = tibsImages;
  tibs.appendChild(tibsImage);

  menuContent.appendChild(tibs);

  mainContent.appendChild(menuContent);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `The Odin project &copy`;
  mainContent.appendChild(footer);
}
