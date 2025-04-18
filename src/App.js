import './styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import ProductDetail from "./pages/ProductDetail";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import The from "./pages/The";
import Cafe from "./pages/Cafe";
import Panier from "./pages/Panier";
import Accessoires from "./pages/Accesoires";
import PasswordForgot from "./pages/PasswordForgot";
import Register from "./pages/Register";
import Profil from "./pages/Profil";
import {useState} from "react";
import MentionsLegales from "./pages/MentionsLegales";
import Pdc from "./pages/Pdc";
import Cgv from "./pages/Cgv";
import Cgu from "./pages/Cgu";

function App() {

  return (
      <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="produits/:id" element={<ProductDetail />}/>
                    <Route path={"login"} element={<Login />} />
                    <Route path={"The"} element={<The/>}  />
                    <Route path={"Cafe"} element={<Cafe/>}/>
                    <Route path={"Accessoires"} element={<Accessoires />} />
                    <Route path={"Panier"} element={<Panier />} />
                    <Route path={"PasswordForgot"} element={<PasswordForgot />} />
                    <Route path={"Register"} element={<Register />} />
                    <Route path={"Profil"} element={<Profil />} />
                    <Route path={"MentionsLegales"} element={<MentionsLegales />} />
                    <Route path={"Pdc"} element={<Pdc />} />
                    <Route path={"Cgv"} element={<Cgv />} />
                    <Route path={"Cgu"} element={<Cgu />} />
                </Route>
            </Routes>
        </BrowserRouter>

      </AuthProvider>
  );
}

export default App;

