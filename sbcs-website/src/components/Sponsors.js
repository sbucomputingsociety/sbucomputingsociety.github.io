import "./Sponsors.css";


const sponsList = [
    '../logos/Blackrock-logo.png',
    '../logos/Google-logo.jpg',
    '../logos/Meta-logo.png',
    '../logos/Microsoft-logo.png',
    '../logos/Softheon-logo.png',
]


function Sponsors() {
    return (
        <div>
            <h1>Sponsors</h1>
            <h4>Here is a sample of companies and organizations that we’ve had the pleasure to work with in current and past years. SBCS is a great way for your company to reach out to Stony Brook students. If you're interested, please contact us at sbucomputingsociety@gmail.com.</h4>
            <div>
                {sponsList.map(s => (
                    <img src={s} alt='logo'></img>
                 ))}
            </div>
        </div>

    )
}

export default Sponsors;