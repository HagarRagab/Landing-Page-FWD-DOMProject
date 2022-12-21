<h1>Landing Page Project</h1>

<h2>Table of Contents</h2>

* [Instructions](#Instructions)
* [Description](#Description)

<h2>Instructions</h2>
<h3>Main features</h3>
<ul>
    <ul>A smooth scrolling behavior when click on anchors in the nav bar
        <li>Using *<em>scrollIntoView</em>.</li>
        <li>Set location.hash equal anchor's href attribute.</li>
    </ul>
    <ul>Creating a new section dynamically
        <li>creating a button that make a new section by cloning and set attributes of the new one.</li>
        <li>"secCounter" is a variable initialize with 4 and increment by one every time we click the button.</li>
        <li>We use this counter to set the attributes of the new section.</li>
    </ul>
</ul>
<h3>Additional features</h3>
<ul>
    <h4># To top scroll button</h4>
        <li>The button show when the window reach to 500px height.</li>
        <li>Adding click event when we click the button and use window.scrollTop to define top = 0.</li>
</ul>
<h2>Description</h2>
<ul>
    <h4># The navBarAndClasses function use to</h4>
        <li>Empting navBar from any li elment to prevent duplicate anchors when we create new section.</li>
        <li>Creating li in a nav bar when we start the page and when we create new section.</li>
        <li>Looping on all sections and connect the section's id attribute with the anchor's href attribute.</li>
</ul>
<ul>
    <h4># The addAndRomoveClasses function use to</h4>
        <li>Adding <em>active</em> class to each section when it is fully showen in viewport.</li>
        <li>Adding <em>highlight</em> class on selected link.</li>
</ul>
