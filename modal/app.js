// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const toggleBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const banner = document.querySelector('.modal-overlay');

toggleBtn.addEventListener('click', function () {
console.log(banner.classList);
    
    banner.classList.toggle("open-modal"); 
});

closeBtn.addEventListener('click', function() {
    banner.classList.remove("open-modal");

});


