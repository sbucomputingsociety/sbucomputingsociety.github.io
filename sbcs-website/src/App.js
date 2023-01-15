import './App.css';

// All relevant components
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import YellowStripe from './components/YellowStripe';
import AboutUs from './components/AboutUs';
import StayConnected from './components/StayConnected';

function App() {

  // Past events
  const events = [
    {
      title: 'Stony Brook Involvement Fair',
      image: 'posters/involvement1.png',
      date: 'Wed, Sept 1, 2021 12:30PM - 2:30PM',
      location: 'SAC Plaza',
      description: 'Are you looking to join a CS community? The SBCS will be participating in the CEAS Involvement Fair this coming week. We will be sharing club initiatives and giving out snakcs! Come to meet our board members and learn about ways in which you can participate in our club.',
    },
    {
      title: 'CEAS Involvement Fair',
      image: 'posters/involvement2.png',
      date: 'Wed, Sept 8 2021 12:30PM - 2:30PM',
      location: 'Engineering Quad',
      description: 'Are you looking to join a CS community? The SBCS will be participating in the CEAS Involvement Fair this coming week. We will be sharing club initiatives and giving out snakcs! Come to meet our board members and learn about ways in which you can participate in our club.',
    },
  ]

  return (
    <div className="App tracking-wide font-glory text-neutral-700 bg-white">

      <NavBar></NavBar>

      {/* Introduction Section */}
      <Intro></Intro>
      {/* <YellowStripe></YellowStripe> */}
      {/* <AboutUs></AboutUs> */}


      {/* Upcoming */}
      {/* <div className="px-10">
        <Events item={events} />
      </div> */}

      {/* Stay Connected */}
      {/* <StayConnected></StayConnected> */}

      {/* Sponsors */}
      {/* <Sponsors></Sponsors> */}


    </div>
  );
}

export default App;
