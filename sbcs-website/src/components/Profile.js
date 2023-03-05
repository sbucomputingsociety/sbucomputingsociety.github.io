import './Profile.css';

import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function Profile(props){

    useEffect(() => {
        Aos.init({duration: 750});
    }, []);

    return (
        <div className="each-member" data-aos="fade-up">
            <div className="profile-bg">
                <img className="profile-pic" src={props.image} alt="profile pic"></img>
            </div>
            <div className="profile-info">
                <h4 className="name">{props.name}</h4>
                <h4 className="role">{props.role}</h4>
            </div>
        </div>

    )
}
export default Profile;