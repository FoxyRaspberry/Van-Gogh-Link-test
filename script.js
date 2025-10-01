document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.nav__burger');
    const navList = document.querySelector('.nav__list');

    burger.addEventListener('click', () => {
        navList.classList.toggle('nav__list--open');
    });
});
