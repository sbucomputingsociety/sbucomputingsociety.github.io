import './AboutUs.css';
import TeamPicSlider from './TeamPicSlider';
import { HashLink } from 'react-router-hash-link';

// club initiative stuff
import InitCards from './InitCards';
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const inits = [
    {
        image: 'posters/ML.png',
        title: 'Technical Workshops',
        description: 'Led by E-Board members, these workshops introduce key programming concepts and technical skills for career success.'
    },
    {
        image: 'posters/ResumeReview.png',
        title: 'Career Planning',
        description: "SBCS hosts career events to improve resumes, learn about the tech industry, and connect them with potential employers."
    },
    {
        image: 'posters/DailyProgramming.jpg',
        title: 'Club Events',
        description: 'We manage many events and activities to build a close community of members like competitions, daily programming exercises, socials, and more!'
    },
]
//------------------------------------------

function AboutUs() {

    useEffect(() => {
        Aos.init({duration: 780});
    }, []);

    return(
        <div>
            <div className="about-us-container">
                <TeamPicSlider className="team-pic"></TeamPicSlider>
                <div className="text-box">
                    <h3 className="about-us-title">About Us</h3>
                    <h4 className="about-us-para">At SBCS, we help to create a welcoming and fun environment for anyone interested in computer science. As an official chapter of the Association for Computing Machinery, we strive to share both educational resources and professional networking opportunities with our members, such as technical workshops and company events. </h4>
                    <div className="about-us-btn-box">
                        <HashLink className="about-us-btn" smooth to='#jump'>Our Initiatives</HashLink>
                    </div>
                </div>
            </div>


            {/* club initiative stuff */}
            <div className="divider-ylw"></div>
            <div className="divider-ylw"></div>

            <div className="init-outer" id='jump'>
                <div className="init-container" data-aos="fade-up">
                    {inits.map(i => (
                        <InitCards 
                            image={i.image}
                            title={i.title}
                            description={i.description}
                        />
                    ))} 
                </div>
            </div>

            {/* ------------------------------------------ */}

        </div>
    );
}

export default AboutUs;