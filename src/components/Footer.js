import React from 'react';
import "../styles/footer.css"
function Footer(props) {
    return (
        <>
            <footer>
                <div className={"link-footer"}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"  className={"link-must"}>Politique de confidentialité</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className={"link-must"}>Condition générales de vente</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className={"link-must"}>Mention légale</a>
                </div>

            </footer>
        </>
    );
}

export default Footer;