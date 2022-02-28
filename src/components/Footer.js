import React from 'react';
import '../styles/Footer.css';

// text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
// contact section- contact form with name and email message, alert that the field needs entry

// const styles = {
//     footerStyle: {
//       background: 'blue',
//       justifyContent: 'flex-end',
//     },
//   };

  function Footer() {
    return (
      <div className="footer">
        <button className='btn btn-info btn-block'><a href="/">rwood022@gmail.com</a></button> 
        <button className='btn btn-info btn-block'><a href="https://www.linkedin.com/in/dr-rebecca-wood-7a279846/">LinkedIn</a></button> 
        <button className='btn btn-info btn-block'><a href="https://github.com/rwood022">GitHub</a></button> 
      </div>
    );
  }


export default Footer;