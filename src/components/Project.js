
// loading the page will the About me section (pic and bio)

//portfolio page 6 apps with images that link to deployed sites

// contact section- contact form with name and email message, alert that the field needs entry

//resume - link to dowloadable resume and list of proficiencies
import React from 'react';
// Here we import the Section.css file to grant access to some additional classNames
import '../styles/Project.css';

// TODO: Create a styles object called "styles"

function Project() {
  // TODO: Add a style attribute to `section`
  return (
    <section className="about-me">
      <h2>Welcome to My Portfolio!</h2>
      <p>
      I am a Chicago native, currently residing in Atlanta, GA. After working in the Chiropractic field for years, pursuing a doctorate degree in Chiropractic, and working in three different states; my perspective of my career changed. For those in the health industry, 2020 was our wake up call. I want to be apart of something that is rewarding, challenging, and evolving. I believe is have found that through web development.
      </p>
      <p>I am currently a candidate at Georgia Institute of Techniology. I have developed this portfolio to showcase my new found passion. I would like to thank you for taking the time to view my portfolio. Enjoy!
      </p>
  
    </section>
  );
}

export default Project;
