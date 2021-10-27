let navToggleBtn = document.querySelector('.nav-toggle');
let navBar = document.querySelector('.navbar');
let header = document.querySelector('header').clientHeight;
let contentContainer = document.querySelector('.content-container');

let searchToggleBtn = document.querySelector('.search-toggle');
let searchContainer = document.querySelector('.search-bar-container');

navBar.style.top = `${header}px`;

const mediaQueryForFixedTop = (query) => {
    if (query.matches) {
        contentContainer.style.marginLeft = `${navBar.clientWidth + navBar.style.paddingLeft}px`;
    }
};

let query = window.matchMedia("(min-width: 768px)");
mediaQueryForFixedTop(query);
query.addEventListener('resize', mediaQueryForFixedTop);


function toggleClass (targetElement, classToToggle) {
    targetElement.classList.toggle(classToToggle);
}

navToggleBtn.addEventListener('click', () => {
    toggleClass(navBar, '-translate-x-full');
});

searchToggleBtn.addEventListener('click', () => {
    toggleClass(searchContainer, 'hidden');
});