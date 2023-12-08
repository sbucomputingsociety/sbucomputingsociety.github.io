import './StayConnected.css';

import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const posts = [
    {image:'posters/HotTopics.jpg',link:'https://www.instagram.com/p/C0VQCgPthT4/'},
    {image:'posters/TechnicalInterview.jpg',link:'https://www.instagram.com/p/CzCsRtMOFNd/'},
    {image:'posters/ProjectWednesday.jpg',link:'https://www.instagram.com/p/Cyys3pSuJH0/'},
    {image:'posters/ResumeReview.png',link:'https://www.instagram.com/p/Cxby8GStjK9/'},
    {image:'posters/Metaverse.png',link:'https://www.instagram.com/p/Cw3bO87vKzD/'},
    {image:'posters/MousepadPainting.jpg',link:'https://www.instagram.com/p/CxHbXORO-xz/'},
]

function StayConnected(){
    useEffect(() => {
        Aos.init({duration: 750});
    }, []);
    return(
        <div className="stay-connected-box">
            <h1 className="sec-title">Stay Connected</h1>
            <h4 className ="text-xl text-black">Follow us on Instagram and join our discord server to get updated on our events, programs, and resources</h4>
            <div className="post-box-bg">
                <div className="post-box">
                    {posts.map(i => (
                        <div className="each-post" data-aos="fade-up">
                            <a href={i.link} target="_blank" rel="noopener noreferrer">
                                <img className="post-pic" src={i.image} alt='posts'/>
                            </a>
                        </div>
                    ))} 
                </div>
            </div> 
        </div>

    );
}

export default StayConnected;