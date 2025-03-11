function PasswordForgot(props) {
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date_naissance, setDate_naissance] = useState("");
    const [errorMsg, setErrorMsg]= useState("");

    const handlePasswordForgot = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/client/pwmodif`,
                {
                    email,
                    telephone,
                    date_naissance,
                },
            )
        } catch (error){}
    }

    return (
        <>
    <form className="form-pwd">
    <h2>Mot de passe oubliée?</h2>
        <div className="container-pwd">
            <label htmlFor="" className='input-pwd'>Votre adresse mail</label>
            <input type="text"/>

            <label htmlFor="" className='input-pwd'>Votre date de naissance</label>
            <input type="date"/>


            <label htmlFor="" className='input-pwd'>Votre numero de téléphone</label>
            <input type="tel"/>
        </div>
    </form>
        </>

);
}
import React, {useState} from 'react';

import "../styles/passwordForgot.css"

export default PasswordForgot;
