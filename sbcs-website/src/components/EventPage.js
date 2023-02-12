import './EventPage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import PastEventCard from './PastEventCard';

const pastEvents = [
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

function EventPage() {
    return (
        <div>
            <NavBar></NavBar>

            {/* upcoming events */}

            {/* past events */}
            <div className="past-events">
                {pastEvents.map(i => (
                    <PastEventCard
                        image={i.image}
                    />
                ))} 
            </div>

            <Footer></Footer>
        </div>
    )
}

export default EventPage;
