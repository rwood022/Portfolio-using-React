import React from 'react';
import "../styles/AboutMe.css";

export default function AboutMe() {
    const welcome = "Welcome to My Portfolio!";
    return (
      <div className="about-me">
        <h2>{welcome}</h2>
        <p>
        I am a Chicago native, currently residing in Atlanta, GA. 
        </p>
        <p>I am a candidate at Georgia Institute of Techniology. I have developed this portfolio to showcase my new found passion for Web Development. I would like to thank you for taking the time to view my portfolio. Enjoy!
        </p>
    
      </div>
    );
}

