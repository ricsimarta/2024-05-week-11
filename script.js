const characterCard = ({ name, species, status, image }) => {
  return ` <div class="card"> 
    <h2>${name}</h2>
    <h3 class="species">${species}</h3>
    <h4>${status}</h4>
    <img src=${image} />
  </div> `;
}

const charactersComponent = (charactersData) => `
  <div class="characters">
    ${charactersData.map(characterData => characterCard(characterData)).join("")}
  </div>
`;

const buttonComponent = (type) => `
  <button class=${type}>${type}</button>
`;

const makeDomFromData = (data, rootElement) => {
  rootElement.innerHTML = "";

  if (data.info.next) rootElement.insertAdjacentHTML("beforeend", buttonComponent("next"));
  if (data.info.prev) rootElement.insertAdjacentHTML("beforeend", buttonComponent("prev"));

  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => button.addEventListener("click", () => {
    fetch(data.info["next"])
      .then(res => res.json())
      .then(newData => makeDomFromData(newData, rootElement))
  }));

  rootElement.insertAdjacentHTML("beforeend", charactersComponent(data.results));
};

fetch("https://rickandmortyapi.com/api/character?page=2")
  .then((response) => response.json())
  .then((data) => makeDomFromData(data, document.querySelector("#root")));