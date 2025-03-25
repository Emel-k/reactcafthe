import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import "../styles/profil.css"

function Profil() {
    const user = JSON.parse(localStorage.getItem("user"));
    const nom = localStorage.getItem("nom");
    const email = localStorage.getItem("email");
    const [orders, setOrders] = useState([]);
    const [isloading, setisLoading] = useState(true);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/commandes`,
                    {headers : {Authorization : `Bearer ${localStorage.getItem("token")}`}});


            }catch (error) {
                console.error("Erreur de chargement des produits ", error);
            }finally {
                setisLoading(false); /*On arrete d'afficher le chargement (squelettes)*/
            }
        };
        void fetchProduits()
    },[]);


    return (
        <div className="profile">
            <h1>Bonjour</h1>
            <div className="user-info">
                <ul>
                    <li>nom : {user.nom}</li>
                    <li>nom : {user.email}</li>

                    <li>Modifier le profile</li>
                    <li>Modofier le mot de passe</li>
                    <li>Supprimer mon compte</li>
                    <li></li>
                </ul>
            </div>

            <div className="order-history">
                <h2>Historique des commandes</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Montant</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id} className={index % 2 === 0 ? "even" : "odd"}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.montant.toFixed(2)} €</td>
                            <td className={`status ${order.statut.toLowerCase()}`}>{order.statut}</td>
                            <td>
                                <button onClick={() => alert(`Détails de la commande ${order.id}`)}>
                                    Voir détails
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* Ajout d'un message si aucune commande */}
                {orders.length === 0 && <p>Aucune commande trouvée.</p>}
            </div>

        </div>
    );
}

export default Profil;