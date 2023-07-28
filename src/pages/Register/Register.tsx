import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Import du scss
import './Register.scss'

//Import des composants
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Register() {
  
  const[fields, setFields] = useState({});
  const navigate = useNavigate();
  function Submit(event: { preventDefault: () => void; }) {
    event.preventDefault()

    axios.post("http://0.0.0.0:3000/api/user", fields)
    .then(function(res){
      //récupération des datas
      console.log(res.data);
      alert('Compte Crée');
      navigate('/login');
    })
    .catch(function(error){
      console.log(error);      
    })
  }

  return (
    <>
      <Header />
      <div className="form">
        <form className="signInForm" onSubmit={Submit}>
          <h2>Inscrivez vous ...</h2>
          <label htmlFor="name">Nom de l'entreprise :</label>
          <input type="text" id='name' onChange={event => setFields({...fields, name:event.target.value})} required />
          <label htmlFor="mail">Email :</label>
          <input type="mail" id='mail' onChange={event => setFields({...fields, mail:event.target.value})} required />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id='password' onChange={event => setFields({...fields, password:event.target.value})} required />
          <label htmlFor="address">Adresse :</label>
          <input type="text" id='address' onChange={event => setFields({...fields, address:event.target.value})} required />
          <label htmlFor="zip_code">Code postal :</label>
          <input type="text" id='zip_code' onChange={event => setFields({...fields, zip_code:event.target.value})} required />
          <label htmlFor="city">Ville :</label>
          <input type="text" id='city' onChange={event => setFields({...fields, city:event.target.value})} required />
          <label htmlFor="number">Téléphone :</label>
          <input type="text" id='number' onChange={event => setFields({...fields, number:event.target.value})} required />
          <label htmlFor="siret">Siret :</label>
          <input type="text" id='siret' onChange={event => setFields({...fields, siret:event.target.value})} required />
          <label htmlFor="siren">Siren :</label>
          <input type="text" id='siren' onChange={event => setFields({...fields, siren:event.target.value})} required />
          <button type="submit" className='register-button'>S'inscrire</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Register;