const platformInformation = [
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: `<i class="card_box-icon  fa-solid fa-book"></i>`,
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
];

const businessServices = [
  {
    title: "BASIC",
    price: "$159",
    keyword: "20 Keyword (free)",
    tracking: "No Time Tracking (free)",
    newsLetter: "News Letter (free)",
  },
];

const communityServices = [
  {
    title: "BASIC",
    price: "$59",
    tracking: "No Time Tracking (free)",
    newsLetter: "News Letter (free)",
  },
  {
    title: "STANDARD",
    price: "$79",
    keyword: "20 Keyword (free)",
    hour: "230 - Man Hour (free)",
    newsLetter: "News Letter (free)",
  },
  {
    title: "UNLIMITED",
    price: "$99",
    keyword: "20 Keyword (free)",
    tracking: "No Time Tracking (free)",
    hour: "230 - Man Hour (free)",
    newsLetter: "News Letter (free)",
  },
];

const cardSection = document.getElementById("card_section-wrap");
const packageSectionContainer = document.getElementById("package_section");
const communitiySetrvicesBtn = document.getElementById("community_btn");
const businessServicesBtn = document.getElementById("business_btn");

/* Open and Close the Menu */
let menuPosition = "close";
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

// Card list
const cardList = platformInformation.map(
  (card) =>
    `
     <li class="card_box">
       ${card.icon}
       <hr />
       <h2 class="card_title">${card.title.toUpperCase()}</h2>
       <p class="card_description">${card.description}</p>
     </li>
   `,
);

const generateCardList = () => {
  if (platformInformation.length > 0) {
    const ul = document.createElement("ul");
    ul.classList.add("grid_container");

    ul.innerHTML = cardList.join(" ");
    cardSection.append(ul);
  }
};
generateCardList();

// Services
const communityService = communityServices.map(
  (service) =>
    `
     <div class="service_card">
       <hr class="service_card-topline">
       <h2 class="service_title">${service.title}</h2>
       <p class="service_price">
         <span>${service.price}</span>
         <span style="font-style:italic; font-size: 10px;">per month</span>
       </p>
       <div class="benefits">
       ${
         service.keyword
           ? `<span class="isbenefit">${service.keyword}</span>`
           : `<span class="nobenefit"> 20 Keyword (free)</span>`
       }
       ${
         service.tracking
           ? `<span class="isbenefit">${service.tracking}</span>`
           : `<span class="nobenefit">No Time Tracking (free)</span>`
       }
       ${
         service.hour
           ? `<span class="isbenefit">${service.hour}</span>`
           : `<span class="nobenefit"> 230 - Man Hour (free)</span>`
       }
       ${
         service.newsLetter
           ? `<span class="isbenefit">${service.newsLetter}</span class="nobenefit">`
           : `<span>News Letter (free)</span>`
       }
       </div>
       <button class="service_button">FREE NOW</button>
       <span class="service_card-middleline"></span>
     </div>
   `,
);

const businessService = businessServices.map((service) => {
  return `
     <div class="service_card">
       <hr class="service_card-topline">
       <h2 class="service_title">${service.title}</h2>
       <p class="service_price">
         <span>${service.price}</span>
         <span style="font-style:italic; font-size: 10px;">per month</span>
       </p>
       <div class="benefits">
         ${
           service.keyword
             ? `<span class="isbenefit">${service.keyword}</span>`
             : `<span class="nobenefit">20 Keyword (free)</span>`
         }
         ${
           service.tracking
             ? `<span class="isbenefit">${service.tracking}</span>`
             : `<span class="nobenefit">No Time Tracking (free)</span>`
         }
         ${
           service.hour
             ? `<span class="isbenefit">${service.hour}</span>`
             : `<span class="nobenefit">230 - Man Hour (free)</span>`
         }
         ${
           service.newsLetter
             ? `<span class="isbenefit">${service.newsLetter}</span class="nobenefit">`
             : `<span></span> News Letter (free)</span>`
         }
       </div>
       <button class="service_button">FREE NOW</button>
       <span class="service_card-middleline"></span>
     </div>
   `;
});

window.onload = function () {
  const commServContainer = document.createElement("div");
  const busServContainer = document.createElement("div");

  communitiySetrvicesBtn.onclick = () => {
    busServContainer.style.display = "none";

    if (communityServices.length > 0) {
      commServContainer.classList.add("serviceContainer");
      commServContainer.style.display = "flex";

      commServContainer.innerHTML = communityService.join(" ");
      packageSectionContainer.append(commServContainer);
    }
  };

  businessServicesBtn.onclick = () => {
    commServContainer.style.display = "none";

    if (businessService.length > 0) {
      busServContainer.classList.add("serviceContainer");
      busServContainer.style.display = "flex";

      busServContainer.innerHTML = businessService.join(" ");
      packageSectionContainer.append(busServContainer);
    }
  };
  businessServicesBtn.click();
};
