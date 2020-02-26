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
 * 
*/
const navList = document.querySelector('#navbar__list');
const navSection = document.getElementsByTagName('section');
//const myFragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 0; i < navSection.length; i++) {
    const eachSection = navSection[i];
    const linkName = (eachSection.querySelector('h2')).textContent;
    const linkAnchor = document.createElement('a');
    
    linkAnchor.href = `#${eachSection.id}`;
    linkAnchor.textContent = linkName;
    
    const newList = document.createElement('li');
    
    newList.appendChild(linkAnchor);
    navList.appendChild(newList);
    linkAnchor.addEventListener('click', addScroll );
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function addScroll(event){
    console.log(event);
    event.preventDefault();
    // get the anchor clicked on
    let a = event.target; 
    // get the href of the anchor
    let href = a.getAttribute('href');
    console.log(href);
    // get the section from the href
    let section = document.querySelector(href);
    console.log(section);
    // get the top of that section href.section
    let sectionTop = section.offsetTop;
    scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    })
    console.log('Howdy !!! ');
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active