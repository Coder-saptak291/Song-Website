let audioElement = new Audio("1.mp3");
let audioElement1 = new Audio("2.mp3");
let audioElement2 = new Audio("3.mp3");
let audioElement3 = new Audio("4.mp3");

let audioElement4 = new Audio("5.mp3");
let audioElement5 = new Audio("6.mp3");
let audioElement6 = new Audio("7.mp3");
let audioElement7 = new Audio("8.mp3");
let audioElement8 = new Audio("9.mp3");

let play = document.getElementById("btn");
let play1 = document.getElementById("btn1");
let play2 = document.getElementById("btn2");
let play3 = document.getElementById("btn3");
let play4 = document.getElementById("btn4");
let play5 = document.getElementById("btn5");
let play6 = document.getElementById("btn6");
let play7 = document.getElementById("btn7");
let play8 = document.getElementById("btn8");
play.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
    play.innerHTML = "Pause";
    audioElement1.pause();
    audioElement2.pause();

    play1.innerHTML = "Play";
    play2.innerHTML = "Play";
    audioElement3.pause();
    audioElement4.pause();
    play3.innerHTML = "Play";
    play4.innerHTML = "Play";
    audioElement5.pause();
    audioElement6.pause();
    play5.innerHTML = "Play";
    play6.innerHTML = "Play";
    audioElement7.pause();
    play7.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
  } else {
    audioElement.pause();
    play.innerHTML = "Play";
  }
});
play1.addEventListener("click", () => {
  if (audioElement1.paused) {
    audioElement1.play();
    play1.innerHTML = "Pause";
    audioElement.pause();
    audioElement2.pause();
    audioElement3.pause();
    audioElement4.pause();
    play3.innerHTML = "Play";
    play4.innerHTML = "Play";
    play.innerHTML = "Play";
    play2.innerHTML = "Play";
    audioElement5.pause();
    audioElement6.pause();
    audioElement7.pause();
    play7.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
    play5.innerHTML = "Play";
    play6.innerHTML = "Play";
  } else {
    audioElement1.pause();
    play1.innerHTML = "Play";
  }
});
play2.addEventListener("click", () => {
  if (audioElement2.paused) {
    audioElement2.play();
    audioElement7.pause();
    play7.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
    play2.innerHTML = "Pause";
    audioElement.pause();
    audioElement1.pause();
    audioElement3.pause();
    audioElement4.pause();
    play3.innerHTML = "Play";
    play4.innerHTML = "Play";
    play.innerHTML = "Play";
    play1.innerHTML = "Play";
    audioElement5.pause();
    audioElement6.pause();
    play5.innerHTML = "Play";
    play6.innerHTML = "Play";
  } else {
    audioElement2.pause();
    play2.innerHTML = "Play";
  }
});
play3.addEventListener("click", () => {
  if (audioElement3.paused) {
    audioElement7.pause();
    play7.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
    audioElement3.play();
    play3.innerHTML = "Pause";
    audioElement1.pause();
    audioElement2.pause();
    audioElement.pause();
    audioElement4.pause();
    audioElement6.pause();
    audioElement5.pause();
    play1.innerHTML = "Play";
    play2.innerHTML = "Play";
    play4.innerHTML = "Play";
    play5.innerHTML = "Play";
    play6.innerHTML = "Play";
    play.innerHTML = "Play";
  } else {
    audioElement3.pause();
    play3.innerHTML = "Play";
  }
});
play4.addEventListener("click", () => {
  if (audioElement4.paused) {
    audioElement7.pause();
    play7.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
    audioElement4.play();
    play4.innerHTML = "Pause";
    audioElement1.pause();
    audioElement2.pause();
    audioElement3.pause();
    audioElement.pause();
    play1.innerHTML = "Play";
    play2.innerHTML = "Play";
    play3.innerHTML = "Play";
    play.innerHTML = "Play";
    audioElement5.pause();
    audioElement6.pause();
    play5.innerHTML = "Play";
    play6.innerHTML = "Play";
  } else {
    audioElement4.pause();
    play4.innerHTML = "Play";
  }
});
play5.addEventListener("click", () => {
  if (audioElement5.paused) {
    audioElement7.pause();
    play7.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
    audioElement5.play();
    play5.innerHTML = "Pause";
    audioElement1.pause();
    audioElement2.pause();

    audioElement3.pause();
    audioElement4.pause();
    audioElement6.pause();

    audioElement.pause();
    play1.innerHTML = "Play";
    play2.innerHTML = "Play";
    play3.innerHTML = "Play";
    play4.innerHTML = "Play";
    play6.innerHTML = "Play";
    play.innerHTML = "Play";
  } else {
    audioElement5.pause();
    play5.innerHTML = "Play";
  }
});
play6.addEventListener("click", () => {
  if (audioElement6.paused) {
    audioElement7.pause();
    play7.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
    audioElement6.play();
    play6.innerHTML = "Pause";
    audioElement1.pause();
    audioElement2.pause();
    audioElement5.pause();
    audioElement3.pause();
    audioElement4.pause();
    audioElement.pause();

    audioElement.pause();
    play1.innerHTML = "Play";
    play2.innerHTML = "Play";
    play3.innerHTML = "Play";
    play4.innerHTML = "Play";
    play5.innerHTML = "Play";
    play.innerHTML = "Play";
  } else {
    audioElement6.pause();
    play6.innerHTML = "Play";
  }
});
play7.addEventListener("click", () => {
  if (audioElement7.paused) {
    audioElement7.play();
    play7.innerHTML = "Pause";
    audioElement1.pause();
    audioElement2.pause();

    play1.innerHTML = "Play";
    play2.innerHTML = "Play";
    audioElement3.pause();
    audioElement4.pause();
    play3.innerHTML = "Play";
    play4.innerHTML = "Play";
    audioElement5.pause();
    audioElement6.pause();
    play5.innerHTML = "Play";
    play6.innerHTML = "Play";
    audioElement8.pause();
    play8.innerHTML = "Play";
  } else {
    audioElement7.pause();
    play7.innerHTML = "Play";
  }
});
play8.addEventListener("click", () => {
  if (audioElement8.paused) {
    audioElement8.play();
    play8.innerHTML = "Pause";
    audioElement1.pause();
    audioElement2.pause();

    play1.innerHTML = "Play";
    play2.innerHTML = "Play";
    audioElement3.pause();
    audioElement4.pause();
    play3.innerHTML = "Play";
    play4.innerHTML = "Play";
    audioElement5.pause();
    audioElement6.pause();
    play5.innerHTML = "Play";
    play6.innerHTML = "Play";
    audioElement7.pause();
    play7.innerHTML = "Play";
  } else {
    audioElement.pause();
    play8.innerHTML = "Play";
  }
});
// audioElement7.pause();
// play7.innerHTML = "Play";
// audioElement8.pause();
// play8.innerHTML = "Play";
