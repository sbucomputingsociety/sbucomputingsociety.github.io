import './Team.css';
import './Profile.js';

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
        image: 'pictures/teamProfiles/armansyed.jpg',
        name: 'Arman Syed',
        role: 'Event Coordinator',
    },
    {
        image: 'pictures/teamProfiles/SeanErfan.jpg',
        name: 'Sean Erfan',
        role: 'Branding Manager',
    },
    {
        image: 'pictures/teamProfiles/AngelXie.png',
        name: 'Angel Xie',
        role: 'WebMaster',
    },
    {
        image: 'pictures/teamProfiles/KyoshiNoda.jpg',
        name: 'Kyoshi Noda',
        role: 'Junior Representative',
    },
    {
        image: '',
        name: 'Sharon Guan',
        role: 'Sophomore Representative',
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

]


function Team(){
    return (
        <div className="team-page">
            {/* need the header */}
            <div className="team-page-title">Our Team</div>
            
            {/* need to generate the cards */}
            <div className="profile-card">
                {props.members.map(i => (
                    <Profile
                        image={i.image}
                        title={i.name}
                        date={i.role}
                    />
                ))} 
            </div>   

            {/* need the footer */}


        </div>


    )
}

export default Team;