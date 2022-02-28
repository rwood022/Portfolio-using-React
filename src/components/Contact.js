import React from "react";

export default function Contact() {
    // card for name, email and description
    const styles = {
        contactStyle: {
          color: "white",
          justifyContent: 'center',
          background: "#e5989b",
        },
      };
    return(
        <div style={styles.contactStyle} className="contact">
            <h2>Please contact me for more info!</h2>
        </div>
    );
}