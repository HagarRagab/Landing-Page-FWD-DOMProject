// Select ul by its id
const navBar = document.getElementById("navbar__list");
const myMain = document.querySelector("main");
const pageHeader = document.querySelector(".page__header");

/* This function use to 
    - Empty navBar from any li elment to prevent duplicate anchors when we create new section.
    - create li in nav bar when we start the page and when we create new section
    - Loop on all section and connect the section with its anchor 
*/
function navBarAndClasses () {
    const allSections = document.querySelectorAll("section");
    // To empty navBar form any li when create new section button is clicked
    navBar.innerHTML = "";
    // ForEach loop on all sections and hold each section to make its anchor inside navbar  
    allSections.forEach(section => {
        // Create li for each section and set its attributes
        const createLi = document.createElement("li");
        const createAnchor = document.createElement("a");
        createAnchor.className = "menu__link";
        createAnchor.href = `#${section.id}`;
        createAnchor.textContent = section.dataset.nav;
        createLi.appendChild(createAnchor);
        myDocFrag.appendChild(createLi);
        addAndRomoveClasses(section, createAnchor);
        window.addEventListener("scroll", () => {
            addAndRomoveClasses(section, createAnchor);
        });
    });
    navBar.appendChild(myDocFrag);
}

// This function to add and remove active/highlight class from section/link when the section is fully shown in the viewport 
function addAndRomoveClasses(section, anchor) {
    // The constant distance between each section and the beginning of the page
    let sectionTop = section.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY >= sectionTop - 200 && window.scrollY <= sectionTop + 200) {
        section.classList.add("active");
        // The highlight class has been added in css file
        anchor.classList.add("highlight"); 
    } else {
        section.classList.remove("active");
        anchor.classList.remove("highlight");
    }
}

// Create navigation bar
// We create document fragment to store li elments then append myDocFrag to navBar
const myDocFrag = document.createDocumentFragment();

// Create new section dynamically
// Create new section button
const createSectionButton = document.createElement("button");
createSectionButton.textContent = "Create new section";
createSectionButton.style.cssText = "width: fit-content ;font-weight: bold; background-color: black; color: white; padding: 10px;cursor: pointer"
pageHeader.appendChild(createSectionButton);
// This listener make a copy from the first section
let secCounter = 4;
createSectionButton.addEventListener("click", () => {
    const newSection = document.querySelector("section").cloneNode(true);
    newSection.id = `section${++secCounter}`;
    newSection.setAttribute("data-nav", `Section ${secCounter}`);
    newSection.children[0].children[0].textContent = `Section ${secCounter}`;
    myMain.appendChild(newSection);
    navBarAndClasses();
})
navBarAndClasses ();

// A smooth scrolling behavior when click on anchors in the nav bar
navBar.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.nodeName.toLowerCase() === "a") {
        document.querySelector(`${e.target.getAttribute("href")}`).scrollIntoView({behavior: "smooth", block: "start"});
        setTimeout(() => {
            location.hash = e.target.getAttribute("href");
        }, 400)
    }
})

// Add to top scroll button
const button = document.createElement("div");
const arrow = document.createElement("div");
button.style.cssText = "width: 50px; height: 50px;border-radius: 50%; background-color: #eee; position: fixed; bottom: 10px; right: 20px; display: none; align-items: center; justify-content: center; cursor: pointer";
arrow.style.cssText = "width: 10px; height: 10px; border: 5px solid transparent; border-color: grey transparent transparent grey; transform: translateY(5px) rotate(45deg) ";
button.appendChild(arrow);
document.body.appendChild(button);
// Hide and display button when scroll down and up
window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        button.style.display = "flex"
    } else {
        button.style.display = "none"
    }
})
// Go to the beginning of the page when button is clicked
button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})