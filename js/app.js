/*
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
const navList = document.querySelector('#navbar__list'); // find navbar__List and assign it to navList
const navSection = document.getElementsByTagName('section'); //find all the section(s) with lots of info and assign to navSection
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
    for (let i = 0; i < navSection.length; i++) { // discover how many sections
    const eachSection = navSection[i]; // discover section(s) info and assign to eachSection
    const linkName = (eachSection.querySelector('h2')).textContent; // get the section names
    const linkAnchor = document.createElement('a'); // build the anchor tag
    linkAnchor.href = `#${eachSection.id}`; // discover each anchor url
    linkAnchor.textContent = linkName; // give the hyperlinks a name
    const newList = document.createElement('li'); // build the unordered list
    const newItem = 'nav-link' + i; // add ID
    newList.setAttribute('id', newItem); // set new ID
    newList.setAttribute('class', 'menu__link'); // link the ccs
    newList.appendChild(linkAnchor); // build and append the anchor(s)
    navList.appendChild(newList);
    linkAnchor.addEventListener('click', addScroll ); // add the scroll function
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
function addScroll(event){
    event.preventDefault(); // prevent the click from completing
    let a = event.target; // get the anchor clicked on
    let href = a.getAttribute('href'); // get the href of the anchor
    let section = document.querySelector(href); // get the section from the href
    let scrollTop = section.offsetTop; // get the top of that section href.section
;
    scrollTo({
        top: scrollTop,
        behavior: 'smooth'
    })
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// highlight navbar

const sectionsInViewport = () => {
  	const sections = document.querySelectorAll("section"); // get all sections
  	for (let i=0; i<sections.length; i++){ // loop through each section, one at a time
      	let section = sections[i]; // get current section from loop
      	if (elementInViewport(section)){ // is section in viewport?
            section.classList.add("inViewport");  // section is in viewport, add "active" class to it (using classlist)
        }
      	else {
            section.classList.remove("inViewport"); // section is NOT in viewport, remove "active" class to it (using classlist)
        }
    }
};

function elementInViewport(element){
	// if element is currently on screen, return true
  	// if it isn't, return false
  	const rect = element.getBoundingClientRect(),
          viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top > viewHeight);
}

// listen for scroll events and call sectionsInViewport function
window.addEventListener("scroll", sectionsInViewport);


let debouncer;
function showHideNavigation(){
    const header = document.querySelector('header');
    header.classList.remove('notscroll');
    debouncer = setTimeout(()=>{
        header.classList.add('notscroll');
    }, 2000);
}
