let slider_img = document.querySelector(".slider-img");
let images = [
  "slider-image-card (5).png",
  "slider-3-last.jpg",
  "slider-img-200.avif",
];
let i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "images/" + images[i]);
}

function changeText() {
  let story_button = document.getElementById("story-button");
  let mission_button = document.getElementById("mission-button");
  let vision_button = document.getElementById("vision-button");
  let story_button_txt = document.getElementById("story-section");
  let mission_button_txt = document.getElementById("mission-section");
  let vision_button_txt = document.getElementById("vision-section");

  story_button.addEventListener("click", function () {
    story_button_txt.style.display = "block";
    mission_button_txt.style.display = "none";
    vision_button_txt.style.display = "none";
    this.classList.add("active-button");
    mission_button.classList.remove("active-button");
    vision_button.classList.remove("active-button");
  });

  mission_button.addEventListener("click", function () {
    story_button_txt.style.display = "none";
    mission_button_txt.style.display = "block";
    vision_button_txt.style.display = "none";
    this.classList.add("active-button");
    story_button.classList.remove("active-button");
    vision_button.classList.remove("active-button");
  });

  vision_button.addEventListener("click", function () {
    story_button_txt.style.display = "none";
    mission_button_txt.style.display = "none";
    vision_button_txt.style.display = "block";
    this.classList.add("active-button");
    story_button.classList.remove("active-button");
    mission_button.classList.remove("active-button");
  });
}

changeText();
