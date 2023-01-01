import "./EventCard.css";

function EventCard(props) {

    return (
        <div>
            <img src={props.image} alt="poster"></img>

            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <h2>{props.location}</h2>
            <h4>{props.description}</h4>

        </div>
    )

}

export default EventCard;