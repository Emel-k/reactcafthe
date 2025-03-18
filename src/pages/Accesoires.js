import React, {useEffect} from 'react';
import ProductLists from "./ProductLists";
import styled from "styled-components";
import "../styles/accessory.css"



function Accessoires(props) {

    return (
        <>
            <header className="header-acce">
                <div className="banner-acce">
                </div>
            </header>

            <main className="main-content">
                <h3 className={`list-produits-acce`}> Listes des accessoires</h3>
                <ProductLists />
            </main>
        </>
    );
}

export default Accessoires;