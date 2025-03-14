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

                <ProductLists />
            </main>


        </>
    );
}

export default The;