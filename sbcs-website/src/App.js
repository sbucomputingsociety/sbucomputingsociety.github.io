import './App.css';


// All relevant components
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import ClubInitiatives from './components/ClubInitiatives';
import Events from './components/Events';
import YellowStripe from './components/YellowStripe';
import AboutUs from './components/AboutUs';
import StayConnected from './components/StayConnected';
import Footer from './components/Footer';

import Team from './components/Team';
import Sponsors from './components/Sponsors'
import EventPage from './components/EventPage';
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";


function App() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  // Upcoming events
  const events = [
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
  ]

  return (
    <div className="App tracking-wide font-glory text-neutral-700 bg-white">

      <NavBar></NavBar>
      <div className="divider-brn"></div>

      {/* Introduction Section */}
      <div data-aos="fade-up">
      <Intro></Intro>
      </div>
      <div className="divider-wht"></div>
      <YellowStripe></YellowStripe>
      <div className="divider-wht"></div>
      <div data-aos="fade-right">
      <AboutUs></AboutUs>
      </div>

      {/* Club Initiatives */}
      <div className="divider-ylw"></div>
      <div className="divider-ylw"></div>
      <ClubInitiatives></ClubInitiatives>


      {/* Upcoming */}
      <div className="divider-ylw"></div>
      <div className="divider-ylw"></div>
      <div>
        <Events item={events}></Events>
      </div>

      {/* Stay Connected */}
      <StayConnected></StayConnected>

      {/* Footer */}
      <Footer></Footer>

      /*Different pages can be accessed by adding a link tag in NavBar.js, and adding a corresponding
      route in index.js */
    </div>
  );
}

export default App;
