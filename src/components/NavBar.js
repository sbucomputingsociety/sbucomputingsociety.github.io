import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        // each time this function is called, we add or remove this className from the nav tag
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img className="logo" src='logos/sbcs-web-logo-b-removebg-preview.png' alt='logo'></img>
            <nav ref={navRef}>
                <Link to="/#">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/eventpage">Events</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/geekgames">Geek Games</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>

            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>

        </header>
    )
}

export default NavBar;