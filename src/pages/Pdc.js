import React from 'react';
import "../styles/legales.css"

function Pdc(props) {
    return (
        <div>
            <div className="legal-page">
                <h1>Politique de Confidentialité</h1>
                <p>Chez Caf’Thé, nous respectons votre vie privée.</p>

                <h2>Données collectées</h2>
                <ul>
                    <li>Formulaires : nom, prénom, email</li>
                    <li>Cookies à des fins statistiques</li>
                </ul>

                <h2>Utilisation</h2>
                <p>Vos données sont utilisées pour vous répondre et améliorer le site.</p>

                <h2>Conservation</h2>
                <p>Durée maximale de conservation : 12 mois.</p>

                <h2>Cookies</h2>
                <p>Vous pouvez les accepter ou les refuser via le bandeau prévu à cet effet.</p>

                <h2>Vos droits</h2>
                <p>Contactez-nous à <a href="mailto:contact@cafthe.fr">contact@cafthe.fr</a> pour exercer vos droits.</p>
            </div>

        </div>
    );
}

export default Pdc;