import React from 'react';
import './AboutMe';
import './Project';
import './Contact';
import './Resume';
import '../styles/Navigation.css';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

// TODO: Create a styles object called "styles"
const styles = {
  navigationStyle: {
    color: "white",
    justifyContent: 'center',
  },
};


function Navigation({ currentPage, handlePageChange}) {

  return (
    <ul style={styles.navigationStyle} className="navigation-tabs">
      <ol className="navigation-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'AboutMe' ? 'navigation-link active' : 'navigation-link'}
        >
          About Me
        </a>
      </ol>
       <ol className="navigation-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'navigation-link active' : 'navigation-link'}
        >
          Projects
        </a>
      </ol>
      <ol className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '' ? 'navigation-link active' : 'navigation-link'}
        >
          Contact
        </a>
      </ol>
      <ol className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'navigation-link active' : 'navigation-link'}
        >
          Resume
        </a>
      </ol>
     
     </ul>
      
  );
}

export default Navigation;
// click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

// loading the page will the About me section (pic and bio)

//portfolio page 6 apps with images that link to deployed sites

// contact section- contact form with name and email message, alert that the field needs entry

//resume - link to dowloadable resume and list of proficiencies

