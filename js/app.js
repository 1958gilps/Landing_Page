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
// find navbar__List and assign it to navList
const navList = document.querySelector('#navbar__list');
//console.log(navList);
//find all the section(s) with lots of info and assign to navSection
const navSection = document.getElementsByTagName('section');
//console.log(navSection);
//const myFragment = document.createDocumentFragment();

//console.log(navList)
//console.log(navSection)

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
    // discover how many sections
for (let i = 0; i < navSection.length; i++) {
    //console.log(navSection.section2);
    // discover section(s) info and assign to eachSection
    const eachSection = navSection[i];
    //console.log(eachSection);
    // get the section names
    const linkName = (eachSection.querySelector('h2')).textContent;
    //console.log(linkName);
    // build the anchor tag
    const linkAnchor = document.createElement('a');
    //console.log(linkAnchor);
    // discover each anchor url
    linkAnchor.href = `#${eachSection.id}`;
    //console.log(linkAnchor.href);
    // give the hyperlinks a name
    linkAnchor.textContent = linkName;
    //console.log(linkAnchor.textContent);
    // build the unordered list
    const newList = document.createElement('li');
    //console.log(newList);
    // build and append the anchor(s)
    newList.appendChild(linkAnchor);
    //console.log(linkAnchor);
    //console.log(newList);
    //console.log(navList);
    navList.appendChild(newList);
    //console.log(newList);
    //console.log(linkAnchor);
    //console.log(navList);
    // add the scroll function
    linkAnchor.addEventListener('click', addScroll );
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function addScroll(event){
    event.preventDefault();
    console.log(event);
    // get the anchor clicked on
    let a = event.target;
    //console.log(a);
    // get the href of the anchor
    let href = a.getAttribute('href');
    //console.log(href);
    //console.log(href);
    // get the section from the href
    let section = document.querySelector(href);
    //console.log(section);
    // get the top of that section href.section
    //console.log(section);
    let scrollTop = section.offsetTop;
    //console.log(sectionTop);
    scrollTo({
        top: scrollTop,
        behavior: 'smooth'
    })
}



//kg 3-1-2020
// highlight current tab


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// highlight navbar



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
window.addEventListener("click", showHideNavigation);

let debouncer;

function showHideNavigation(){
    const header = document.querySelector('header');
    header.classList.remove('notscroll');
    debouncer = setTimeout(()=>{
        header.classList.add('notscroll');
    }, 20000);
}