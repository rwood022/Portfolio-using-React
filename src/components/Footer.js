import React from 'react';
import '../styles/Footer.css';

// text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

const styles = {
    footerStyle: {
      background: 'blue',
      justifyContent: 'flex-end',
    },
  };

  function Footer() {
    return (
      <nav style={styles.footerStyle} className="footer">
        <a href="/">Welcome</a>
      </nav>
    );
  }


export default Footer;