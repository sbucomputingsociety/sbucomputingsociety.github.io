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
      title: "Thanksgiving Potluck",
      image: "posters/potluck.jpeg",
      date: "November 18th, 3PM - 4:30PM",
      location: "LDS Bauman Center",
      description: "Join us and your fellow CEAS club members at our Thanksgiving Potluck! Share and enjoy a memorable evening together with the CEAS community!"
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
