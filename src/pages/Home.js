import React from 'react';

import "../styles/Home.css"

import {Link} from "react-router-dom";

function Home(props) {
    return (
        <>

            <div className="banner">
                <div className="left-side">
                    <h1>CAF'THÉ</h1>
                </div>
                <div className="right-side">
                    <img src=".idea/src/different-drinks.png" alt="Image de café et de thé" height="200px"
                         width="400px"/>
                </div>
            </div>

            <section className="container-boxes">

                <div className="cafe-produit box">
                    <Link to="/Cafe" className="link-nav">Produit Café</Link>
                </div>

                <div className="the-produit box">
                    <Link to="/The" className="link-nav">Produit Thé</Link>
                </div>

                <div className="accessory-produit box">
                    <Link to="/search" className="link-nav">Accesoires</Link>
                </div>

            </section>

            <section className="container-story">
                <div className="story">
                    <div className="story-text">
                        <h2 className="story-title">Histoire de CAF'THÉ</h2>
                    </div>

                    <div className="story-paragraph">
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicingkjcdjsbcjk vbv ejv qej mqjk vkmj qmjfqjv jv ejqvùk lv qjkmkqj vljkùfkkjqjefj ej vj revj rj fj j vkjd vjkd vkj jv qejv qmkj vmkjq vmkjq vkj dfmkjv dfqkmjv mkjfd vkjq vkj vmkjef mkvjf kwjv j qkjv j vkmjq  elit. Aspernatur culpa dolores, excepturi facilis impedit magni molestias nostrum nulla officia porro quae quasi quod </span>
                        </p>
                    </div>

                </div>
                <div className="picture">
                    <img src=".idea/src/field.jpg" alt="illustration dessin de champ" height="350px" width="400px"/>
                </div>
            </section>
        </>

    );
}

export default Home;