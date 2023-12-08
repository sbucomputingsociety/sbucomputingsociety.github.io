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
