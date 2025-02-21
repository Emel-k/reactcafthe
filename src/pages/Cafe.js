import React from 'react';
import ProductLists from "./ProductLists";

function Cafe(props) {
    return (
        <>
            <div className="banner-image">
                <img className="coffe-filtre" src="/image/coffee-banner.jpg" alt="filtre à café" height="300px" width="600px"/>
            </div>
            <ProductLists />
        </>
    );
}

export default Cafe;