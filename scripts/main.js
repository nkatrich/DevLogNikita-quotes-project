// Vars

const burgerMenu = document.querySelector('.burger-menu');
const navHeaderNavPhone = document.querySelector('.nav-header-nav-phone');
const navHeaderLiPhone = document.querySelector('.nav-header-li-phone');

// Burger-menu

function toggleBurgerMenu() {
    navHeaderNavPhone.style.display = 'flex';
    navHeaderNavPhone.classList.toggle('open');
}

burgerMenu.addEventListener('click', toggleBurgerMenu);

// Smooth scroll

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey) return;
        e.preventDefault();

        const cordScroll = 200;

        let posSiteScroll = window.scrollY

        if (e.deltaY > 0) {
            posSiteScroll += cordScroll;
        }
        else {
            posSiteScroll -= cordScroll;
            if (posSiteScroll < 0) {
                posSiteScroll = 0;
            }
        }

        window.scrollTo({
            top: posSiteScroll,
            behavior: 'smooth'
        })

    }, {passive: false});
})

// case to remove burger menu for button "О нас"

navHeaderLiPhone.addEventListener('click', () => {
    navHeaderNavPhone.style.display = 'none';
})