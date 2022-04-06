const platformInformation = [
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
  {
    icon: "",
    title: "Community Edition",
    description:
      "Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.",
  },
];

const generateCard = (icon, title, description) => {
  return `
  <div class="card_box">
      <div cass="card_img"></div>
      <h2 class="card_title">${title.toUpperCase()} ${title}</h2>
      <p class="card_description">${description}</p>
  </div>

  `;
};

const cardList = platformInformation
  .map((card) => {
    return generateCard(card.icon, card.title, card.description);
  })
  .join("");
