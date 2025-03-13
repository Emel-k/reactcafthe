import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import "../styles/ProductCard.css"


// npm install react-loading-skeleton
// npm install axios
function ProductLists() {
    const [produits, setProduits] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    // eslint-disable-next-line no-restricted-globals
    const currentLink = self.location.pathname.split("/");

    useEffect(() => {
    const fetchProduits = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produits`,
                {headers : {Authorization : `Bearer ${localStorage.getItem("token")}`}});

            // Récupère le chemin de l'URL et le divise en un tableau en utilisant le caractère "//

// Crée un tableau temporaire pour stocker les résultats filtrés
            let temp = [];

// Vérifie si le deuxième segment de l'URL est "The"
            if (currentLink[1] === "The") {
                // Si l'URL contient "The", filtre les éléments de type "thé"
                for (let i = 0; i < response.data.length; i++) {
                    // Si l'élément actuel est de type "thé", on l'ajoute à temp
                    if (response.data[i].type === "thé") {
                        temp.push(response.data[i]);
                    }
                }
            }
// Si le deuxième segment de l'URL est "Cafe"
            else if (currentLink[1] === "Cafe") {
                // Si l'URL contient "Cafe", filtre les éléments de type "café"
                for (let i = 0; i < response.data.length; i++) {
                    // Si l'élément actuel est de type "café", on l'ajoute à temp
                    if (response.data[i].type === "café") {
                        temp.push(response.data[i]);
                    }
                }
            }
// Si le deuxième segment de l'URL n'est ni "The" ni "Cafe"
            else {
                // Si l'URL ne correspond à aucune catégorie spéciale, filtre les éléments de type "accessoire"
                for (let i = 0; i < response.data.length; i++) {
                    // Si l'élément actuel est de type "accessoire", on l'ajoute à temp
                    if (response.data[i].type === "accessoire") {
                        temp.push(response.data[i]);
                    }
                }
            }

            setProduits(temp)
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
        <>
            <div className="main-part">
                <h3 className={`list-produits`}> Listes des produits</h3>
                <div className="product-list"  >
                    <div className={`fiche`} >
                        {produits.map((produit) => (
                            <ProductCard key={produit.produitsID} produit={produit} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductLists;