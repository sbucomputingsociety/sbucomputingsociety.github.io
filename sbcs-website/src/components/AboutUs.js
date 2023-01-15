import './AboutUs.css';
import TeamPicSlider from './TeamPicSlider';


function AboutUs() {
    return(
        <div className="about-us-container">
            <TeamPicSlider className="team-pic"></TeamPicSlider>
            <div className="text-box">
                <h3 className="about-us-title">About Us</h3>
                <h4 className="about-us-para">At SBCS, we hope to create a welcoming and fun environment for anyone interested in computer science. As an official chapter of the Association for Computing Machinery, the world's largest educational and scientific computing society, we strive to share both educational resources and professional networking opportunities with our members. </h4>
                <div className="about-us-btn-box">
                    <a className="about-us-btn" href="/#">Our Initiatives</a>
                </div>
                
            </div>
        </div>
    );
}

export default AboutUs;