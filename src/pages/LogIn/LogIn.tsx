import React from "react";

// Import du scss
import './LogIn.scss';

// Import des composants
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

function SignInForm() {
  return(
    <>
      <Header />
      <form action="" className="signInForm">
        <h2>Connectez vous ...</h2>
        <label htmlFor="mail">Votre E-mail :</label>
        <input type="mail" />
        <label htmlFor="mail">Votre mot de passe :</label>
        <input type="password" name="" id="" />
        <button type="submit">Se connecter</button>
        <p>Pas encore de compte?</p>
        <NavLink
            className="
            menu-link"
            to="/register"
          >
            <p>S'inscrire</p>
          </NavLink>
      </form>
      <Footer />
   </>
  )
};

export default SignInForm;