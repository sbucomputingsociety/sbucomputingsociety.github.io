import './Intro.css';
import React from 'react';
import Typed from 'typed.js';

function Intro() {
    React.useEffect(() => {
      const typed = new Typed('.sbcs-intro', {
        strings: ['<span className="sbcs-intro-bold"> Hello World! :) </span>', 'We are the <span className="sbcs-intro-bold">Stony Brook Computing Society</span> _'],
        typeSpeed: 50,
        cursorChar: '',
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return(
        <div className="outer">
            <div className="moving-container">
                <div className="intro-text">
                    <span className="sbcs-intro"></span>
                    <h4 className="sbcs-description">We are a student organization at Stony Brook University created for all students who are interested in programming, computers, and related technology.</h4>
                    <a className="get-involved-btn" href="https://www.instagram.com/sbucomputingsociety/">Get Involved</a>
                </div>
                <img className="computer-logo" src="logos/web-logo-b-cropped.png" alt="logo"></img>
            </div>
            
        </div>
    )
}

export default Intro;