import './AboutUs.css';
import TeamPicSlider from './TeamPicSlider';


function AboutUs() {
    return(
        <div className="about-us-container">
            <div>
                <div className="team-photo-box">
                    <div className="decoration"></div>
                    {/* py-58 px-94 */}
                    {/* <div className="frame-float rounded-3xl border-7 border-white"></div>
                    <TeamPicSlider></TeamPicSlider> */}
                </div>
            </div>
            <div className="text-box">
                <h3 className="about-us-title">About Us</h3>
                <h4 className="about-us-para">At SBCS, we hope to create a welcoming and fun environment for anyone interested in computer science. As an official chapter of the Association for Computing Machinery, the world's largest educational and scientific computing society, we strive to share both educational resources and professional networking opportunities with our members. </h4>
                <div className="p-6">
                    <a className="about-us-btn" href="/#">Our Initiatives</a>
                </div>
                
            </div>
        </div>
    );
}

export default AboutUs;