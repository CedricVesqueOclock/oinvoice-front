import React from "react";

// Import du scss
import './LogInForm.scss';

// Import des composants
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function SignInForm() {
  return(
    <>
      <Header />
      <form action="" className="signInForm">
        <label htmlFor="mail">Votre E-mail :</label>
        <input type="mail" />
        <label htmlFor="mail">Votre mot de passe :</label>
        <input type="password" name="" id="" />
        <button type="submit">Se connecter</button>
        <p>Pas encore de compte?</p>
        <a href="#">S'inscrire</a>
      </form>
      <Footer />
   </>
  )
};

export default SignInForm;