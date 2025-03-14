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

                <ProductLists />
            </main>
        </>
    );
}

export default Accessoires;