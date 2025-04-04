import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

function AfficheLigne({ligne, reloadPanier}) {
    const [produit, setProduit] = useState(null);

    // Appel API pour récupérer le produit de la ligne
    useEffect(() => {
        const fetchProduit = async () => {
            try {

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produits/details/${ligne[0].produitsID}`);

                console.log("Données reçues :", response.data);
                setProduit(response.data)
            }catch (error) {
                console.error("Erreur de chargement du produit ", error);
            }
        };

        void fetchProduit()
    });

    return (
        <div>
            {ligne === null ? (
                <p>{ligne}</p>
            ) : (
                "Affiche la ligne"
            )}
        </div>
    );
}

export default AfficheLigne;