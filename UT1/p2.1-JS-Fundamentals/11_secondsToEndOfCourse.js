// 11_secondsToEndOfCourse.js

const courseEndDate = new Date("2027-06-24T14:15:00").getTime();

function showSecondsRemaining() {
  const now = Date.now();
  const diffMs = courseEndDate - now;

  if (diffMs <= 0) {
    console.log("The course has ended.");
    clearInterval(timerId);
    return;
  }

  const secondsRemaining = Math.floor(diffMs / 1000);
  console.log("Seconds remaining to the end of the course: " + secondsRemaining);
}

showSecondsRemaining();
const timerId = setInterval(showSecondsRemaining, 1000);