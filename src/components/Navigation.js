import React from 'react';
// import './AboutMe';
// import '../styles/Navigation.css';

// TODO: Create a styles object called "styles"
// const styles = {
//   navbarStyle: {
//     background: 'orange',
//     justifyContent: 'flex-end',
//   },
// };


function Navigation() {
  // TODO: Add a style attribute to `nav`
  return (
    <div>
      <button type="button">About Me</button>
      <button type="button">Projects</button>
      <button type="button">Contact</button>
      <button type="button">Resume</button>
    </div>
      
      // // {/* <button type="button" onClick={displayProjects}>Projects</button>
      // <button type="button" onClick={displayContact}>Contact</button>
      // <button type="button" onClick={displayResume}>Resume</button> */}
  );
}

export default Navigation;
// click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

// loading the page will the About me section (pic and bio)

//portfolio page 6 apps with images that link to deployed sites

// contact section- contact form with name and email message, alert that the field needs entry

//resume - link to dowloadable resume and list of proficiencies

