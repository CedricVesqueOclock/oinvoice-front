import React from 'react';

// Import du scss
import './Register.scss'

//Import des composants
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function SignInForm() {
  return (
    <>
      <Header />
      <div className="form">
        <form className="signInForm">
          <h2>Inscrivez vous ...</h2>
          <label htmlFor="name">Nom de l'entreprise :</label>
          <input type="text" id='name' />
          <label htmlFor="mail">Email :</label>
          <input type="mail" id='mail' />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id='password' />
          <label htmlFor="address">Adresse :</label>
          <input type="text" id='address' />
          <label htmlFor="zip_code">Code postal :</label>
          <input type="text" id='zip_code' />
          <label htmlFor="city">Ville :</label>
          <input type="text" id='city' />
          <label htmlFor="phone">Téléphone :</label>
          <input type="text" id='phone' />
          <label htmlFor="siret">Siret :</label>
          <input type="text" id='siret' />
          <label htmlFor="siren">Siren :</label>
          <input type="text" id='siren' />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default SignInForm;