import React, {useEffect} from 'react';
import ProductLists from "./ProductLists";
import "../styles/cafe.css"




function Cafe() {

    return (
        <>
            <header className="header-cafe">
                <div className='banner-cafe'></div>
            </header>

            <main className="main-content-cafe">
                <h3 className={`list-produits`}> Listes des cafés</h3>
                <ProductLists />
            </main>


        </>
    );
}

export default Cafe;