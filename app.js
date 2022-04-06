import { platformInformation } from "./module/platformInformation.js";
import { serviceInfo } from "./module/serviceInformation.js";

/* Open and Close the Menu */
let menuPosition = "close";
const menuBurger = document.getElementById("menu-burger");
const lines = document.querySelectorAll(".burger-line");
document.getElementById("menu").addEventListener("click", (evt) => {
  if (menuPosition === "close") {
    burgerAnimation(
      "translate(-1px, -1px) rotate(45deg)",
      "0",
      "translate(-2px, 2px) rotate(-45deg)",
    );
    document
      .querySelector(".invisible")
      .classList.replace("invisible", "visible");
    menuPosition = "open";
  } else {
    burgerAnimation(
      "translate(0, 0) rotate(0deg)",
      "1",
      "translate(0, 0) rotate(0deg)",
    );
    document
      .querySelector(".visible")
      .classList.replace("visible", "invisible");
    menuPosition = "close";
  }
});

function burgerAnimation(
  transformFisrtLine,
  opacitySecondLine,
  transformThirdLine,
) {
  lines[0].style.transform = transformFisrtLine;
  lines[1].style.opacity = opacitySecondLine;
  lines[2].style.transform = transformThirdLine;
}

// cardPlatform-HTML
const div = document.getElementById("card_section-title");
const cardDiv = document.createElement("div");
cardDiv.classList.add("card_item-wrapper");

const generateCard = (icon, title, description) => {
  return `
   <div class="card_item-box">
       <div cass="card_img">${icon}</div>
       <h2 class="card_title">${title.toUpperCase()}</h2>
       <p class="card_description">${description}</p>
   </div>
 
   `;
};

const cardHTML = platformInformation
  .map((card) => {
    return generateCard(card.icon, card.title, card.description);
  })
  .join("");

cardDiv.innerHTML = cardHTML;

div.insertAdjacentElement("afterend", cardDiv);
