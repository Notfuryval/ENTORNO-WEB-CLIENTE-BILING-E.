// Get the form and the container where the pets will be displayed
const form = document.getElementById("petForm");
const petList = document.getElementById("petList");


// When the form is submitted...
form.addEventListener("submit", function (event) {


  // Prevent the page from reloading
  event.preventDefault();


  // Get the values entered by the user
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const image = document.getElementById("image").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const price = Number(document.getElementById("price").value);
  const code = document.getElementById("code").value.trim().toUpperCase();
  const sold = document.getElementById("sold").checked;


  // Check that the required fields are not empty
  if (!name || !image || !birthdate || !price || !code) {
    alert("Please fill in all required fields.");
    return;
  }


  // The URL must end with .jpg, .jpeg, .png or .gif
  const imageRegex = /\.(jpg|jpeg|png|gif)$/i;


  if (!imageRegex.test(image)) {
    alert("The image URL must end in .jpg, .jpeg, .png or .gif.");
    return;
  }


  // The date cannot be later than today
  const today = new Date();
  const selectedDate = new Date(birthdate);


  if (selectedDate > today) {
    alert("The birthdate cannot be in the future.");
    return;
  }


  // The price must be greater than 0
  if (price <= 0) {
    alert("The price must be greater than 0.");
    return;
  }


  // The code must have 3 letters followed by 3 numbers, e.g. CAT123
  const codeRegex = /^[A-Z]{3}\d{3}$/;


  if (!codeRegex.test(code)) {
    alert("The pet code must have 3 letters followed by 3 numbers, e.g. CAT123.");
    return;
  }


  // If everything is correct, create the pet card
  const petCard = document.createElement("div");
  petCard.className = "pet";


  // Display the image
  const petImage = document.createElement("img");
  petImage.src = image;
  petImage.alt = name;


  // Display the name
  const petName = document.createElement("h3");
  petName.textContent = name;


  // Display the description
  const petDescription = document.createElement("p");
  petDescription.textContent = description;


  // Display the birthdate
  const petBirthdate = document.createElement("p");
  petBirthdate.textContent = "Birthdate: " + birthdate;


  // Display the price with two decimal places
  const petPrice = document.createElement("p");
  petPrice.textContent = "Price: " + price.toFixed(2) + " €";


  // Display the code
  const petCode = document.createElement("p");
  petCode.textContent = "Code: " + code;


  // Add all the data to the card
  petCard.appendChild(petImage);
  petCard.appendChild(petName);
  petCard.appendChild(petDescription);
  petCard.appendChild(petBirthdate);
  petCard.appendChild(petPrice);
  petCard.appendChild(petCode);


  // If the pet is sold, add the "SOLD" badge
  if (sold) {
    const soldBadge = document.createElement("span");
    soldBadge.className = "sold";
    soldBadge.textContent = "SOLD";
    petCard.appendChild(soldBadge);
  }


  // Add the card to the list
  petList.appendChild(petCard);


  // Clear the form
  form.reset();
});