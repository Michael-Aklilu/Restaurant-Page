"use strict";

export default function layout() {
  let content = document.querySelector("#content");

  if (content) {
    content.remove();
  }
  content = document.createElement("div");
  content.setAttribute("id", "content");

  const hagere = document.createElement("h1");
  content.appendChild(hagere);
  hagere.textContent = "Hagere Ethiopian Restaurant";

  const description = document.createElement("div");
  description.classList.add("description");
  content.appendChild(description);
  description.innerHTML = `Hagere is a vibrant Ethiopian restaurant that brings the rich flavors
        and traditions of Ethiopia to life. Nestled in a cozy and welcoming
        space, the restaurant is adorned with authentic Ethiopian décor,
        creating an ambiance that feels both warm and inviting. At Hagere,
        guests are treated to a culinary journey, with a menu that showcases a
        variety of traditional dishes, such as injera, doro wat, and kitfo, all
        prepared with fresh ingredients and aromatic spices. The restaurant
        prides itself on offering a communal dining experience, where friends
        and family can gather around a shared platter, savoring the bold, earthy
        flavors that are the hallmark of Ethiopian cuisine. <br> <br>`;

  const hours = document.createElement("div");
  hours.classList.add("hours");
  content.appendChild(hours);
  hours.innerHTML =
    "<h2>Hours</h2> <ul>  <li>Monday: 6am - 6pm</li>  <li>Tuesday: 6am - 6pm</li> <li>Wednesday: 6am - 6pm </li  <li>Thursday: 6am - 10pm</li> <li>Friday: 6am - 10pm</li><li>Saturday: 8am - 10pm</li><li>Sunday: 8am - 8pm</li></ul>";

  const location = document.createElement("div");
  location.classList.add("location");
  content.appendChild(location);
  location.innerHTML =
    "<h2>Location</h2> <span> Kotebe 02 opposite Yerer building</span>";
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = "The Odin project &copy";
  content.appendChild(footer);

  document.body.appendChild(content);
}
