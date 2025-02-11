import React, {useContext, useState} from 'react';
import "../styles/login.css"
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function Login(props) {

    const {login} = useContext(AuthContext)// fonction login venant du contexte

    const[email, setEmail] = useState("");
    const [mot_de_passe, setMot_de_passe] = useState("");
    const {errorMsg, setErrorMsg} = useState("");

    const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await axios.post("http://localhost:3000/api/client/login",
                    {
                        email,
                        mot_de_passe,
                    },
                    );
                const {token, client} = response.data
                console.log(token, client)
            } catch (error) {}
    }

    return (
        <div className="centerForm">

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email"
                   placeholder="Ton adresse mail"
                   name="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required/>

            <label htmlFor="pwd">Mot de passe</label>
            <input type="password"
                   placeholder="Entrez votre mot de passe"
                   name="pwd"
                   value={mot_de_passe}
                   onChange={(e) => setMot_de_passe(e.target.value)}
                   required/>

            <button className="btn-login" type="submit">Connexion</button>
        </form>
        </div>
    );
}

export default Login;