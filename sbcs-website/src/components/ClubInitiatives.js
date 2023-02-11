import './ClubInitiatives.css';
import InitCards from './InitCards';

const inits = [
    {
        image: 'posters/GBM_1_Intro_9_14_2022.jpg',
        title: 'Technical Workshops',
        description: 'Led by eboard memebrs, these meetings introduce cs concepts and skillsets relavent to career success.'
    },
    {
        image: 'posters/SBCS_Mentorship_Program_Flyer.png',
        title: 'Initiatives',
        description: 'Striving to share valuable resources for Stony Brook students, we offer mentorships that connect members with experienced alumini.'
    },
    {
        image: 'pictures/gallary/Roth3.jpg',
        title: 'Social & Career Events',
        description: 'At SBCS, we collaborate with other clubs and faculty members to create guest speakers, coding competitions, fun socials, and more!'
    },
]

function ClubInitiatives(){

    return(
        <div>
            <div className="init-container">
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