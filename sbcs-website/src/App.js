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


function App() {

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

      {/* Club Initiatives */}
      <div className="divider-ylw"></div>
      <div className="divider-ylw"></div>
      <ClubInitiatives></ClubInitiatives>


      {/* Upcoming */}
      <div className="divider-ylw"></div>
      <div className="divider-ylw"></div>
      <div>
        <Events></Events>
      </div>

      {/* Stay Connected */}
      <StayConnected></StayConnected>

      {/* Footer */}
      <Footer></Footer>


      {/* other pages */}
      <Team></Team>

      {/* other pages */}
      <Sponsors></Sponsors>

      {/* other pages */}
      <EventPage></EventPage>


    </div>
  );
}

export default App;
