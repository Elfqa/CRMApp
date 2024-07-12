import { Link } from "react-router-dom";
import "./Header.css"; // Dodaj import pliku CSS

const Header = () => {
    return (
        <header className="header">
            <div className="header-title">CRMapp</div>
            <nav className="header-nav">
                <ul className="header-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-contacts">My Contacts</Link></li>
                    <li><Link to="/schedule-contact">Schedule Contact</Link></li>
                    <li><Link to="/my-clients">My Clients</Link></li>
                    <li><Link to="/search-clients">Search Clients</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
