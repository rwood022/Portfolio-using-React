import React from 'react';
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
// const styles = {
//   headerStyle: {
//     background: 'orange',
//   },
//   headingStyle: {
//     fontSize: '100px',
//   },
// };

export default function Header() {
  // TODO: Add a style attribute to header and the h1 element
  const message = "Hi. I'm Rebecca.";

  return (
    <header className="header">
      <h1>{message}</h1>
    </header>
  );
}


