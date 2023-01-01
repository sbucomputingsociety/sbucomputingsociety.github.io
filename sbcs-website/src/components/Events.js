import EventCard from './EventCard';
import './Events.css';

function Events(props) {
    return (
        <div className="px-16 py-6 flex justify-around">
          {props.item.map(i => (
            <EventCard
                image={i.image}
                title={i.title}
                date={i.date}
                location={i.location}
                // description={i.description}
            />

          ))}   
        </div>
    )
}

export default Events;