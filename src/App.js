import './App.css';


// All relevant components
import NavBar from './components/NavBar';
import Intro from './pages/MainPage/Intro';
import Events from './pages/MainPage/Events';
import YellowStripe from './components/YellowStripe';
import AboutUs from './pages/MainPage/AboutUs';
import StayConnected from './pages/MainPage/StayConnected';
import Footer from './components/Footer';




function App() {

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
      <Intro></Intro>
      <div className="divider-wht"></div>
      <YellowStripe></YellowStripe>
      <div className="divider-wht"></div>
      <AboutUs></AboutUs>

      {/* Upcoming */}
      <div className="divider-ylw"></div>
      <div className="divider-ylw"></div>
      <div>
        <Events item={events}></Events>
      </div>

      {/* Stay Connected */}
      
      <div className="divider-wht blue-stripe"></div>
      <div className="divider-wht blue-stripe"></div>
      <StayConnected></StayConnected>

      {/* Footer */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
