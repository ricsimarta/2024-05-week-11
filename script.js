const characterCard = ({ name, species, status, image }) => {
  // console.log(characterData);

  /* const name = characterData.name;
  const species = characterData.species;
  const status = characterData.status;
  const image = characterData.image; */

  // const { name, species, status, image } = characterData;

  return ` <div class="card"> 
    <h2>${name}</h2>
    <h3 class="species">${species}</h3>
    <h3>kismacska</h3>
    <h4>${status}</h4>
    <img src=${image} />
  </div> `;
}

const charactersComponent = (charactersData) => `
  <div class="characters">
    ${charactersData.map(characterData => characterCard(characterData)).join("")}
  </div>
`;

const makeDomFromData = (data, rootElement) => {
  rootElement.insertAdjacentHTML("beforeend", charactersComponent(data.results));
};

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // itt lesz elérhető az adat

    makeDomFromData(data, document.querySelector("#root"));
    /* data.results.forEach((characterData) => {
      document.querySelector('#root').insertAdjacentHTML("beforeend", characterCard(characterData));
      console.log("dom manipulation");
    }) */

    /* document.querySelector("#root").insertAdjacentHTML("beforeend", charactersComponent(data.results));
    console.log("dom manipulation"); */

  })