import "./header.css"
import ical from "../assets/sariq-oq 1.png"
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header>
            <div>
                <img src={ical} alt="logo" />
            </div>

            <div className="nav">
                <NavLink className="link" to="/Home">Home</NavLink>
                <NavLink className="link" to="/Project">project</NavLink>
                <NavLink className="link" to="/Server">Services</NavLink>
                <NavLink className="link" to="/Kitchen">Kitchen Showroom</NavLink>
                <NavLink className="link" to="/Gallery">Gallery</NavLink>
                <NavLink className="link" to="/">Testimonials</NavLink>
                <NavLink className="link" to="/">Trades</NavLink>
                <NavLink className="link" to="/Contact">Contact Us</NavLink>
                <NavLink className="link" to="/">Coverage Areas</NavLink>
                <NavLink className="link" to="/"> (805) 323-9515</NavLink>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    width="30"
                    alt="Instagram"
                />
            </div>
        </header>
    )
}

export default Header;