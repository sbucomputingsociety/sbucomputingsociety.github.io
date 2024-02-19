import "./EventCard.css";

function EventCard(props) {

    return (
        <div className="home-indiv-event">
            <img className="home-indiv-event-poster" src={props.image} alt="poster"></img>
            <div className="home-indiv-event-text-box">
                <h1 className="p-1 text-4xl text-black">{props.title}</h1>
                <h2 className="home-indiv-event-time">{props.date} <span className="text-black">|</span> {props.location}</h2>
                <h4 className="text-xl text-black">{props.description}</h4>
            </div>

            
        </div>
    )

}

export default EventCard;