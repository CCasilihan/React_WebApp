import React from "react";
import './samples.js';

const WebpageSample = () => {
  const containerStyles = {
    position: 'relative',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
    // backgroundColor: '#333', // Change background color
  };

  const overlayStyles = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
    fontSize: '30rem', // Increase font size to 20rem
    fontFamily: 'Arial, sans-serif', // Change font family
    animation: 'fadeInDown 10s ease-out', // Add animation for the overlay
  };
  

  const headingStyles = {
    fontSize: '3rem',
    marginBottom: '20px',
    fontFamily: 'Impact, sans-serif', // Change font family
    animation: 'fadeInUp 10s ease-out', // Add animation for the heading
  };

  const paragraphStyles = {
    fontSize: '1.5rem',
    maxWidth: '500px',
    margin: '0 auto 30px',
    fontFamily: 'Verdana, sans-serif', // Change font family
    animation: 'fadeInUp 10s ease-out', // Add animation for the paragraph
  };

  // const buttonStyles = {
  //   padding: '10px 20px',
  //   borderRadius: '5px',
  //   background: 'linear-gradient(to right, #4CAF50, #3BAA68)',
  //   border: 'none',
  //   color: 'white',
  //   fontSize: '1.2rem',
  //   cursor: 'pointer',
  //   textDecoration: 'none', // Remove underline
  //   fontFamily: 'Courier New, monospace', // Change font family
  //   animation: 'fadeInUp 1s ease-out', // Add animation for the button
  //   display: 'block', // Make button a block element
  //   margin: '0 auto', // Center the button horizontally
  //   maxWidth: '200px', // Limit button width
  // };

  return (
    <div style={containerStyles}>
      <div style={overlayStyles}>
        <h1 style={headingStyles}>Hi, I am Charisse Casilihan</h1>
        <p style={paragraphStyles}>Photography makes us happy. Let's take a shot! 
        <br></br><br></br></p>
        {/* <p style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: '18px', color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        This webpage offers a glimpse into my world, passions, and interests, 
          featuring articles on technology, creativity, and personal anecdotes. 
          Join me on a virtual adventure to explore knowledge and imagination.
        </p> */}
        {/* <a href="/samples" style={buttonStyles}>View Samples</a> */}
      </div>
    </div>
  );
};

export default WebpageSample;
