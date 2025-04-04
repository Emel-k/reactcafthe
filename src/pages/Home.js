import React from 'react';

import "../styles/Home.css"

import {Link} from "react-router-dom";
import styled from "styled-components";



function Home(props) {
    return (
        <>
            <div className="Header-home">
                <img src="/image/1.png" alt="" height="30%" width="100%" border-radius="none"/>
            </div>

            <section >
                <h1 className="product-title"> Nos produits, soigneusement sélectionnés par nos soins </h1>

                <div className="container-boxes">

                    <div className="cafe-produit box">
                        <Link to="/Cafe" className="link-p hcafe"><p className="subtitle">Produit Café</p></Link>
                    </div>

                    <div className="the-produit box">
                        <Link to="/The" className="link-p hthe"><p className="subtitle ">Produit Thé</p></Link>
                    </div>

                    <div className="accessory-produit box">
                        <Link to="/search" className="link-p hacce"><p className="subtitle">Accessoires</p></Link>
                    </div>
                </div>

            </section>

            <section className="container-story">
                <div className="story-title">
                <h2 > <span className="texte left-title">Histoire de</span> <span className="texte right-title">CAF'THÉ</span></h2>

                </div>
                <div className="story-content">
                    <div className="story">
                        <div className="story-paragraph">
                            <p>
                    <span>Chez Caf’thé, chaque tasse raconte une histoire, celle d’un voyage à la recherche des meilleurs arômes.
                    Passionnés par le café et le thé, nous sélectionnons avec minutie des produits bio, issus des terroirs les plus authentiques.
                    Derrière chaque feuille de thé ou chaque grain de café se cache le travail de producteurs engagés,
                    respectueux de la nature et des traditions. Nous prenons le temps de découvrir, de goûter et de
                    choisir les saveurs qui éveilleront vos sens, pour vous offrir une expérience unique, entre authenticité et raffinement.
                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="picture">
                        <img src="/image/story.jpeg" alt="dessin de champ" />
                    </div>
                </div>
            </section>

            <section className="container-value">
                <div className="story-title">
                    <h2 > <span className="texte left-title">Nos</span> <span className="texte right-title">valeurs</span></h2>

                </div>
                <div className="value-content">
                    <div className="value">
                        <div className="value-paragraph">
                            <p>
                    <span>Chez Caf’thé, chaque tasse raconte une histoire, celle d’un voyage à la recherche des meilleurs arômes.
                    Passionnés par le café et le thé, nous sélectionnons avec minutie des produits bio, issus des terroirs les plus authentiques.
                    Derrière chaque feuille de thé ou chaque grain de café se cache le travail de producteurs engagés,
                    respectueux de la nature et des traditions. Nous prenons le temps de découvrir, de goûter et de
                    choisir les saveurs qui éveilleront vos sens, pour vous offrir une expérience unique, entre authenticité et raffinement.
                    </span>
                            </p>
                        </div>
                    </div>
                    <div className="picture">
                        <img src="/image/story.jpeg" alt="dessin de champ" />
                    </div>
                </div>
            </section>
        </>

    );
}

export default Home;