// 10_multiplicationTable.js

function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
  }
}

// 1 to 10 Tables, because yes.
for (let n = 1; n <= 10; n++) {
  console.log("Table for " + n + ":");
  printMultiplicationTable(n);
  console.log("----");
}