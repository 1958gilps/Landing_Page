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

function elementInViewport(element){
	// if element is currently on screen, return true
  	// if it isn't, return false
  	const rect = element.getBoundingClientRect(),
          viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top > viewHeight);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
    // find each nav section
for (let i = 0; i < navSection.length; i++) {
    // # of nav section
    const eachSection = navSection[i];
    // get the hyperlink names
    const linkName = (eachSection.querySelector('h2')).textContent;
    // build the anchor tag
    const linkAnchor = document.createElement('a');
    // reference each anchor tag
    linkAnchor.href = `#${eachSection.id}`;
    // give the hyperlinks a name
    linkAnchor.textContent = linkName;
    
    // build the unordered list
    const newList = document.createElement('li');
    
    // build and append the anchor(s)
    newList.appendChild(linkAnchor);
    navList.appendChild(newList);
    // add the scroll function
    linkAnchor.addEventListener('click', addScroll );
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function addScroll(event){
    event.preventDefault();
    // get the anchor clicked on
    let a = event.target; 
    // get the href of the anchor
    let href = a.getAttribute('href');
    // get the section from the href
    let section = document.querySelector(href);
    // get the top of that section href.section
    let sectionTop = section.offsetTop;
    scrollTo({
        top: sectionTop,
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


// use line 98 or 99 but not both...
// function sectionsInViewport(){
const sectionsInViewport = () => {
  	// get all sections
  	const sections = document.querySelectorAll("section");
	// loop through each section, one at a time
  	for (let i=0; i<sections.length; i++){
      	// get current section from loop
      	let section = sections[i];
      	// is section in viewport?
      	if (elementInViewport(section)){
            // section is in viewport, add "active" class to it (using classlist)
          	section.classList.add("inViewport");
        }
      	else {
            // section is NOT in viewport, remove "active" class to it (using classlist)
          	section.classList.remove("inViewport");
        }
    }
};

// listen for scroll events and call sectionsInViewport function
window.addEventListener("scroll", sectionsInViewport);
window.addEventListener("scroll", showHideNavigation);

let debouncer;

function showHideNavigation(){
    const header = document.querySelector('header');
    header.classList.remove('notscroll');
    debouncer = setTimeout(()=>{
        header.classList.add('notscroll');
    }, 10000);
}