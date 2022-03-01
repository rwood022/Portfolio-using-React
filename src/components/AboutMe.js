import React from 'react';
import "../styles/AboutMe.css";
import ProfilePic from "../images/aqJLtUfw.jpeg";

export default function AboutMe() {
    const welcome = "Welcome to My Portfolio!";
    return (
      <div className="about-me">
        
        <div>
        <h2>{welcome}</h2>
        <p>
        I am a Chicago native, currently residing in Atlanta, GA. 
        </p>
        <p>I am currently a student at Georgia Institute of Techniology Full-Stack Web Development Bootcamp. I have developed this portfolio to showcase my new found passion for Web Development. I would like to thank you for taking the time to view my portfolio. Enjoy!
        </p>
        </div>
        <div>
            <img id="profilepic" src={ProfilePic} alt="profile pic"/>
        </div>
      </div>
    );
}

