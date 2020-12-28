// local reviews data - array
const reviews = [
  {
    id: 1,
    name: "Bunia",
    job: "web developer",
    img:
      "img/kot1.jpg",
    text:
      "I' m building websites using Java Script.",
  },
  {
    id: 2,
    name: "Psotka",
    job: "web designer",
    img:
      "img/kot2.jpg",
    text:
      "I permanentlly develop my designer skills",
  },
  {
    id: 3,
    name: "Arti",
    job: "database specialist",
    img:
      "img/kot3.jpeg",
    text:
      "Totally fixated on database meanagment",
  },
  {
    id: 4,
    name: "Tusio",
    job: "the boss",
    img:
      "img/kot4.jpg",
    text:
      "Responsible, reliable, I keep my paw on managing the team's operations",
  },
];

//select items

const img = document.getElementById("cat-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem=0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {

showPerson(currentItem); //funkcja show zamiast tego zakomentowanego 

    /*const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;*/
});

//to samo co wyżej ale funkcją
//show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show random person
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(void showPerson())
    showPerson();
});