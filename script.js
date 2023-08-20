const second = document.querySelector(".second__hand");
const minute = document.querySelector(".minute__hand");
const hour = document.querySelector(".hour__hand");

function setTime() {
  const now = new Date();
  const secs = now.getSeconds();
  const secsDegree = secs * 6 + 90;
  const mins = now.getMinutes();
  const minsDegree = mins * 6 + 90;
  const hrs = now.getHours();
  const hrsDegree = (hrs + mins / 60) * 30 + 90;
  console.log(secs);
  second.style.transform = `rotate(${secsDegree}deg)`;
  minute.style.transform = `rotate(${minsDegree}deg)`;
  hour.style.transform = `rotate(${hrsDegree}deg)`;
}

setInterval(setTime, 1000);
