import './TeamPage.css';
import Profile from './Profile';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const members = [
    {
        image: 'pictures/teamProfiles/AmirHamza.png',
        name: 'Amir Hamza \'25',
        role: 'President',
    },
    {
        image: 'pictures/teamProfiles/RiteshChavan.png',
        name: 'Ritesh Chavan \'25',
        role: 'Vice President',
    },
    {
        image: 'pictures/teamProfiles/PoojaGinjupalli.jpg',
        name: 'Pooja Ginjupalli \'26',
        role: 'Secretary',
    },
    {
        image: 'pictures/teamProfiles/EduardoLozano.jpg',
        name: 'Eduardo Lozano \'27',
        role: 'Treasurer',
    },
    {
        image: 'pictures/teamProfiles/SeanErfan.png',
        name: 'Sean Erfan \'26',
        role: 'Event Coordinator',
    },
    {
        image: 'pictures/teamProfiles/VeronicaMathur.png',
        name: 'Veronica Mathur \'25',
        role: 'Social Media Manager',
    },
    {
        image: 'pictures/teamProfiles/JamieCalub.jpg',
        name: 'Jamie Calub \'27',
        role: 'Branding Manager',
    },
    {
        image: 'pictures/teamProfiles/GraceWang.jpg',
        name: 'Grace Wang \'26',
        role: 'Webmaster',
    },
]


function Team(){
    return (
        <div className="App team-page">
            {/* need the header */}
            <NavBar></NavBar>

            <div className="team-page-title">Our Team</div>
            <hr className="solid"></hr>
            {/* need to generate the cards */}
            <div className="profile-card">
                {members.map(i => (
                    <Profile
                        image={i.image}
                        name={i.name}
                        role={i.role}
                    />
                ))} 
            </div>   
            <hr className="bottom-divider"></hr>

            {/* need the footer */}
            <Footer></Footer>
        </div>
    )
}

export default Team;