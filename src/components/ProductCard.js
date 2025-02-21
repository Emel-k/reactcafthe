import React from 'react';
import {Link} from "react-router-dom";




function ProductCard({produit}) {
    // eslint-disable-next-line no-restricted-globals
    const currentLink = self.location.pathname.split("/");

    return (
        <div className={`card fiche-${currentLink[1]}`}>
            <div className="pix">Image</div>
            <div className="describe">
                <h3>{produit.nom}</h3>
                <p>{produit.prix}€</p>
                <Link className="detail" to={`/produits/${produit.produitsID}`}>
                    Voir details
                </Link>
            </div>
            <button className='btn-cart'><Link className="link-cart">Ajouter au panier</Link></button>
        </div>
    );
}

export default ProductCard;