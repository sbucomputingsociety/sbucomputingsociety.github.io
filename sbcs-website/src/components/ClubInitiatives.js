import './ClubInitiatives.css';
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

function ClubInitiatives(){

    useEffect(() => {
        Aos.init({duration: 780});
    }, []);

    return(
        <div className="init-outer">
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
    )
}

export default ClubInitiatives;