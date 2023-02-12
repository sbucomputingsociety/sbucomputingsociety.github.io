import './Events.css';
import EventCard from './EventCard';


function Events(props) {
    return (
        <div className="upcoming-box">
          <h1 className="home-event-title">Upcoming</h1>
          <div className="home-event-card divide-y-2 divide-black">
            {props.item.map(i => (
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