let dropdownToggleBtn = document.querySelector('.dropdown-toggle');
let dropdown = document.querySelector('.dropdown');

let navToggleBtn = document.querySelector('.nav-toggle');
let navBar = document.querySelector('.navbar');

let searchToggleBtn = document.querySelector('.search-toggle');
let searchContainer = document.querySelector('.search-bar-container');

function toggleClass (targetElement, classToToggle) {
    targetElement.classList.toggle(classToToggle);
}

dropdownToggleBtn.addEventListener('click', () => {
    toggleClass(dropdown, 'dropdown-active');
});

navToggleBtn.addEventListener('click', () => {
    toggleClass(navBar, '-translate-x-full');
});

searchToggleBtn.addEventListener('click', () => {
    toggleClass(searchContainer, 'hidden');
});