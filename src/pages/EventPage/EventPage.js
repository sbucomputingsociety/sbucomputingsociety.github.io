import './EventPage.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import PastEventCard from './PastEventCard';
import UpcomingEventCard from './UpcomingEventCard';


import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const upcomingEvents =[
    {
        title: 'Trivia Night',
        image: 'posters/TriviaNight.png',
        date: 'WEDS, Oct 11th, 2023 6:00PM - 7:00PM',
        location: 'NEW COMPUTER SCIECE 120',
        description: 'Join for a night of fun! Relax and social with other engineering students through SBCS! :)',
    },
    {
        title: 'Machine Learning Workshop',
        image: 'posters/ML.png',
        date: 'WEDS, Oct 4th, 2023 5:30PM - 6:30PM',
        location: 'OLD COMPUTER SCIECE 2120',
        description: 'Join us for a machine learning workshop to get hands on experience on machine learning project to put on your resume.',
    },
]

const pastEvents = [
    {
        title: 'Resume Review',
        image: 'posters/ResumeReview.png',
        date: 'WEDS, Sept 27th, 2023 5:30PM - 6:30PM',
        location: 'NEW COMPUTER SCIENCE 120',
        description: 'Join us for our Resume Review event and ensure your Resume is polished, professional, and primed to impress.',
    },
    {
        title: 'Journey Through Metaverse',
        image: 'posters/Metaverse.png',
        date: 'SAT, Sept 9th, 2023 8:00PM - 10:00PM',
        location: 'Wolfieland',
        description: 'Find us at Wolfieland!',
    },
    {
        title: 'S\'Mores Networking',
        image: 'posters/Smores2_1_23.png',
        date: 'WEDS, Feb 1st, 2023 6:00PM - 7:00PM',
        location: 'NEW COMPUTER SCIECE 120',
        description: 'Welcome back the spring semester by meeting people in the same field alongside tasty treats!',
    },
    {
        title: 'ChatGPT Workshop',
        image: 'posters/chatGPT2_8_23.png',
        date: 'WEDS, Feb 8th, 2023 6:00PM - 7:00PM',
        location: 'NEW COMPUTER SCIECE 120',
        description: 'Learn how ChatGPT works and how YOU can use it to code',
    },
    {
      title: 'Messing w/ API\'s',
      image: 'posters/API2_15_23.png',
      date: 'WEDS, Feb 15th, 2023 6:00PM - 7:00PM',
      location: 'NEW COMPUTER SCIECE 120',
      description: 'Join us for a hands-on workshop to explore the world of APIs and discover how to integrate them into your next project',
    },
    {
        title: 'Git Workshop',
        image: 'posters/gitworkshop_11_30_22.png',
        date: 'Wed, Nov 30th 2022 12:30PM - 2:30PM',
        location: 'Engineering 145',
        description: 'Learn version control and create a portfolio for employers to see!',
    },
    {
        title: 'Technical Interviews Part 2',
        image: 'posters/Technical_Interviews_Pt._2_2.png',
        date: 'Wed, Dec 7th 2022 1:00PM - 2:00PM',
        location: 'Engineering 145',
        description: "Learn how to solve technical interview problems!",
    },
    {
        title: 'Technical Interviews Part 1',
        image: 'posters/Technical_Interview_Prep_11_2_2022.png',
        date: 'Wed, Nov 2nd 2022 12:30PM - 2:30PM',
        location: 'Engineering 145',
        description: "Network with people and get tested on your programming experience.",
    },
    {
        title: 'Coding Contest',
        image: 'posters/CodingContest_10_28_2022.png',
        date: 'Wed, Oct 28th 2022 12:30PM - 2:30PM',
        location: 'Engineering Quad',
        description: "Join our coding contest to win prizes",
    },
    {
        title: 'Landing Internships for Dummies',
        image: 'posters/Landing_internships_for_dummies_10_5_2022.jpg',
        date: 'Wed, Oct 5th 2022 12:30PM - 2:30PM',
        location: 'Engineering 145',
        description: 'Put yourself out in the web with a portfolio website.',
    },
    {
        title: 'Career Fiar Prep',
        image: 'posters/careerfairprep.png',
        date: 'Wed, Oct 26th 2022 12:30PM - 2:30PM',
        location: 'Engineering 145',
        description: 'Learn how to socialize in professional settings.',
    },
    {
        title: 'Intro to Web Dev',
        image: 'posters/Intro_to_web_dev_9_28_2022.png',
        date: 'Tues, Apr 28th 2021 1:00PM - 2:00PM',
        location: 'Engineering Quad',
        description: "Build your first website with SBCS! :)",
    },
    {
        title: 'Data Science Hackathon',
        image: 'posters/datasciencehackathonapril2022.png',
        date: 'April 2021',
        location: 'Online',
        description: 'SBCS is hosting an online month long data science hackathon! Each week we will have a new topic and prize so stay tuned!',
    },
    {
        title: 'Course Scheduling Panal',
        image: 'posters/courseschedulingfall2021.png',
        date: 'Fri, Oct 29th 2021 1:00PM - 2:30PM',
        location: 'Engineering Quad',
        description: "Join Wics and SBCS for our faculty and student panel. Ask anything to our CSE/ISE professors and advisors.",
    },
    {
        title: 'IT & Engineering Networking Mixer',
        image: 'posters/itengineeringmixer.jpg',
        date: 'Wed, Sept 22nd 2021 1:00PM - 3:00PM',
        location: 'Engineering Quad',
        description: "Come and connect with industry professionals!",
    },
    {
        title: 'CEAS Involvement Fair',
        image: 'posters/involvement2.png',
        date: 'Wed, Sept 8 2021 12:30PM - 2:30PM',
        location: 'Engineering Quad',
        description: 'Are you looking to join a CS community? The SBCS will be participating in the CEAS Involvement Fair this coming week. We will be sharing club initiatives and giving out snakcs! Come to meet our board members and learn about ways in which you can participate in our club.',
    },
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
                {upcomingEvents.map(i => (
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
