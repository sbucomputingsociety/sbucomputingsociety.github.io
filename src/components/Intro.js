import './Intro.css';

import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function Intro() {

    useEffect(() => {
        Aos.init({duration: 800});
    }, []);
    
    return(
        <div className="outer">
            <div className="moving-container" >
                <div className="intro-text" data-aos="fade-right">
                    <h1 className="sbcs-intro">We are the <span className="sbcs-intro-bold">Stony Brook Computing Society</span> _</h1>
                    <h4 className="sbcs-description">The Stony Brook Computing Society is a student organization at Stony Brook University created for all students who are interested in programming, computers, and related technology.</h4>
                    {/* <a className="py-3 px-7 mr-auto text-2xl font-bold border-5 bg-main-gray border-black inline-block leading-tight shadow-md hover:bg-hover-gray hover:shadow-lg focus:bg-hover-gray focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hover-gray active:shadow-lg transition duration-150 ease-in-out" href="/#">Get Involved</a> */}
                    <button className="get-involved-btn">Get Involved</button>
                </div>
                <img className="computer-logo" src="logos/web-logo-b-cropped.png" alt="logo" data-aos="fade-up"></img>
            </div>
            
        </div>
    )
}

export default Intro;