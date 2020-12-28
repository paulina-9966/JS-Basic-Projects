// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const navToggle = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    //console.log(links.classList);
    //console.log(links.classList.contains("random"));
    //console.log(links.classList.contains("links"));

   /* if(links.classList.contains('show-links')) {//jeśli link zawiera tę klasę to wykona się instrukcja, jeśli nie zawiera to klasa zostanie dodana w ins else
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }*/  //zamiast tego prościej użyć TOGGLE, to tak właścnie działą!

    links.classList.toggle("show-links");
});