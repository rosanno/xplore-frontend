const video = document.querySelector(".video");
const playBtn = document.querySelector(".playBtn");

const togglePlay = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateToggleButton = () => {
  playBtn.innerHTML = video.paused
    ? '<i class="fa-solid fa-play"></i>'
    : '<i class="fa-solid fa-pause"></i>';
};

playBtn.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);

const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");

const scrollLeft = () => {
  document.querySelector(".images-scroll").scrollBy(350, 0);
};

const scrollRight = () => {
  document.querySelector(".images-scroll").scrollBy(-350, 0);
};

btnLeft.addEventListener("click", scrollLeft);
btnRight.addEventListener("click", scrollRight);
