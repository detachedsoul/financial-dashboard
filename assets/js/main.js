let navToggleBtn = document.querySelector('.nav-toggle');
let navBar = document.querySelector('.navbar');
let header = document.querySelector('header').clientHeight;
let contentContainer = document.querySelector('.content-container');
let dropdownContainer = document.querySelector('.dropdown');
let dropdownToggleBtn = document.querySelector('.dropdown-toggle');

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

dropdownToggleBtn.addEventListener('click', () => {
    dropodownIcon = dropdownToggleBtn.childNodes[1].classList;

    if (dropodownIcon.contains('fi-rr-caret-down')) {
        dropodownIcon.replace('fi-rr-caret-down', 'fi-rr-caret-up');
    } else {
        dropodownIcon.replace('fi-rr-caret-up', 'fi-rr-caret-down');
    }

    toggleClass(dropdownContainer, 'hidden');
});