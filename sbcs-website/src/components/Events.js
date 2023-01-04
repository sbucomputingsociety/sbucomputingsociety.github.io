import EventCard from './EventCard';
import './Events.css';

function Events(props) {
    return (
        <div>
          <h1 className="pb-10 pt-10 text-center text-black text-7xl font-bold pb-5">Upcoming</h1>
          <div className="px-16 flex flex-col justify-start divide-y-2 divide-black">
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