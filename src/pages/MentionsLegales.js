import React from 'react';
import "../styles/legales.css"
function MentionsLegales(props) {
    return (
        <div>
            <div className="legal-page">
                <h1>Mentions Légales</h1>
                <p><strong>Nom du site :</strong> Caf’Thé</p>
                <p><strong>URL :</strong> www.cafthe.fr</p>
                <p><strong>Responsable de publication :</strong> Julien Mercier</p>
                <p><strong>Adresse :</strong> 12 rue des Tilleuls, 75012 Paris</p>
                <p><strong>Email :</strong> contact@cafthe.fr</p>
                <p><strong>SIRET :</strong> Fictif – Projet pédagogique</p>
                <p><strong>Statut juridique :</strong> Projet personnel – Non commercial</p>
                <p><strong>Hébergeur :</strong> Plesk (serveur personnel)</p>
                <p><strong>Site de l’hébergeur :</strong> <a href="https://www.plesk.com" target="_blank" rel="noreferrer">plesk.com</a></p>
            </div>

        </div>
    );
}

export default MentionsLegales;