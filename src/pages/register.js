import React from 'react';

function Register(props) {
    e.preventDefault();

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`,

            props);
    }

    return (
        <div></div>
    );
}

export default Register;
