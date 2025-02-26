import React from 'react';
import "../styles/footer.css"
function Footer(props) {
    return (
        <>
            <footer>
                <div className={"link-footer"}>

                    <a href="#"  className={"link-must"}>Politique de confidentialité</a>

                    <a href="#" className={"link-must"}>Condition générales de vente</a>

                    <a href="#" className={"link-must"}>Mention légale</a>
                </div>

            </footer>
        </>
    );
}

export default Footer;