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
