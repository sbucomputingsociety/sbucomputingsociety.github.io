import "./SponsorsPage.css";

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const sponsList = [
    '../logos/Blackrock-logo.png',
    '../logos/Google-logo.jpg',
    '../logos/Meta-logo.png',
    '../logos/Microsoft-Logo.png',
    '../logos/Softheon-logo.png',
]


function Sponsors() {
    useEffect(() => {
        Aos.init({duration: 750});
    }, []);
    return (
        <div className="App">
            <NavBar></NavBar>
            <div className="sponsor-container">
                <h1 className="sponsor-title">Sponsors</h1>
                <hr className="solid"></hr>
                <h4 className="sponsor-description">Here is a sample of companies and organizations that we’ve had the pleasure to work with in current and past years. SBCS is a great way for your company to reach out to Stony Brook students! If you're interested, please contact us at sbucomputingsociety@gmail.com.</h4>
                
                <div className="each-sponsor">
                    {sponsList.map(s => (
                        <div className="logo-container" data-aos="fade-up">
                            <img src={s} alt='logo'></img>
                        </div>
                    ))}
                </div>

                <hr className="bottom-divider"></hr>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Sponsors;