import React from 'react';


function Navbar(props) {
    return (
        <div>
            <nav>
                <div>LOGO</div>

                    <ul className="cafe_the">
                        <li><a href="#">Café</a></li>
                        <li><a href="#">Thé</a></li>
                        <li><a href="#">Accesoires</a></li>
                    </ul>
                    <ul className="left">
                        <li><a>Panier</a></li>
                        <li><a>search</a></li>
                        <li><a>Connexion</a></li>
                    </ul>


            </nav>
        </div>
    );
}

export default Navbar;