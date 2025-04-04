import React from 'react';
import {Link} from "react-router-dom";




function ProductCard({produit}) {
    // eslint-disable-next-line no-restricted-globals
    const currentLink = self.location.pathname.split("/");
    const productImage = `/image/${produit.image_url || 'image/placeholder.webp'}`;

    const handleClick = (produitsID) => {
        console.log(produitsID, 'ajout panier')
    }

    return (
        <div className={`card fiche-${currentLink[1]}`}>
            <div className="pix"><img src={productImage} alt={produit.nom}/> </div>
            <div className="describe">
                <h3>{produit.nom}</h3>
                <p>{produit.prix}€</p>
                <Link className="detail" to={`/produits/${produit.produitsID}`}>
                    Voir details
                </Link>
            </div>
            <button className='btn-cart'><Link className="link-cart" onClick={() => handleClick (produit)}>Ajouter au panier</Link></button>
        </div>
    );
}

export default ProductCard;