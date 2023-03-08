const titleEL = document.getElementById('title');
titleEL.style.textAlign="center";

const pE1 = document.querySelector(".cool");
const hE1 = document.querySelector("a");

hE1.href = "http://www.google.ca";

const commentEls = document.querySelectorAll(".comment");

for(let commentEl of commentEls){
   commentEl.style.fontSize = "30px";
}
