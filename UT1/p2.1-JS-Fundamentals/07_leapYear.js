// 07_leapYear.js

const isLeapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 !== 0) {
    return true;
  }
  return year % 400 === 0;
};

const years = [1996, 1900, 2000, 2024, 2025];

for (let i = 0; i < years.length; i++) {
  const y = years[i];
  console.log(y + " is leap year? " + isLeapYear(y));
}