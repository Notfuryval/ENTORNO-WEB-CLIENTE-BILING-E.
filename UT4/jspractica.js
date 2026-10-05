/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

// The place where we are going to insert the cards
const rowCards = document.querySelector("main.row");

// We use the template as a model to replicate
const cardTemplate = document.querySelector("#card-template").content;

// Fetch the Marvel heroes JSON
fetch("./data/heroes.json")
  .then((response) => response.json())
  .then((jsondata) => {
    console.log(jsondata);
    renderHeroes(jsondata.data.results);
  })
  .catch((e) => {
    console.log(e);
  });

// This function creates the cards
function renderHeroes(characters) {
  for (let char of characters) {
    // Create a copy of the template
    let newCard = cardTemplate.cloneNode(true);

    // Get the elements inside the copied card
    let image = newCard.querySelector(".card-image");
    let title = newCard.querySelector(".card-title");
    let description = newCard.querySelector(".card-description");
    let link = newCard.querySelector(".card-link");

    // Add the character data to the card
    image.src = char.thumbnail.path + "." + char.thumbnail.extension;
    image.alt = char.name;

    title.textContent = char.name;

    if (char.description && char.description.trim() !== "") {
      description.textContent = char.description;
    } else {
      description.textContent = "No description available.";
    }

    // Find the "detail" URL
    let urlComic = "#";
    for (let u of char.urls) {
      if (u.type === "comiclink") {
        urlComic = u.url;
        break;
      }
    }
    link.href = urlComic;

    // Add the completed card to the page
    rowCards.appendChild(newCard);
  }
}