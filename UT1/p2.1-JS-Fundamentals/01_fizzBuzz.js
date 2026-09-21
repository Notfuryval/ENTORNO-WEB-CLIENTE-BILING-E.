// 01_fizzBuzz.js

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      console.log("FizzBuzz");
    } else if (divisibleBy3) {
      console.log("Fizz");
    } else if (divisibleBy5) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();