import './AboutUs.css';
import TeamPicSlider from './TeamPicSlider';


function AboutUs() {
    return(
        <div className="box-float flex p-20 border-7 border-black bg-lighter-blue">
            <div>
                <div className="relative">
                    {/* py-58 px-94 */}
                    <div className="frame-float rounded-3xl border-7 border-white"></div>
                    <TeamPicSlider></TeamPicSlider>
                </div>
            </div>
            <div className="pl-5">
                <h3 className="pb-10 pt-10 text-right text-black text-6xl font-bold pb-5">About Us</h3>
                <h4 className="pl-15 pb-10 text-right">At SBCS, we hope to create a welcoming and fun environment for anyone interested in computer science. As an official chapter of the Association for Computing Machinery, the world's largest educational and scientific computing society, we strive to share both educational resources and professional networking opportunities with our members. </h4>
                <a className="btn-float py-4 px-32 mr-auto font-bold text-white border-5 bg-main-blue border-black inline-block leading-tight shadow-md hover:bg-hover-blue hover:shadow-lg focus:bg-hover-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hover-blue active:shadow-lg transition duration-150 ease-in-out" href="/#">Our Initiatives</a>
            </div>
        </div>
    );
}

export default AboutUs;