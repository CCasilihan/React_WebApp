import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import img7 from './images/cam.jpg';
// import img14 from './images/logocam.png';
// import img13 from './images/logocam.png';

function Home() {
  const arrowStyles = {
    color: 'black',
    fontSize: '50px',
    fontWeight: 'bold',
  };

  const imageStyles = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  };

  return (
    <>
      <Carousel fade prevIcon={<BsChevronLeft style={arrowStyles} />} nextIcon={<BsChevronRight style={arrowStyles} />}>
        <Carousel.Item>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', position: 'relative' }}>
              <img
                src={img7}
                alt="Welcome"
                style={{
                  ...imageStyles,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'grayscale(100%)',
                }}
              />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <p style={{ color: 'white', fontSize: '24px', fontFamily: 'italic', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Hi, I am Charisse Casilihan</p>
                <p style={{ color: 'white', fontSize: '20px', fontFamily: 'italic', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Photography makes us happy. Let's take a shot!</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div style={{ marginTop: '50px', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '10px' }} className="container">
        <h2 style={{ textAlign: 'center', fontFamily: 'italic', fontSize: '30px', color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Welcome to My Creative World
        </h2>
        <p style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: '18px', color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        This webpage offers a glimpse into my world, passions, and interests, 
          featuring articles on technology, creativity, and personal anecdotes. 
          Join me on a virtual adventure to explore knowledge and imagination.
        </p>
        {/* <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <img src={img14} alt="Logo" style={{ width: '30px', marginRight: '5px' }} />
          <span style={{ color: 'white', fontSize: '16px' }}>Zone 2, Beberon, San Fernando Camarines Sur, Philippines</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <img src={img13} alt="Logo" style={{ width: '15px', marginRight: '5px' }} />
          <span style={{ color: 'white', fontSize: '16px' }}>0994 922 4885</span>
        </div> */}
      </div>
    </>
  );
}

export default Home;
