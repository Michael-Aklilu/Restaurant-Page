"use strict";

export default function layout() {
  let content = document.querySelector("#content");

  if(content){
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
        flavors that are the hallmark of Ethiopian cuisine. <br> <br>
        Whether you're a seasoned aficionado or new to Ethiopian food, Hagere
        offers an unforgettable dining experience that celebrates the rich
        culture and hospitality of Ethiopia. Hagere is an Ethiopian restaurant
        that embodies the heart and soul of Ethiopia’s culinary heritage. As
        soon as you step inside, you’re greeted by the warm aroma of spices and
        the vibrant energy of a space designed to reflect the country’s rich
        culture. The restaurant’s menu is a tribute to traditional Ethiopian
        cuisine, featuring a range of dishes that are both flavorful and deeply
        satisfying. From the spongy, tangy injera to the slow-cooked stews and
        sautéed vegetables, every dish is crafted with care and authenticity.
        Hagere is not just about the food; it’s about the experience. Guests are
        encouraged to eat with their hands, sharing meals in the traditional
        Ethiopian way, fostering a sense of community and connection. With its
        inviting atmosphere and delicious food, Hagere offers a genuine taste of
        Ethiopia, making it a beloved spot for both locals and visitors alike.`;

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
