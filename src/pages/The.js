import React, {useEffect}from 'react';
import ProductLists from "./ProductLists";
import "../styles/the.css"

import styled from 'styled-components'


const BackgroundDiv = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url('./image/teea.png');  /* Le chemin de l'image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
function The() {
    useEffect(() => {
        document.body.style.backgroundColor = '#f7f1e9'; // Définir la couleur de fond pour Home
        return () => {
            document.body.style.backgroundColor = ''; // Réinitialiser le fond lorsque la page est quittée
        };
    }, []);
    return (
        <>

            <BackgroundDiv>
                <div className="banner-the">
                    <div style={{width: "50%"}}></div>
                    <div className="titre-style-the">
                        <h1 className="titre-the">Thé</h1>
                        <h2 className="titre-the">Tea</h2>
                    </div>
                </div>

            </BackgroundDiv>
            <ProductLists />


        </>
    );
}

export default The;