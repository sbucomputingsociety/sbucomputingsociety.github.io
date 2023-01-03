import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Events from './components/Events';
import Sponsors from './components/Sponsors';

function App() {

  const events = [
    {
      title: 'Stony Brook Involvement Fair',
      image: 'posters/involvement1.png',
      date: 'Wed, Sept 1, 2021 12:30PM - 2:30PM',
      location: 'SAC Plaza',
      description: 'Come meet SBCS at the Stony Brook Involvement Fair!',
    },
    {
      title: 'CEAS Involvement Fair',
      image: 'posters/involvement2.png',
      date: 'Wed, Sept 8 2021 12:30PM - 2:30PM',
      location: 'Engineering Quad',
      description: 'Come meet SBCS at the CEAS Involvement Fair!',
    },
    {
      title: 'GBM #1: Fishing for Introductions!',
      image: 'posters/fall2021gbm1.png',
      date: 'Wed, Sept 15 2021 1:00PM - 2:00PM',
      location: 'Engineering 145',
      description:'Come meet the e-board and join us for games + icebreakers + snacks!',
    },
  ]


  return (
    <div className="App tracking-wide font-glory text-neutral-700 bg-white">

      <NavBar></NavBar>

      {/* Title Section */}
      <Intro></Intro>

      {/* Past Events */}
      <h1 className="antialiased text-6xl text-sky-500 py-5 mx-20">Past Events</h1>
      <div className="px-10">
        <Events item={events} />
      </div>

      {/* Sponsors */}
      <Sponsors></Sponsors>


    </div>
  );
}

export default App;
