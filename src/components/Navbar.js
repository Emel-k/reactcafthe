import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import {AuthContext} from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Navbar(props) {
    const { user, isAuthenticated, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }


    return (

            <nav className="nav-bar">
                <div><Link className="logo-ct" to="/">CAF'THE</Link></div>

                    <div>
                        {isAuthenticated ? (
                            <>
                            <span>Bonjour {user.nom}{user.prenom}</span>
                                <Link className="nav-profil" to="/Profil"> Votre compte </Link>
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
                        <li><Link to="/Panier" className="link-nav"><FontAwesomeIcon icon={faCartShopping} size="1x" /></Link></li>
                        <div className="search-bar">
                            <form name="search">
                                <input className="input-search"
                                type="text"
                                       placeholder="Recherche"
                                />
                            </form>
                            <i></i>
                        </div>
                        {isAuthenticated ? (
                            <>
                                <Link className="logout" onClick={handleLogout}>Se déconnecter</Link>
                            </>
                        ): (
                            <Link to="/Login" className="login">Se connecter</Link>
                        )}
                    </ul>


            </nav>

    );
}
export default Navbar;
// import React, { useContext, useState } from 'react';
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//
// function Navbar() {
//     const { user, isAuthenticated, logout } = useContext(AuthContext);
//     const [isOpen, setIsOpen] = useState(false);
//     const [showSearch, setShowSearch] = useState(false);
//
//     return (
//         <nav className="navbar-container">
//             {/* Logo */}
//             <Link to="/" className="navbar-logo">CAF'THE</Link>
//
//             {/* Menu Desktop */}
//             <div className="navbar-links">
//                 <Link to="/Cafe" className="nav-link">Café</Link>
//                 <Link to="/The" className="nav-link">Thé</Link>
//                 <Link to="/Accessoires" className="nav-link">Accessoires</Link>
//             </div>
//
//             {/* Côté droit - Desktop */}
//             <div className="navbar-right">
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder="Recherche..."
//                         className={`search-input ${showSearch ? 'active' : ''}`}
//                     />
//                     <FontAwesomeIcon
//                         icon={faSearch}
//                         className="search-icon"
//                         onClick={() => setShowSearch(!showSearch)}
//                     />
//                 </div>
//
//                 <Link to="/Panier" className="nav-icon">
//                     <FontAwesomeIcon icon={faShoppingCart} />
//                 </Link>
//
//                 {isAuthenticated ? (
//                     <>
//                         <Link to="/Profil" className="nav-icon">
//                             <FontAwesomeIcon icon={faUser} />
//                             <span className="user-name">{user.nom || user.prenom}</span>
//                         </Link>
//                         <button onClick={logout} className="logout-btn">Déconnexion</button>
//                     </>
//                 ) : (
//                     <Link to="/Login" className="login-btn">
//                         <FontAwesomeIcon icon={faUser} />
//                         <span>Connexion</span>
//                     </Link>
//                 )}
//             </div>
//
//             {/* Menu Mobile */}
//             <div className="mobile-menu">
//                 <FontAwesomeIcon
//                     icon={isOpen ? faTimes : faBars}
//                     className="burger-icon"
//                     onClick={() => setIsOpen(!isOpen)}
//                 />
//
//                 {isOpen && (
//                     <div className="mobile-nav">
//                         <Link to="/Cafe" className="mobile-link" onClick={() => setIsOpen(false)}>Café</Link>
//                         <Link to="/The" className="mobile-link" onClick={() => setIsOpen(false)}>Thé</Link>
//                         <Link to="/Accessoires" className="mobile-link" onClick={() => setIsOpen(false)}>Accessoires</Link>
//
//                         <div className="mobile-search">
//                             <input
//                                 type="text"
//                                 placeholder="Recherche..."
//                                 className="mobile-search-input"
//                             />
//                             <FontAwesomeIcon icon={faSearch} />
//                         </div>
//
//                         {isAuthenticated ? (
//                             <>
//                                 <Link to="/Profil" className="mobile-link" onClick={() => setIsOpen(false)}>
//                                     Mon compte
//                                 </Link>
//                                 <button onClick={logout} className="mobile-logout">Déconnexion</button>
//                             </>
//                         ) : (
//                             <Link to="/Login" className="mobile-login" onClick={() => setIsOpen(false)}>
//                                 Connexion
//                             </Link>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// }
//
// export default Navbar;
//