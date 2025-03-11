import React, {useContext, useState} from 'react';
import "../styles/login.css"
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Login(props) {

    const {login} = useContext(AuthContext)// fonction login venant du contexte
    const navigate = useNavigate(); //La navigation


    const[email, setEmail] = useState("");
    const [mot_de_passe, setMot_de_passe] = useState("");
    const [errorMsg, setErrorMsg]= useState("");

    const handleSubmit = async (e) => {
            e.preventDefault();
            setErrorMsg("");

            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/client/login`,
                    {
                        email,
                        mot_de_passe,
                    },
                    );
                const {token, client} = response.data

                //On met à jour contexte d'authentification

                login(token, client);

                // Redirection du client vers une page

                navigate("/");

            } catch (error) {
                console.error("Erreur lors de la connexion :", error);

                if(error.response.data.message){
                    setErrorMsg(error.response.data.message);
                } else{
                    setErrorMsg("Erreur");
                }
            }
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

            {errorMsg && (
                <div style={{color: "red", marginBottom :10}}>{errorMsg}</div>
            )}

            <div className="password-edit">
                <Link to="/PasswordForgot" className="link-password"> Mot de passe oublié ?</Link>
            </div>

            <button className="btn-login" type="submit">Connexion</button>
        </form>



        </div>
    );
}

export default Login;