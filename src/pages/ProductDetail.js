import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css"
import "../styles/ProductDetail.css"


function ProductDetail(props) {
    const { id } = useParams();

    const [produit, setProduit] = useState([]);

    useEffect(() => {
        const fetchProduit = async () => {
            try {

                const response = await axios.get(`http://localhost:3000/api/produits/details/${id}`);
                setProduit(response.data)
            }catch (error) {
                console.error("Erreur de chargement du produit ", error);
            }
        };

        void fetchProduit()
    }, [id]);

    const productImage = `/image/${produit.image_url || "placeholder.webp"}`;

    return (
        <div className="description">
            <div className="describe_one">
                <div className="pix-image"><img src={productImage} alt={produit.nom}/> </div>
                <div className="describe-column">
                    <h3 className="title-product">{produit.nom}</h3>
                    <p className="space">{produit.description}</p>
                    <p className="space">{produit.type}</p>
                    <p className="space">{produit.prix}€</p>
                    <p className="space">{produit.typeUnite}</p>
                    <p className="space">{produit.typePoids}g</p>
                    <button className="btn">Acheter ce produit</button>
                </div>

            </div>

        </div>
    );
}

export default ProductDetail;