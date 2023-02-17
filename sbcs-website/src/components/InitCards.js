import './InitCards.css';


function InitCards(props){
    
    return(
        <div className="init-card-item">
            <a href={props.link}>
                <div className="init-card">
                    <img className="init-img" src={props.image} alt="club initiative poster"></img>
                    <div className="init-info">
                        <h4 className="init-title">{props.title}</h4>
                        <h4 className="init-description">{props.description}</h4>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default InitCards;