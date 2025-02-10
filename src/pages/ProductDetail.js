import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css"

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
        <div>
            <h3>{produit.nom}</h3>
            <p>{produit.description}</p>
            <p>{produit.type}</p>
            <p>{produit.prix}</p>
        </div>
    );
}

export default ProductDetail;