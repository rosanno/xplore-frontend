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
