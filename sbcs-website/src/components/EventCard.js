import "./EventCard.css";

function EventCard(props) {

    return (
        <div className="w-1/4 h-fit pt-5 pb-10 px-2 border-2 bg-sky-500">
            <img className="p-0 border-2" src={props.image} alt="poster"></img>
            <div className="px-5 text-black">
                <h1 className="font-semibold text-2xl p-1 ">{props.title}</h1>
                <h2 className="font-bold text-lg text-white uppercase">{props.date}</h2>
                <h2 className="font-semibold text-lg">{props.location}</h2>
                {/* <h4 className="text-lg">{props.description}</h4> */}
            </div>
            
        </div>
    )

}

export default EventCard;