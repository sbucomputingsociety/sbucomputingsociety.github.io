import './Team.css';
import './Profile.js';

const members = [

    {
        image: '',
        name: '',
        role: 'President',

    },
    {
        image: '',
        name: '',
        role: 'Vice President',
    },
    {
        image: '',
        name: '',
        role: 'Secretary',
    },
    {
        image: '',
        name: '',
        role: 'Community Chair',
    },
    {
        image: '',
        name: '',
        role: '',
    },
    {
        image: '',
        name: '',
        role: 'WebMaster',
    },
    {
        image: '',
        name: '',
        role: 'Senior Representative',
    },
    {
        image: '',
        name: '',
        role: 'Junior Representative',
    },
    {
        image: '',
        name: '',
        role: 'Sophomore Representative',
    },
    {
        image: '',
        name: '',
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