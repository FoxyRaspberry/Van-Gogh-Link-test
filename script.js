document.addEventListener('DOMContentLoaded', () => {
    const [burger] = document.getElementsByClassName('nav__burger');
    const [navList] = document.getElementsByClassName('nav__list');

    burger.addEventListener('click', () => {
        navList.classList.toggle('nav__list--open');
    });
});
