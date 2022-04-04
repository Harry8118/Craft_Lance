let menuPosition = "close";
const menuBurger = document.getElementById("menu-burger");
const lines = document.querySelectorAll(".burger-line");

/* Open and Close the Menu */
document.getElementById("menu").addEventListener("click", (evt) => {
  if (menuPosition === "close") {
    burgerAnimation(
      "translate(-1px, -1px) rotate(45deg)",
      "0",
      "translate(-2px, 2px) rotate(-45deg)"
    );
    document
      .querySelector(".invisible")
      .classList.replace("invisible", "visible");
    menuPosition = "open";
  } else {
    burgerAnimation(
      "translate(0, 0) rotate(0deg)",
      "1",
      "translate(0, 0) rotate(0deg)"
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
  transformThirdLine
) {
  lines[0].style.transform = transformFisrtLine;
  lines[1].style.opacity = opacitySecondLine;
  lines[2].style.transform = transformThirdLine;
}
