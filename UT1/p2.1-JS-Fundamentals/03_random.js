// 03_random.js

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// between 0 and 99999
console.log("0 - 99999:");
for (let i = 0; i < 10; i++) {
  console.log(randomBetween(0, 99999));
}

// between 10 and 40
console.log("10 - 40:");
for (let i = 0; i < 10; i++) {
  console.log(randomBetween(10, 40));
}

// between 18 and 90
console.log("18 - 90:");
for (let i = 0; i < 10; i++) {
  console.log(randomBetween(18, 90));
}

// between 1980 and 2020
console.log("1980 - 2020:");
for (let i = 0; i < 10; i++) {
  console.log(randomBetween(1980, 2020));
}