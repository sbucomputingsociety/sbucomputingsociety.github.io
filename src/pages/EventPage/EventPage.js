import './EventPage.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import PastEventCard from './PastEventCard';
import UpcomingEventCard from './UpcomingEventCard';


import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

/** Format for upcoming events:
 *      title: '',
 *      image: '',
 *      date: '',
 *      location: '',
 *      description: '', (optional)
 * 
 */
const upcomingEvents =[
    {
        title: "Morgan Stanley",
        image: "posters/MorganStanley2.jpg",
        date: "April 4th, 5:30PM - 7PM",
        location: "SAC 306",
    },
    
]

const pastEvents = [
    {image: 'posters/GeekGames.png'},
    {image: 'posters/ProfilePrep.png'},
    {image: 'posters/GoogleFieldTrip.png'},
    {image: 'posters/AWSBootcamp.jpg'},
    {image: 'posters/starstruck_startups.png'},
    {image: 'posters/DuckPainting.jpg'},
    {image: 'posters/MorganStanley.jpg'},
    {image: 'posters/TechnicalInterview.jpg'},
    {image: 'posters/ProjectWednesday.jpg'},
    {image: 'posters/ML.png'},
    {image: 'posters/ResumeReview.png'},
    {image: 'posters/Metaverse.png'},
    {image: 'posters/Smores2_1_23.png'},
    {image: 'posters/API2_15_23.png'},
    {image: 'posters/gitworkshop_11_30_22.png'},
    {image: 'posters/Technical_Interviews_Pt._2_2.png'},
    {image: 'posters/CodingContest_10_28_2022.png'},
    {image: 'posters/Landing_internships_for_dummies_10_5_2022.jpg'},
    {image: 'posters/careerfairprep.png'},
    {image: 'posters/Intro_to_web_dev_9_28_2022.png'},
    {image: 'posters/datasciencehackathonapril2022.png'},
]

function EventPage(props) {

    useEffect(() => {
        Aos.init({duration: 800});
    }, []);

    return (
        <div className="App">
            <NavBar></NavBar>

            {/* upcoming events */}
            <h2 className="event-page-title">Upcoming Events</h2>
            <hr className="solid"></hr>
            <div className="p-upcoming-events" data-aos="fade-up">
                {upcomingEvents.length === 0 ? 
                <p style = {{fontSize: 30}}>Sorry, no events here! Wait for the Spring 2024 Semester!</p> :
                upcomingEvents.map(i => (
                    <UpcomingEventCard
                        image={i.image}
                        title={i.title}
                        date={i.date}
                        location={i.location}
                        description={i.description}
                    />
                ))} 
            </div>
            
            {/* past events */}
            <h2 className="event-page-title">Past Events</h2>
            <hr className="solid"></hr>
            <div className="past-events" data-aos="fade-up">
                {pastEvents.map(i => (
                    <PastEventCard
                        image={i.image}
                    />
                ))} 
            </div>

            <Footer></Footer>
        </div>
    )
}

export default EventPage;
