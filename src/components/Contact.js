import './Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Contact(){
    return(
        <div className="App">
            <NavBar></NavBar>
            <h2 className="event-page-title">Contact</h2>
            <hr className="solid"></hr>
            <p className="sponsor-description hide">
                Join our awesome community online to find like-minded peers and access career-building/academic resources!
                You will find most up-to-date information about our club through our discord and instagram.&lt;3
            </p>
            <div className="contact-outer">
                <div className="contact-box">
                    <img className="SBCS-logo-c" src="logos/computerlogo-removebg-preview.png"></img>
                    <h2 className="contact-title"> &lt;🐱Connect with Us💖&gt; </h2>
                    <a className="contact-stuff light-blue-c" href='https://discord.com/invite/9TZcjyUhHS'>Discord Server</a>
                    <a className="contact-stuff dark-blue-c" href='https://www.instagram.com/sbucomputingsociety/'>Instagram</a>
                    <a className="contact-stuff yellow-c" href='https://www.facebook.com/groups/sbucomputingsociety/permalink/10159596114895984/'>Facebook</a>
                    <a className="contact-stuff blue-c" href='mailto:sbcs@gmail.com?'>Email Us!</a>
                </div>
            </div>
            
            <Footer></Footer>
        </div>

    )
}

export default Contact;