import './TeamPicSlider.css';

const teamPics = [
    'pictures/slider/teamPic1.jpg', 'pictures/slider/teamPic2.jpg',
]

let index =1;

function TeamPicSlider() {

    return (
        <div>
            <img src={teamPics[index]} alt="team" className="scale-70 rounded-3xl border-7 border-white"></img>
        </div>
    )
    
}

export default TeamPicSlider;