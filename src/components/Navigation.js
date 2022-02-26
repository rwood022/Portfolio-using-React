// titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
      <button type="button" onClick={displayAboutMe}>About Me</button>
      <button type="button" onClick={displayProjects}>Projects</button>
      <button type="button" onClick={displayContact}>Contact</button>
      <button type="button" onClick={displayResume}>Resume</button>
    </nav>
  );
}

export default Navbar;
// click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

// loading the page will the About me section (pic and bio)

//portfolio page 6 apps with images that link to deployed sites

// contact section- contact form with name and email message, alert that the field needs entry

//resume - link to dowloadable resume and list of proficiencies

