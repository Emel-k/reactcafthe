/*
import React, {useState} from 'react';


function PasswordForgot(props) {
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date_naissance, setDate_naissance] = useState("");
    const [errorMsg, setErrorMsg]= useState("");

    const handlePasswordForgot = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        try {
            const response = await axios.put("http://localhost:3000/api/client/pwmodif",
                {
                    email,
                    telephone,
                    date_naissance,
                },
                )
        }
    }

    return (
        <form >
            <label htmlFor="">Votre adresse mail</label>
            <input type="text"/>

            <label htmlFor="">Votre date de naissance</label>
            <input type="text"/>

            <label htmlFor="">Votre numero de téléphone</label>
        </form>

    );
}

export default PasswordForgot;*/
