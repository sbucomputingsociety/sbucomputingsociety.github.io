import './AboutUs.css';
import TeamPicSlider from './TeamPicSlider';


function AboutUs() {
    return(
        <div className="box-float flex p-20 border-7 border-black bg-lighter-blue">
            <div>
                <TeamPicSlider></TeamPicSlider>
                <div className="frame-float rounded-3xl border-7 border-white py-48 px-56"></div>
            </div>
            <div className="pl-10">
                <h3 className="pb-10 pt-10 text-right text-black text-6xl font-bold pb-5">About Us</h3>
                <h4 className="pl-20 pb-10 text-right">We are a group of students who are passionate about programming, computers or technology in general. As an official chapter of the Association for Computing Machinery, the world's largest educational and scientific computing society, we strive to share both educational resources and professional networking opportunities with our student community. In the past, we have hosted events ranging from CS/IT Mixers, trips to the facebook NYC office, to technical workshops and fun club social events.</h4>
                <a className="btn-float py-4 px-32 mr-auto font-bold text-white border-5 bg-main-blue border-black inline-block leading-tight shadow-md hover:bg-hover-blue hover:shadow-lg focus:bg-hover-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hover-blue active:shadow-lg transition duration-150 ease-in-out" href="/#">Our Initiatives</a>
            </div>
        </div>
    );
}

export default AboutUs;