// 04_lottery.js

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const lotteryNumbers = [];

while (lotteryNumbers.length < 10) {
  const number = randomBetween(10000, 99999);

    let exists = false;

    for (let i = 0; i < lotteryNumbers.length; i++) {
    if (lotteryNumbers[i] === number) {
      exists = true;
      break;
    }
  }

  if (!exists) {
    lotteryNumbers.push(number);
  }
}

console.log("10 different 5-digit lottery numbers:");
for (let i = 0; i < lotteryNumbers.length; i++) {
  console.log(lotteryNumbers[i]);
}