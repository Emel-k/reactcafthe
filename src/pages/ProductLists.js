import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import "../styles/Card.css"

// npm install react-loading-skeleton
// npm install axios
function ProductLists(props) {
    const [produits, setProduits] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
    const fetchProduits =async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/produits");
            setProduits(response.data)
        }catch (error) {
            console.error("Erreur de chargement des produits ", error);
        }finally {
            setIsloading(false); /*On arrete d'afficher le chargement (squelettes)*/
        }
    };
    void fetchProduits()
    },[]);

    if (isLoading){
        return(
            <div >
                {Array.from({length : 6}).map((_,i) => (
                    <div key={i} className="product-skeleton">
                        <Skeleton height={200} width={300}/>
                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={30} width="80%"/>
                        </div>
                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width="40%"/>
                        </div>
                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={40} width="40%"/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }


    return (
        <div className="product-list"  >
            <h3> Listes des produits</h3>
            <div className="fiche" >
                {produits.map((produit) => (
                    <ProductCard key={produit.produitsID} produit={produit} />
                ))}
            </div>
        </div>
    );
}

export default ProductLists;