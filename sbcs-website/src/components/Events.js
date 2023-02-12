import './Events.css';
import EventCard from './EventCard';

// Upcoming events
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


function Events() {
    return (
        <div className="upcoming-box">
          <h1 className="home-event-title">Upcoming</h1>
          <div className="home-event-card divide-y-2 divide-black">
            {events.map(i => (
              <EventCard
                image={i.image}
                title={i.title}
                date={i.date}
                location={i.location}
                description={i.description}
              />
            ))} 
          </div>       
        </div>
    )
}

export default Events;