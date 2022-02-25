// titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
      <a href="/">About Me</a>
      <a href="/">Portfolio</a>
      <a href="/">Contact</a>
      <a href="/">Resume</a>
    </nav>
  );
}

export default Navbar;
// click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

// loading the page will the About me section (pic and bio)

//portfolio page 6 apps with images that link to deployed sites

// contact section- contact form with name and email message, alert that the field needs entry

//resume - link to dowloadable resume and list of proficiencies

