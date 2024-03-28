import './StayConnected.css';

import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const posts = [
    {image:'posters/MorganStanley2.jpg',link:'https://bit.ly/SBCSxMorganStanley'},
    {image:'posters/GoogleFieldTrip.png',link:'https://news.stonybrook.edu/university/bridging-dreams-stony-brook-computing-society-spends-a-day-at-google/'},
    {image:'posters/AWSBootcamp.jpg',link:'https://www.instagram.com/p/C2dguN5uv8B/'},
    {image:'posters/starstruck_startups.png',link:'https://www.instagram.com/p/C3biatPOyN_/'},
    {image:'posters/ProfilePrep.png',link:'https://www.instagram.com/p/C36eNyetJq8/?img_index=1'},
    {image:'posters/MousepadPainting.jpg',link:'https://www.instagram.com/p/CxHbXORO-xz/'},
];

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