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
        link: '#',
        image: 'posters/GBM_1_Intro_9_14_2022.jpg',
        title: 'Technical Workshops',
        description: 'Led by eboard memebrs, these meetings introduce cs concepts and skillsets relavent to career success.'
    },
    {
        link: '#',
        image: 'posters/SBCS_Mentorship_Program_Flyer.png',
        title: 'Special Programs',
        description: 'Striving to share resources, we offer mentorships that connect members with experienced alumini.'
    },
    {
        link: '#',
        image: 'pictures/gallary/Roth3.jpg',
        title: 'Club Events',
        description: 'SBCS work with clubs and faculty members to host guest speakers, competitions, socials, and more!'
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
                    <h4 className="about-us-para">At SBCS, we hope to create a welcoming and fun environment for anyone interested in computer science. As an official chapter of the Association for Computing Machinery, the world's largest educational and scientific computing society, we strive to share both educational resources and professional networking opportunities with our members. </h4>
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