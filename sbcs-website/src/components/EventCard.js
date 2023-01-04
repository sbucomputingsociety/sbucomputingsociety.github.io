import "./EventCard.css";

function EventCard(props) {

    return (
        <div className="h-fit py-16 flex flex-row px-2 bg-white">
            <img className="p-0 sizing border-4 border-black rounded-3xl" src={props.image} alt="poster"></img>
            <div className="pt-7 px-16 text-left">
                <h1 className="text-4xl p-1 text-4xl text-black">{props.title}</h1>
                <h2 className="pt-8 pb-7 text-2xl text-white uppercase text-text-blue">{props.date} <span className="text-black">| {props.location}</span></h2>
                <h4 className="text-2xl text-black">{props.description}</h4>
            </div>

            
        </div>
    )

}

export default EventCard;