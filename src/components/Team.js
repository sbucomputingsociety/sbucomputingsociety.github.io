import './Team.css';
import Profile from './Profile';
import NavBar from './NavBar';
import Footer from './Footer';

const members = [
    {
        image: 'pictures/teamProfiles/mirfarid.jpg',
        name: 'Mir Farid',
        role: 'President',

    },
    {
        image: 'pictures/teamProfiles/avishparmar.jpg',
        name: 'Avish Parmar',
        role: 'Vice President',
    },
    {
        image: 'pictures/teamProfiles/bryanlai.jpg',
        name: 'Bryan Lai',
        role: 'Secretary',
    },
    {
        image: 'pictures/teamProfiles/amirhamza.jpeg',
        name: 'Amir Hamza',
        role: 'Community Chair',
    },
    {
        image: 'pictures/teamProfiles/SeanErfan.jpg',
        name: 'Sean Erfan',
        role: 'Branding Manager',
    },
    {
        image: 'pictures/teamProfiles/AngelXie.png',
        name: 'Angel Xie',
        role: 'Webmaster',
    },
    {
        image: 'pictures/teamProfiles/KyoshiNoda.jpg',
        name: 'Kyoshi Noda',
        role: 'Junior Representative',
    },
    {
        image: 'pictures/teamProfiles/RiteshChavan.jpg',
        name: 'Ritesh Chavan',
        role: 'Sophomore Representative',
    },
    {
        image: 'pictures/teamProfiles/KimberlyRamirez.jpg',
        name: 'Kimberly Ramirez',
        role: 'Freshman Representative',
    },
    {
        image: 'pictures/teamProfiles/GraceWang.jpg',
        name: 'Grace Wang',
        role: 'Freshman Representative',
    },
    {
        image: 'pictures/teamProfiles/AtriVyas.jpg',
        name: 'Atri Vyas',
        role: 'Freshman Representative',
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
            <hr class="bottom-divider"></hr>

            {/* need the footer */}
            <Footer></Footer>
        </div>
    )
}

export default Team;