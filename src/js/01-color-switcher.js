const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
btnStart.disabled = false;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function togle() {
  if (btnStart.disabled) {
    btnStart.disabled = false;
    btnStop.disabled = true;
    return;
  } else btnStart.disabled = true;
  btnStop.disabled = false;
}

function onBtnStartClick() {
    timerId = setInterval(updateBackgroundColor, 1000);
     if (btnStart.disabled) {
       btnStart.disabled = false;
       btnStop.disabled = true;
       return;
     } else btnStart.disabled = true;
     btnStop.disabled = false;
   
}

function onBtnStopClick() {
    clearInterval(timerId);
      btnStart.disabled = false;
      btnStop.disabled = true;
      return;
 
};
