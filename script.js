const filterButtons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

document.querySelector(".active").classList.remove("active");
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
