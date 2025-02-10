import React from 'react';
import {Link} from "react-router-dom"

function ProductCard({produit}) {
    return (
        <div>
            <h3>{produit.nom}</h3>
            <p>{produit.prix}</p>
            <Link to={`/produits/${produit.produitsID}`}>
                Voir details
            </Link>
        </div>
    );
}

export default ProductCard;