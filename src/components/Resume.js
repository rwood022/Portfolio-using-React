import React from "react";
import "../styles/Resume.css";
import ResumePdf from "../images/resume.pdf";

const styles = {
    resumeStyle: {
      color: "white",
      justifyContent: 'center',
      background: '#e5989b',
    },
  };

export default function Resume() {


    return (
        <div style={styles.resumeStyle}className="resume">
            <div>
                <p>Checkout my  
                    <a href="https://drive.google.com/file/d/1ywVmMcUWoEwYNN8E3wBXS9d3PkkNJO_M/view?usp=sharing" target="_blank" rel='noreferrer'>Resume</a>
                    {/* <a href={ResumePdf}> Resume</a> */}
                </p>
            </div>
           <ul>
            <h2>List of proficiencies </h2> 
          
            <ol>Javascript</ol>
            <ol>React</ol>
            <ol>Bootstrap</ol>
            <ol>HTML5</ol>
            <ol>CSS</ol>
            <ol>Redux</ol>
            <ol>Node.js</ol>
            <ol>Express</ol>
            <ol>VS Code</ol>
            <ol>Third-Party APIs</ol>
            <ol>Jest</ol>
            <ol>MongoDB</ol>
            <ol>MySql</ol>
            <ol>Sequelize</ol>
            <ol>GitHub</ol>
            <ol>Heroku</ol>
            <ol>Insomnia</ol>
            <ol>MERN</ol>
            <ol>Passport</ol>
            <ol>Graphql</ol>
           </ul>
        </div>
    );

}