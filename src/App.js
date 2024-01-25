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
      title: 'YouthTech Bootcamp',
      image: 'posters/AWSBootcamp.jpg',
      date: 'February 23-24th, 12PM - 4PM',
      location: 'SAC Ballroom B, Union Ballroom',
      description: 'SBCS and Amazon Web Services are teaming up to give you YouthTech, a 2-day bootcamp aimed and teaching you AWS fundamentals! You do not any experience to attend, so registar now for this amazing opportunity!',
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
