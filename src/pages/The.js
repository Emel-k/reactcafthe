import React, {useEffect}from 'react';
import ProductLists from "./ProductLists";
import "../styles/the.css"

import styled from 'styled-components'



function The() {

    return (
        <>

            <header className="header-the">
                <div className="banner-the">
                </div>
            </header>
            <main className="main-content-the">
                <h3 className={`list-produits`}> Listes des thés</h3>
                <ProductLists />
            </main>


        </>
    );
}

export default The;