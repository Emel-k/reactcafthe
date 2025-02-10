import React from 'react';
import {Link} from "react-router-dom";




function ProductCard({produit}) {
    return (
        <div className="card">
            <div className="pix">Image</div>
            <div className="describe">
                <h3>{produit.nom}</h3>
                <p>{produit.prix}€</p>
                <Link to={`/produits/${produit.produitsID}`}>
                    Voir details
                </Link>
            </div>



        </div>
    );
}

export default ProductCard;