import React from 'react';
import "../styles/footer.css"
import Pdc from "../pages/Pdc";
import Cgv from "../pages/Cgv";
import Cgu from "../pages/Cgu";
import MentionsLegales from "../pages/MentionsLegales";
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <>
            <footer>
                <div className={"link-footer"}>

                    <Link to="/Pdc"> <p>Politique de confidentialité </p></Link>

                    <Link to="/Cgv">Condition générales de vente</Link>

                    <Link to="/Cgu">Condition générales Utilisateur</Link>

                    <Link to="/MentionsLegales" >Mentions légales</Link>



                </div>

            </footer>
        </>
    );
}

export default Footer;