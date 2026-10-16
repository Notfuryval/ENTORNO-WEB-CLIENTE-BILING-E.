// Get the form and the list
var form = document.getElementById("petForm");
var petList = document.getElementById("petList");

// When the form is sent
form.addEventListener("submit", function (event) {

    event.preventDefault();

    //Remove the red color from all the inputs once is valid
    document.getElementById("name").classList.remove("invalid");
    document.getElementById("image").classList.remove("invalid");
    document.getElementById("birthdate").classList.remove("invalid");
    document.getElementById("price").classList.remove("invalid");
    document.getElementById("code").classList.remove("invalid");

    // Also remove the error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("imageError").innerHTML = "";
    document.getElementById("birthdateError").innerHTML = "";
    document.getElementById("priceError").innerHTML = "";
    document.getElementById("codeError").innerHTML = "";

    // Get the values
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var image = document.getElementById("image").value;
    var birthdate = document.getElementById("birthdate").value;
    var price = document.getElementById("price").value;
    var code = document.getElementById("code").value;
    var sold = document.getElementById("sold").checked;

    // This variable says if everything is ok
    var everythingOk = true;

    // Check the name
    if (name == "") {
        document.getElementById("name").classList.add("invalid");
        document.getElementById("nameError").innerHTML = "Please write the name";
        everythingOk = false;
    }

    // Check the image
    if (image == "") {
        document.getElementById("image").classList.add("invalid");
        document.getElementById("imageError").innerHTML = "Please write the image URL";
        everythingOk = false;
    } else {
        if (image.endsWith(".jpg") == false && image.endsWith(".jpeg") == false && image.endsWith(".png") == false && image.endsWith(".gif") == false) {
            document.getElementById("image").classList.add("invalid");
            document.getElementById("imageError").innerHTML = "The image must be jpg, jpeg, png or gif";
            everythingOk = false;
        }
    }

    // Check the birthdate
    if (birthdate == "") {
        document.getElementById("birthdate").classList.add("invalid");
        document.getElementById("birthdateError").innerHTML = "Please choose the birthdate";
        everythingOk = false;
    } else {
        var today = new Date();
        var selectedDate = new Date(birthdate);

        if (selectedDate > today) {
            document.getElementById("birthdate").classList.add("invalid");
            document.getElementById("birthdateError").innerHTML = "The birthdate cannot be in the future";
            everythingOk = false;
        }
    }

    // Check the price
    if (price == "") {
        document.getElementById("price").classList.add("invalid");
        document.getElementById("priceError").innerHTML = "Please write the price";
        everythingOk = false;
    } else {
        price = Number(price);

        if (price <= 0) {
            document.getElementById("price").classList.add("invalid");
            document.getElementById("priceError").innerHTML = "The price must be more than 0";
            everythingOk = false;
        }
    }

    // Check the code
    if (code == "") {
        document.getElementById("code").classList.add("invalid");
        document.getElementById("codeError").innerHTML = "Please write the code";
        everythingOk = false;
    } else {
        code = code.toUpperCase();

        // Check if it has 3 letters and 3 numbers
        var letters = code.substring(0, 3);
        var numbers = code.substring(3, 6);

        if (code.length != 6) {
            document.getElementById("code").classList.add("invalid");
            document.getElementById("codeError").innerHTML = "The code must have 6 characters";
            everythingOk = false;
        } else {
            if (letters == letters.toLowerCase()) {
                document.getElementById("code").classList.add("invalid");
                document.getElementById("codeError").innerHTML = "The first 3 characters must be letters";
                everythingOk = false;
            } else {
                if (isNaN(numbers)) {
                    document.getElementById("code").classList.add("invalid");
                    document.getElementById("codeError").innerHTML = "The last 3 characters must be numbers";
                    everythingOk = false;
                }
            }
        }
    }

    // If something is wrong we stop here
    if (everythingOk == false) {
        return;
    }

    // Create the pet card
    var petCard = document.createElement("div");
    petCard.className = "pet";

    // Image
    var petImage = document.createElement("img");
    petImage.src = image;
    petImage.alt = name;

    // Name
    var petName = document.createElement("h3");
    petName.innerHTML = name;

    // Description
    var petDescription = document.createElement("p");
    petDescription.innerHTML = description;

    // Birthdate
    var petBirthdate = document.createElement("p");
    petBirthdate.innerHTML = "Birthdate: " + birthdate;

    // Price
    var petPrice = document.createElement("p");
    petPrice.innerHTML = "Price: " + price.toFixed(2) + " €";

    // Code
    var petCode = document.createElement("p");
    petCode.innerHTML = "Code: " + code;

    // Put everything inside the card
    petCard.appendChild(petImage);
    petCard.appendChild(petName);
    petCard.appendChild(petDescription);
    petCard.appendChild(petBirthdate);
    petCard.appendChild(petPrice);
    petCard.appendChild(petCode);

    // If the pet is sold, put the SOLD text
    if (sold == true) {
        var soldText = document.createElement("span");
        soldText.className = "sold";
        soldText.innerHTML = "SOLD";
        petCard.appendChild(soldText);
    }

    // Add the card to the page
    petList.appendChild(petCard);

    // Clean the form
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("price").value = "";
    document.getElementById("code").value = "";
    document.getElementById("sold").checked = false;
});