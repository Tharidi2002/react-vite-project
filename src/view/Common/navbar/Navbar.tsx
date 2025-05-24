// Navbar.tsx
import './Navbar.css';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">MyApp</div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">About</Link>
                    </li>
                   {/* <li className="navbar-item">
                        <a href="/services" className="navbar-link">Services</a>
                    </li>*/}
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};