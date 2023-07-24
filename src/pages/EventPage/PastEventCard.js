import "./PastEventCard.css";

function PastEventCard(props){
    return(
        <div className="past-event-card">
            <img src={props.image} alt="club event posters"></img>
        </div>
    )
}

export default PastEventCard;