document.addEventListener('DOMContentLoaded', function() {

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.querySelector('.bemeniu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
});