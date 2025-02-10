import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css"
import "../styles/FicheCard.css"


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


    return (
        <div className="description">
            <div className="describe_one">
                <div className="pix-one">image</div>
                <div className="describe-column">
                    <h3>{produit.nom}</h3>
                    <p>{produit.description}</p>
                    <p>{produit.type}</p>
                    <p>{produit.prix}</p>
                    <p>{produit.typeUnite}</p>
                    <p>{produit.typePoids}</p>
                    <button className="btn">Acheter ce produit</button>
                </div>

            </div>

        </div>
    );
}

export default ProductDetail;