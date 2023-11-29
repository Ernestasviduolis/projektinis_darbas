document.addEventListener('DOMContentLoaded', function() {

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.querySelector('.bemeniu');
const CloseMenu =  document.querySelector('.open');


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    CloseMenu.classList.toggle("close");

});



});