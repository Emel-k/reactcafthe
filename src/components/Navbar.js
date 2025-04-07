import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightToBracket, faRightFromBracket, faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
    const { user, isAuthenticated, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-bar">
            <div className="left-section">
                <Link className="logo-ct" to="/">CAF'THE</Link>

                <button className="burger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
            </div>

            <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                <ul className="cafe_the">
                    <li><Link to="/Cafe" className="link-nav" onClick={toggleMenu}>Café</Link></li>
                    <li><Link to="/The" className="link-nav" onClick={toggleMenu}>Thé</Link></li>
                    <li><Link to="/Accessoires" className="link-nav" onClick={toggleMenu}>Accessoires</Link></li>
                </ul>

                <div className="auth-section">
                    <div className="search-bar">
                        <form name="search">
                            <input className="input-search" type="text" placeholder="Recherche" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
                        </form>
                    </div>

                    <Link to="/Panier" className="link-nav">
                        <FontAwesomeIcon icon={faCartShopping} size="1x" />
                    </Link>

                    {isAuthenticated ? (
                        <div>
                            <span className="profile">Bonjour, {user.nom} </span>
                            <Link to="/Profil" className="profile">Votre Profile</Link>
                            <Link className="logout" onClick={handleLogout}>
                                <FontAwesomeIcon icon={faRightFromBracket} style={{ marginRight: "5px" }} />
                                Se déconnecter
                            </Link>
                        </div>

                    ) : (
                        <Link to="/Login" className="login" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faRightToBracket} style={{ marginRight: "5px" }} />
                            Se connecter
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
