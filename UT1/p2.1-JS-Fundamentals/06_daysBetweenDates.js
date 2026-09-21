// 06_daysBetweenDates.js

function daysBetweenDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffMs = Math.abs(d2 - d1);
    // I use milliseconds because Date works like that. -_-
  const msPerDay = 1000 * 60 * 60 * 24;

  return Math.floor(diffMs / msPerDay);
}

const dateA = "2000-01-01";
const dateB = "2026-09-21";

const days = daysBetweenDates(dateA, dateB);
console.log("Days between " + dateA + " and " + dateB + ": " + days);