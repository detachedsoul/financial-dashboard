
let header = document.querySelector('header').clientHeight;
let navBar = document.querySelector('.navbar');
let contentContainer = document.querySelector('.content-container');
let dropdownContainer = document.querySelector('.dropdown');
let dropdownToggleBtn = document.querySelector('.dropdown-toggle');

navBar.style.top = `${header}px`;

function mediaQueryForFixedTop (query) {

    if (query.matches) {
        contentContainer.style.marginLeft = `${navBar.clientWidth + (navBar.style.paddingLeft + navBar.style.paddingRight)}px`;
        navBar.style.top = '0';
    } else {
        contentContainer.style.marginLeft = 'auto';
        navBar.style.top = `${header}px`;
    }

}

let query = window.matchMedia("(min-width: 768px)");
window.onload = () => {
    mediaQueryForFixedTop(query);
}
query.addEventListener('change', mediaQueryForFixedTop);


function toggleClass(toggleBtn, targetElement, classToToggle, event = 'click') {
    let btn = document.querySelector(toggleBtn);
    let parentElement = document.querySelector(targetElement);

    btn.addEventListener(event, () => {
        parentElement.classList.toggle(classToToggle);
    });

}

toggleClass('.nav-toggle', '.navbar', '-translate-x-full');
toggleClass('.search-toggle', '.search-bar-container', 'hidden');

dropdownToggleBtn.addEventListener('click', () => {
    dropodownIcon = dropdownToggleBtn.childNodes[1].classList;

    if (dropodownIcon.contains('fi-rr-caret-down')) {
        dropodownIcon.replace('fi-rr-caret-down', 'fi-rr-caret-up');
    } else {
        dropodownIcon.replace('fi-rr-caret-up', 'fi-rr-caret-down');
    }

    dropdownContainer.classList.toggle('hidden');

});

function showTransferModeFields () {

    let selected = document.querySelector('.select-transfer-mode');
    let targetField = document.getElementById(selected.value);

    let options  = [...selected.options].map(option => {
        let optionsList = document.getElementById(option.value);
        optionsList.classList.replace('flex', 'hidden');
        targetField.classList.replace('hidden', 'flex');
    });

}