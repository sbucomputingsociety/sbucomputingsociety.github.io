import './Profile.css';

function Profile(props){
    return (
        <div className="each-member">

            <img className="profile-pic" src={props.image} alt="profile pic"></img>
            <div className="profile-info">
                <h4 className="name">{props.name}</h4>
                <h4 className="role">{props.role}</h4>
            </div>

        </div>

    )
}
export default Profile;