import React from 'react';
//npm install react-router-dom;
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductLists from "../pages/ProductLists";
import ProductCard from "../components/ProductCard";

function Layout(props) {
    return (
        <>
            <Header/>
            <Navbar/>
            {/*Outlet : là ou s'affichent les pages enfants*/}
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;