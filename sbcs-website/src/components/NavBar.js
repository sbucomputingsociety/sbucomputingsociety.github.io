import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css';

function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        // each time this function is called, we add or remove this className from the nav tag
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img className="logo scale-50" src='logos/SBCSlogo-removebg-preview.png' alt='logo'></img>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Team</a>
                <a href="/#">Events</a>
                <a href="/#">Gallary</a>
                <a href="/#">Sponsors</a>
                <a href="/#">Contact</a>

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