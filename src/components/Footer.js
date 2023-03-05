import './Footer.css';
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';


function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-box">
                <h4 className="footer-club-name">Stony Brook Computing Society</h4>
                

                <h4>College of Engineering & Applied Sciences, 231 Engineering
Stony Brook, NY 11794-2200</h4>
                <h4>sbcs@gmail.com</h4>

                

                <ul className="social">
                    <li className="social-logo-box"><a className="social-logo" href="https://www.facebook.com/groups/sbucomputingsociety/permalink/10159596114895984/"><FaFacebook></FaFacebook></a></li>
                    <li className="social-logo-box"><a className="social-logo" href="https://www.instagram.com/sbucomputingsociety/"><FaInstagram></FaInstagram></a></li>
                    <li className="social-logo-box"><a className="social-logo" href="https://discord.com/invite/9TZcjyUhHS"><FaDiscord></FaDiscord></a></li>
                </ul>

                <div class="footer-bottom">
                    <p>copyright &copy;2023, made with <span className="heart">&hearts;</span> by <span>The SBCS Team</span>.</p>
                </div>
                
            </div>
        </div>

    )
}

export default Footer;