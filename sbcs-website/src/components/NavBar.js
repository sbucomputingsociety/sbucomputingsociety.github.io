import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css';

function NavBar() {
    return (
        <header>
            <img src='logos/SBCSlogo-removebg-preview.png' alt='logo'></img>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Team</a>
                <a href="/#">Events</a>
                <a href="/#">Gallary</a>
                <a href="/#">Sponsors</a>
                <a href="/#">Contact</a>

                <button>
                    <FaTimes/>
                </button>
            </nav>

            <button>
                <FaBars />
            </button>

        </header>
    )
}

export default NavBar;