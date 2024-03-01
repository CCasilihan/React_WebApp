import * as React from "react";
//import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/marga.JPG';
import img2 from './images/lils4.jpg';
import img3 from './images/nonoy.JPG';
import img4 from './images/sunset.jpg';
import img5 from './images/snow.JPG';
import img6 from './images/dogie.jpg';
import img7 from './images/tito.JPG';
import img8 from './images/camera.jpg';
// import img9 from './images/cam1.jpg';
import img10 from './images/bird.JPG';
import './App';
//import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function About() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="content" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'grayscale(100%)', padding: '20px', borderRadius: '10px' }}>
            <h1>My Experience in Capturing Pictures</h1>
            <p>
            As a photographer, it's not just about snapping pictures. It's about capturing special moments,
             telling stories, and showing your unique style through photos. To be good at it, you need to 
             pay attention to small details, like how the light hits your subject, and learn how to use your camera really well. 
            Also, it's important to always be creative and look for new ways to make your photos stand out.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ marginLeft: 'auto', marginRight: '100px' }}>
        <img src={img8} alt="Elementary School" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
    </div>
</div>

  <div style={{ marginLeft: '50px', color: 'white', font: 'italic', textAlign: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'grayscale(100%)', }}>
    <p> I am a third-year college student pursuing a Bachelor of Science in Computer Science at Naga College Foundation. 
        Currently, I reside in San Fernando, Camarines Sur.</p>
</div>

</div>

      <div style={{ marginTop: '50px' }}>
      <h2 className="title" style={{ border: '1px solid lightgray', borderRadius: '10px', 
      boxShadow: '4px 4px 9px rgba(0, 0, 0, 0.3)', padding: '10px', textAlign: 'center', color: 'white' }}>
  Here are Some of My Shots
</h2>

    </div>

    <div className="row">
  <div className="col">
    <div className="image-container">
      <img src={img1} alt="" className="image" />
      <h3 className="image-caption">Birthday Pictorial</h3>
    </div>
  </div>
  <div className="col">
    <div className="image-container">
      <img src={img2} alt="" className="image" />
      <h3 className="image-caption">Graduation</h3>
    </div>
  </div>
  <div className="col">
    <div className="image-container">
      <img src={img3} alt="" className="image" />
      <h3 className="image-caption">Months Celebration</h3>
    </div>
  </div>
  <div className="col">
    <div className="image-container">
      <img src={img4} alt="" className="image" />
      <h3 className="image-caption">sunset</h3>
    </div>
  </div>
  <div className="col">
    <div className="image-container">
      <img src={img5} alt="" className="image" />
      <h3 className="image-caption">Snow</h3>
    </div>
  </div>
  <div className="col">
    <div className="image-container">
      <img src={img6} alt="" className="image" />
      <h3 className="image-caption">Dogie</h3>
    </div>
  </div>
  <div className="col">
    <div className="image-container">
      <img src={img7} alt="" className="image" />
      <h3 className="image-caption">Shower</h3>
    </div>
  </div>
  <div className="col">
    <div className="image-container">
      <img src={img10} alt="" className="image" />
      <h3 className="image-caption">Love Birds</h3>
    </div>
  </div>
  {/* <!-- Repeat the same structure for other images --> */}
</div>


      {/* <div className="row">
        <div className="col">
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={img1} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', textAlign: 'center' }}> </h3> */}
            {/* <p style={{ marginTop: '10px', textAlign: 'center', fontFamily: "Courier New" }}>
            I am a third-year college student pursuing a Bachelor of Science in Computer Science at Naga College Foundation. 
            Currently, I reside in San Fernando, Camarines Sur.</p> */}
          {/* </div>
        </div>
        <div className="col">
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={img2} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', textAlign: 'center' }}> </h3> */}
            {/* <p style={{ marginTop: '10px', textAlign: 'center', fontFamily: "Courier New" }}>
            "I am the firstborn of Mr. and Mrs. Richard Casilihan, Lorna Casilihan, and 
            I have two handsome brothers named Richmond Jay and Leonard Casilihan</p> */}
          {/* </div>
        </div>

        <div className="col">
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={img3} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', textAlign: 'center' }}> </h3> */}
            {/* <p style={{ marginTop: '10px', textAlign: 'center', fontFamily: "Courier New" }}>
            I am a Lola's girl because she has taken care of me since birth, and I love her so much.</p> */}
          {/* </div>
        </div>

        <div className="col">
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={img4} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', textAlign: 'center' }}> </h3> */}
            {/* <p style={{ marginTop: '10px', textAlign: 'center', fontFamily: "Courier New" }}>
            I like biking every day because it allows me to stay active and enjoy the outdoors. Additionally, cycling helps me maintain 
            my physical fitness and clears my mind after a long day of study</p> */}
          {/* </div>
        </div>

        <div className="col">
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={img5} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', textAlign: 'center' }}> </h3> */}
            {/* <p style={{ marginTop: '10px', textAlign: 'center', fontFamily: "Courier New" }}>
            I also love riding a motorbike to relax from schoolwork and enjoy life.</p> */}
          {/* </div>
        </div>

        <div className="col">
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={img6} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', textAlign: 'center' }}> </h3> */}
            {/* <p style={{ marginTop: '10px', textAlign: 'center', fontFamily: "Courier New" }}>
            Last December 2023, I was elected as the President of our zone in Barangay, 
            tasked with leading and encouraging the youth in Zone 2 to be active.</p> */}
          {/* </div>
        </div>

        <div className="col">
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={img7} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', textAlign: 'center' }}> </h3> */}
            {/* <p style={{ marginTop: '10px', textAlign: 'center', fontFamily: "Courier New" }}>
            Last December 2023, I was elected as the President of our zone in Barangay, 
            tasked with leading and encouraging the youth in Zone 2 to be active.</p> */}
          {/* </div>
        </div> */}

      </div>
    
  );
}

export default About;
