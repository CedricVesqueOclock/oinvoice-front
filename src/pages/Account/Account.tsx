import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAPI, logout } from '../../utils/api'
// Import du scss
import './Account.scss'

//Import des composants
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Account() {
  
  const[fields, setFields] = useState({});
  const navigate = useNavigate();
  function Submit(event: { preventDefault: () => void; }) {
    event.preventDefault()

    getAPI().patch("http://0.0.0.0:3000/api/user/me", fields)
    .then(function(res){
      //récupération des datas
      console.log(res.data);
      alert('Compte modifié')
    })
    .catch(function(error){
      console.log(error);      
    })
  }

  useEffect(function(){
    getAPI().get("http://0.0.0.0:3000/api/user/me", fields)
    .then(function(res){
      //récupération des datas
      setFields(res.data);
      console.log(res.data);
    })
    .catch(function(error){
      console.log(error);      
    })
  }, [])

  const deleteAccount = function() {
    getAPI().delete("http://0.0.0.0:3000/api/user/me")
    .then(function(res){
      //récupération des datas
      navigate('/login')
      console.log(res.data);
    })
    .catch(function(error){
      console.log(error);      
    })
  }

  const logoutAccount = function() {
    logout()
    navigate('/login')
  }

  return (
    <>
      <Header />
      <div className="form">
        <form className="signInForm" onSubmit={Submit}>
          <h2>Modifier mon compte</h2>
          <label htmlFor="name">Nom de l'entreprise :</label>
          <input type="text" id='name' value={fields.name} onChange={event => setFields({...fields, name:event.target.value})} required />
          <label htmlFor="mail">Email :</label>
          <input type="mail" id='mail' value={fields.mail} onChange={event => setFields({...fields, mail:event.target.value})} required />
          <label htmlFor="address">Adresse :</label>
          <input type="text" id='address' value={fields.address} onChange={event => setFields({...fields, address:event.target.value})} required />
          <label htmlFor="zip_code">Code postal :</label>
          <input type="text" id='zip_code' value={fields.zip_code} onChange={event => setFields({...fields, zip_code:event.target.value})} required />
          <label htmlFor="city">Ville :</label>
          <input type="text" id='city'value={fields.city} onChange={event => setFields({...fields, city:event.target.value})} required />
          <label htmlFor="number">Téléphone :</label>
          <input type="text" id='number'value={fields.number} onChange={event => setFields({...fields, number:event.target.value})} required />
          <label htmlFor="siret">Siret :</label>
          <input type="text" id='siret' value={fields.siret} onChange={event => setFields({...fields, siret:event.target.value})} required />
          <label htmlFor="siren">Siren :</label>
          <input type="text" id='siren' value={fields.siren} onChange={event => setFields({...fields, siren:event.target.value})} required />
          <button type="submit" className='register-button'>Valider</button>
        </form>
          <hr />
          <button type="submit" onClick={deleteAccount}>Supprimer mon compte</button>
          <hr />
          <button type="submit" onClick={logoutAccount}>Se déconnecter</button>
      </div>
      <Footer />
    </>
  )
}

export default Account;
