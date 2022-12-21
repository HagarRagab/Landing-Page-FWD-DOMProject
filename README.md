<h1>Landing Page Project</h1>

<h2>Table of Contents</h2>

* [Instructions](#Instructions)
* [Description](#Description)

<h2>Instructions</h2>
<h3>Main features</h3>
- A smooth scrolling behavior when click on anchors in the nav bar
    - Using *scrollIntoView*.
    - Set location.hash equal anchor's href attribute.
- Creating a **new section** dynamically
    - creating a button that make a new section by cloning and set attributes of the new one .
    - "secCounter" is a variable initialize with 4 and increment by one every time we click the button.
    - We use this counter to set the attributes of the new section.
<h3>Additional features</h3>
- To top scroll button
    - The button show when the window reach to 500px height.
    - Adding click event when we click the button and use window.scrollTop to define top = 0.

<h2>Description</h2>
- The **navBarAndClasses** function use to 
    - Empting navBar from any li elment to prevent duplicate anchors when we create new section.
    - Creating li in a nav bar when we start the page and when we create new section.
    - Looping on all sections and connect the section's id attribute with the anchor's href attribute.
- The **addAndRomoveClasses** function use to
    - Adding *active* class to each section when it is fully showen in viewport.
    - Adding *highlight* class on selected link.
