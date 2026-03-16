/* FILTER */

const filterButtons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

filterButtons.forEach(btn => btn.classList.remove("active"));
button.classList.add("active");

let filter = button.getAttribute("data-filter");

items.forEach(item => {

if(filter === "all"){
item.style.display = "block";
}
else if(item.dataset.category === filter){
item.style.display = "block";
}
else{
item.style.display = "none";
}

});

});

});

/* HERO TEXT ROTATION */

const roles = [
"Graphic Designer",
"Product Designer",
"Visual Designer",
"Brand Designer"
];

let index = 0;
const roleText = document.getElementById("roles");

function changeRole(){

roleText.textContent = roles[index];

index++;

if(index >= roles.length){
index = 0;
}

}

setInterval(changeRole,2000);
changeRole();



/* HAMBURGER */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


/* IMAGE POPUP */

const portfolioImages = document.querySelectorAll(".portfolio-item img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

portfolioImages.forEach(image => {

image.addEventListener("click", () => {

popup.style.display = "flex";
popupImg.src = image.src;

});

});

closePopup.addEventListener("click", () => {
popup.style.display = "none";
});

popup.addEventListener("click", (e) => {

if(e.target !== popupImg){
popup.style.display = "none";
}

});
