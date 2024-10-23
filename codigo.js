const toggleButton = document.getElementById('menu-toggle');
const navUl = document.querySelector('.nav__ul');

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
});