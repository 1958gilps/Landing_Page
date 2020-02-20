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


 // Define Global Variables 
 const navHeading = document.querySelector('#navbar__list');
 const navSection = document.getElementsByTagName('section');
 const myFragment = document.createDocumentFragment();
 
 // helper function to determine if the element is in the window

 
 // build the nav
 for (let i = 0; i < navSection.length; i++) {
    const eachSection = navSection[i];

    const navTop = (eachSection.querySelector('h2')).innerText
    const anchor = document.createElement('a')
    anchor.href = `#${eachSection.id}`;
    anchor.innerText = navTop;

    const newNav = document.createElement('li');
    newNav.appendChild(anchor)
    navHeading.appendChild(newNav)

}
 
// Add class 'active' to section if the section is in the window, remove it when the section is out of the window

 // object.addEventListener("resize", myScript)
 
 // Scroll to anchor ID using scrollTO event

 
 
 //reload the page when the viewport is resized so that the getBoundingClientRect can be calculated properly
 