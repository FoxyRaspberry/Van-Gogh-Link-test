document.addEventListener('DOMContentLoaded', () => {
    const [burger] = document.getElementsByClassName('nav__burger');
    const [navListWrapper] = document.getElementsByClassName('nav__list-wrapper');

    burger.addEventListener('click', () => {
        navListWrapper.classList.toggle('nav__list-wrapper--open');
    });
});
