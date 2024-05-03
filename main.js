const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const plus = document.querySelector(".plus");
const second = document.querySelector(".second");
const minus = document.querySelector(".minus");
const start = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const clear = document.querySelector(".clear");

let interval;

window.addEventListener("click", (event) => {
  if (parseInt(second.innerHTML) == 59 ) {
    second.innerHTML = "00";
    minute.innerHTML++
  }
  if (parseInt(minute.innerHTML) == 59 ) {
    minute.innerHTML = "00";
    hour.innerHTML++
  }
  clear.classList.contains;
  if (event.target.classList.contains("plus")) {
    let item = event.target.closest(".item");

    let counter = item.querySelector(".count");
    counter.innerHTML++;
    if (parseInt(counter.innerHTML) <= 9) {
      counter.innerHTML = `0${counter.innerHTML++}`;
    }
  }
  if (event.target.classList.contains("minus")) {
    let item = event.target.closest(".item");

    let counter = item.querySelector(".count");
    if (parseInt(counter.innerHTML) <= 0) {
      counter.innerHTML = "00";
    } else {
      counter.innerHTML--;
    }

    if (parseInt(counter.innerHTML) <= 9) {
      counter.innerHTML = `0${counter.innerHTML--}`;
    }
  }

  if (event.target.classList.contains("start")) {
    start.disabled = true
    stopBtn.disabled = false
    interval = setInterval(() => {
      if (parseInt(second.innerHTML) > 0) {
        second.innerHTML--;
      } else if (parseInt(minute.innerHTML) > 0) {
        minute.innerHTML--;
        second.innerHTML = "59";
      } else if (parseInt(hour.innerHTML) > 0) {
        hour.innerHTML--;
        minute.innerHTML = "59";
        second.innerHTML = "59";
        console.log("saloms");
      }
      if (
        parseInt(hour.innerHTML) == 0 &&
        parseInt(minute.innerHTML) == 0 &&
        parseInt(second.innerHTML) == 0
      ) {
        clearInterval(interval);
        console.log("ok");
      }
      if (second.innerHTML <= 9) {
        second.innerHTML = `0${second.innerHTML--}`;
      }
      if (minute.innerHTML <= 9) {
        minute.innerHTML = `0${minute.innerHTML--}`;
      }
      if (hour.innerHTML <= 9) {
        hour.innerHTML = `0${hour.innerHTML--}`;
      }
    }, 1000);
  }
  
});
stopBtn.onclick= () =>{
  start.disabled = false
    stopBtn.disabled = true
  clearInterval(interval)
}
clear.onclick = () =>{
  start.disabled =false
    stopBtn.disabled = true
  hour.innerHTML="00"
  minute.innerHTML="00"
  second.innerHTML="00"
}
