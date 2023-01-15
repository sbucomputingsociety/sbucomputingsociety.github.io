import './TeamPicSlider.css';

const teamPics = [
    'pictures/slider/teamPic1.jpg', 'pictures/slider/teamPic2.jpg',
]

let index =1;

function TeamPicSlider() {

    return (
        <img src={teamPics[index]} alt="team" className="team-pic-edit"></img>
    )
    
}

export default TeamPicSlider;