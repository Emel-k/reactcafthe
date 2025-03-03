import React, {useEffect} from 'react';
import ProductLists from "./ProductLists";
import styled from "styled-components";
import "../styles/accessory.css"


const BackgroundDiv = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url('./image/accessory.png');  /* Le chemin de l'image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
function Accessoires(props) {
    useEffect(() => {
        document.body.style.backgroundColor = '#f7f1e9'; // Définir la couleur de fond pour Home
        return () => {
            document.body.style.backgroundColor = ''; // Réinitialiser le fond lorsque la page est quittée
        };
    }, []);
    return (
        <>

            <BackgroundDiv>
                <div className="banner-cafe">
                </div>
                <div className="titre-style-accessory">
                    <h1 className="titre-accessory">Accessoire</h1>
                    <h2 className="titre-accessory">Accessory</h2>
                </div>
            </BackgroundDiv>
            <ProductLists />
        </>
    );
}

export default Accessoires;