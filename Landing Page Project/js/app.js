/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
let sectionNum = [];
let sectionHead = [];
let sectionTitle = [];

const sections = document.getElementsByTagName('section');
sectionTitle = document.getElementsByTagName('h2');
const navbar = document.getElementsByClassName('navbar__menu');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isElementInViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) 
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {
    navbar[0].children[0].style.textAlign = "center";    
}

// Add class 'active' to section when near top of viewport - see below section "Set sections as active"

// Scroll to anchor ID using scrollTO event

function createLinks() {
    for (i = 0; i < sections.length; i++) {
        sectionNum[i] = sections[i].id;
        sectionHead[i] = sectionTitle[i].innerHTML; // Creates text that will be used for anchor tag
        let list = document.createElement('li');
        let a = document.createElement('a');
        let label = document.createTextNode(`Jump to ${sectionHead[i]}`);
        a.appendChild(label);
        a.href = `#${sectionNum[i]}`;
        list.appendChild(a);
        navbar__list.appendChild(list);
        list.style.padding = '10px';
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

window.addEventListener("DOMContentLoaded", function () {
    createLinks();
    buildNav();
})

// Scroll to section on link click -- see above

// Set sections as active

window.addEventListener("scroll", function () {   
    for (let i = 0; i < sections.length; i++) {
        if (isElementInViewport(sections[i])) {
            sections[i].classList.add("active")
            sections[i].children[0].children[0].style.color = "red";

        } else {
            sections[i].classList.remove("active");
            sections[i].children[0].children[0].style.color = "black";

        }
    }
})