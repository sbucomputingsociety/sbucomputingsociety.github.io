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
      title: 'Empowering Voices in FinTech with Morgan Stanley',
      image: 'posters/MorganStanley.jpg',
      date: 'WEDS, November 29th - 6PM',
      location: 'Javits 103',
      description: 'Join us for an evening panel as we bring together minority speakers who are shaping the future of the FinTech industry at Morgan Stanley!'
    }
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
