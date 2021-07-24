const navToggle = document.querySelector('.nav-toggle-button');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
})