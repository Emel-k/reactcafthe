import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import {AuthContext} from "../context/AuthContext";


function Navbar(props) {
    const { user, isAuthenticated, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }

    return (

            <nav className="nav-bar">
                <div><Link className="logo-ct" to="/">LOGO</Link></div>

                    <div>
                        {isAuthenticated ? (
                            <>
                            <span>Bonjour {user.nom}{user.prenom}</span>
                            </>
                        ): (
                            ""
                            )}
                    </div>

                    <ul className="cafe_the">
                        <li><Link to="/Cafe" className="link-nav">Café</Link></li>
                        <li><Link to="/The" className="link-nav">Thé</Link></li>
                        <li><Link to="/Accessoires" className="link-nav">Accessoires</Link></li>
                    </ul>
                    <ul className="left">
                        <li><Link to="/Panier" className="link-nav">Panier</Link></li>
                        <li><Link to="/search" className="link-nav">search</Link></li>
                        {isAuthenticated ? (
                            <>
                                <button className="btn-logout" onClick={handleLogout}>Se déconnecter</button>
                            </>
                        ): (
                            <Link to="/Login"><button className="btn-login-nav">Se connecter</button></Link>
                        )}
                    </ul>


            </nav>

    );
}

export default Navbar;