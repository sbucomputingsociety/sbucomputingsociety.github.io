import EventCard from './EventCard';
import './Events.css';

function Events(props) {
    return (
        <div>
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
    )
}

export default Events;