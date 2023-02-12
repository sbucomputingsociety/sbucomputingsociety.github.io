import './UpcomingEventCard.css';

function UpcomingEventCard(props) {
    return(
        <div className="init-card-item">
            <img className="init-img" src={props.image} alt="poster"></img>
            <div className="upcoming-event-box-p">
                <h1 className="upcoming-event-title-p">{props.title}</h1>
                <h2 className="upcoming-event-log-p-blue">{props.date}</h2>
                <h2 className="upcoming-event-log-p-black">{props.location}</h2>
            </div>
        </div>
    )
    
}

export default UpcomingEventCard;
