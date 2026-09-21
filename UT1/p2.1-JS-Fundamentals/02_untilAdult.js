// 02_untilAdult.js

const container = document.getElementById("container");

let age;

do {
  const input = prompt("Please enter your age (must be 18 or older):");

  if (input === null) {
    // If the user cancels, we stop. uwu
    container.innerHTML = "<h1>Operation cancelled.</h1>";
    break;
  }

  age = Number(input);

  if (isNaN(age)) {
    alert("Please enter a valid number.");
  } else if (age < 18) {
    alert("You must be at least 18 years old.");
  }
} while (isNaN(age) || age < 18);

// Only if valid.
if (typeof age === "number" && age >= 18) {
  container.innerHTML =
    "<h1>Welcome to my awesome website for adult people</h1>";
}