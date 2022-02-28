import React from 'react';
// Here we import the Section.css file to grant access to some additional classNames
import '../styles/Project.css';

// TODO: Create a styles object called "styles"

function Project() {
  const cardStyle = {
    width: "18rem",
    
  }
  

  return (
  <div className="projects">
    <div className="card" style={cardStyle}>
      <button className='btn btn-info btn-block'><a href="https://rwood022.github.io/YouTube_Music_FInder/">NuMu.</a></button>
      <p className='card-text'>Randomized Music Video Generator * HTML, CSS, javascript, Bootstrap, API calls, jQuery, Tailwind.</p>
    </div>

    <div className="card" style={cardStyle}>
    <button className='btn btn-info btn-block'><a href="https://github.com/rwood022/Shelter_Match.git">ShelterMatch</a></button>
      <p className='card-text'>A full-stack application that matches the user to their perfect sheltered dog. * Node.js, Express, Handlerbars, MySQL, Sequelized, Passport.</p>
    </div>

    <div className="card" style={cardStyle}>
    <button className='btn btn-info btn-block'><a href="https://github.com/rwood022/Make_Me_READme.git">Make_Me_READme</a></button>
      <p className='card-text'>A faster, more effienct way to write a READme * Javascript, Node.js, TDD.</p>
    </div>

    <div className="card" style={cardStyle}>
    <button className='btn btn-info btn-block'><a href="https://rwood022.github.io/Take-on-the-Day-Scheduler/">Take_on_the_Day_Scheduler</a></button>
      <p className='card-text'>A work scheduler that keeps track of daily tasks. * HTML, CSS, Javascript, Bootstrap, jQuery</p>
    </div>

    <div className="card" style={cardStyle}>
    <button className='btn btn-info btn-block'><a href="https://github.com/rwood022/PWA-Text-Editor.git">PWA-Text-Editor</a></button>
      <p className='card-text'>A text editing Progressive Web Application, capable of installation on local computer. * Javascript, CSS, webpack configuration, service workers. </p>
    </div>

    
  </div>
  );
}

export default Project;


//portfolio page 6 apps with images that link to deployed sites


//resume - link to dowloadable resume and list of proficiencies
