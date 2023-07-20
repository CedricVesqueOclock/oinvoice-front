import React from "react";
import './SignInForm.scss';

function SignInForm() {
  return(
    <form action="" className="signInForm">
      <label htmlFor="mail">Votre E-mail :</label>
      <input type="mail" />
      <label htmlFor="mail">Votre mot de passe :</label>
      <input type="password" name="" id="" />
      <button type="submit">Se connecter</button>
      <p>Pas encore de compte?</p>
      <a href="#">S'inscrire</a>
    </form>
  )
};

export default SignInForm;