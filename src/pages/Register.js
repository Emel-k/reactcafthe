import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import {useNavigate}from "react-router-dom";
function Register(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [mot_de_passe, setMot_de_passe] = useState("");
    const [nom_prenom, setNom_prenom] = useState("");
    const [date_naissance, setDate_Naissance] = useState("");
    const [telephone, setTelephone] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/client/register`,

                {
                    nom_prenom,
                    email,
                    mot_de_passe,
                    date_naissance,
                    telephone
                },
            );

            //On met à jour contexte d'authentification

            console.log(response.data)

            // Redirection du client vers une page

            navigate("/");

        } catch (error) {
            console.error("Erreur lors de la connexion :", error);

            if(error.response.data.message){
                setError(error.response.data.message);
            } else{
                setError("Erreur");
            }
        }
    }


    return (
        <div>

                <form className="register" onSubmit={handleSubmit} >
                    <label htmlFor="lastname">Nom et Prénom</label>
                    <input type="lastname"
                           id="lastname"
                           name="lastname"
                           placeholder="Ton nom"
                           value={nom_prenom}
                           onChange={e => setNom_prenom(e.target.value)}
                           required/>


                    <label htmlFor="birthday">Date de naissance</label>
                    <input type="date"
                           id="birthday"
                           name="birthday"
                           placeholder="Date de naissance"
                           value={date_naissance}
                           onChange={e => setDate_Naissance(e.target.value)}
                           required/>

                    <label htmlFor="tel">Numéro de téléphone</label>
                    <input type="tel"
                           id="tel"
                           name="tel"
                           placeholder="Ton numéro de téléphone"
                           value={telephone}
                           onChange={e => setTelephone(e.target.value)}
                           required/>


                    <label htmlFor="email">Email</label>
                    <input type="email"
                           placeholder="Ton adresse mail"
                           name="email"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           required/>

                    <label htmlFor="pwd">Mot de passe</label>
                    <input type="password"
                           placeholder="Entrez votre mot de passe"
                           name="pwd"
                           value={mot_de_passe}
                           onChange={e => setMot_de_passe(e.target.value)}
                           required/>


                    <button className="btn-create" type="submit">Créer votre compte</button>

                </form>
        </div>
    );
}

export default Register;
