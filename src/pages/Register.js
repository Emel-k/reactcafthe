import React from 'react';
import {Link} from "react-router-dom";
import "../styles/register.css";

function Register(props) {



    return (
        <div>

                <form className="register" >
                    <label htmlFor="lastname">Nom</label>
                    <input type="lastname" id="lastname" name="lastname" placeholder="Ton nom" required/>

                    <label htmlFor="name">Prénom</label>
                    <input type="name" id="name" name="name" placeholder="Ton prénom" required/>

                    <label htmlFor="birthday">Date de naissance</label>
                    <input type="date" id="birthday" name="birthday" placeholder="Date de naissance" required/>

                    <label htmlFor="tel">Numéro de téléphone</label>
                    <input type="tel" id="tel" name="tel" placeholder="Ton numéro de téléphone" required/>

                    <label htmlFor="adresse">Ton adresse</label>
                    <input type="adresse" id="adresse" name="adresse" placeholder="Ton adresse" required/>

                    <label htmlFor="email">Email</label>
                    <input type="email"
                           placeholder="Ton adresse mail"
                           name="email"
                           required/>

                    <label htmlFor="pwd">Mot de passe</label>
                    <input type="password"
                           placeholder="Entrez votre mot de passe"
                           name="pwd"
                           required/>

                    <button className="btn-create" type="submit">Créer votre compte</button>

                </form>
        </div>
    );
}

export default Register;
