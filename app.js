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

let exploreMoreButton = document.getElementById("explore-more");
let exploreInforamtion = document.getElementById("explore-more-information");
let informationText = exploreInforamtion.querySelector("p");
let closeText = exploreInforamtion.querySelector("i");

informationText.textContent = `The mission and institutional tasks of Guardia di Finanza are stated in the law 189 of April 23, 1959, and 68/2001 and are subdivided into priority ones (preventing, investigating and reporting financial evasions and violations, overseeing the compliance with the provisions of politico-economic interest and surveillance at sea for financial police purposes) and contribution ones (maintaining public order and safety and political-military defense of the borders).

The primary mission of the Guardia di Finanza is to protect the legal economy and the businesses operating in compliance with the law, while ensuring that the Republic, the European Union, the regions, and the local governments can rely on a regular income and appropriate use of the resources meant for the community, and for supporting policies for economic and social revival and development.

Its activities are connected with financial, economic, judiciary and public safety: tax evasion, financial crimes, smuggling, money laundering, international illegal drug trafficking, illegal immigration, human trafficking, modern slavery, customs and borders checks, copyright violations, anti-Mafia operations, credit card fraud, cybercrime, counterfeiting currency, terrorist financing, maintaining public order, and safety, political and military defense of the Italian borders.`;

exploreMoreButton.addEventListener("click", function () {
  exploreInforamtion.style.display = "block";
});

closeText.addEventListener("click", function () {
  exploreInforamtion.style.display = "none";
});
