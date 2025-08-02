/*
   Name: Rustam Zazai
   File: main.js
   Date: August 1 2025
   This is the JavaScript for the image gallery part
   (INFT1206-06)
   */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imgAltNamesArray = ["Valley of the Sun", "Mountain Walk", "Desert Flowers", "Mountains and Desert", "Sunrise"];

/* Looping through images */
for (let i = 0; i < imagesArray.length; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", `images/${imagesArray[i]}`);
    newImage.setAttribute("alt", imgAltNamesArray[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (event) => {
      const imgSrc = event.target.getAttribute('src');
      const imgAlt =  event.target.getAttribute('alt');
      displayedImage.setAttribute("src", `${imgSrc}`);
      displayedImage.setAttribute("alt", `${imgAlt}`);
   });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
   const btnClass = btn.getAttribute("class");
   if (btnClass === "dark") {
      btn.setAttribute("class", "light");
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    } 
    else if (btnClass === "light") {
      btn.setAttribute("class", "dark");
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
   }
});