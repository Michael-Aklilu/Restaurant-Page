"use strict";
import "./contact.css";

export default function contact() {
  const content = document.querySelector("#content");
  if (content) {
    content.innerHTML = "";
  }
  const contactUs = document.createElement("h1");
  contactUs.classList.add("contactUs");
  contactUs.textContent = "Contact Us";
  content.appendChild(contactUs);

  const alemu = document.createElement("div");
  alemu.classList.add("owner");
  alemu.innerHTML = `<h3>Alemu</h3> <span>Co-owner</span> <br> <span>0987231462</span> <br> <span>alemu@hagere.biz</span>`;
  content.appendChild(alemu);

  const alemitu = document.createElement("div");
  alemitu.classList.add("owner");
  alemitu.innerHTML = `<h3>Alemitu</h3> <span>Co-owner</span> <br> <span>0957936365</span> <br> <span>alemitu@hagere.biz</span>`;
  content.appendChild(alemitu);

  const mike = document.createElement("div");
  mike.classList.add("owner");
  mike.innerHTML = `<h3>Mike</h3> <span>Head Chef</span> <br> <span>0923415625</span> <br> <span>mike@hagere.biz</span>`;
  content.appendChild(mike);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `The Odin project &copy`;
  content.appendChild(footer);
}
