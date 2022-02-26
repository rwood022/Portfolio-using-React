import React from 'react';
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  headerStyle: {
    background: 'orange',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Hi. I'm Rebecca</h1>
    </header>
  );
}

export default Header;
