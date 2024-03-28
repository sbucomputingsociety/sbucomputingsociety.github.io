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

  /** Format for upcoming events
   *    {title: '',
   *    image: '',
   *    date: '',
   *    location: '',
   *    description: '',},
   */
  const upcomingEvents = [
    {
      title: 'MORGAN STANLEY',
      image: 'posters/MorganStanley2.jpg',
      date: 'April 4th, 5:30PM - 7PM',
      location: 'SAC 306',
      description: 'Dive into the fintech universe with Morgan Stanley! Last semester’s session saw a wave of success, with many attendees receiving interview callbacks. Don’t miss out this golden opportunity. Join us on Thursday, April 4th at SAC 306 from 5:30-7PM. Don’t forget to register to stay in their system!',
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

      {/* Upcoming/Recent */}
      {upcomingEvents.length > 0 && 
      <>
        <div className="divider-ylw"></div>
        <div className="divider-ylw"></div>
        <div>
          <Events item={upcomingEvents}></Events>
        </div>
      </>
      }

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
