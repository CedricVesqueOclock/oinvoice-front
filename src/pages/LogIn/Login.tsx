/* eslint-disable func-names */
import React, { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { getAPI } from '../../utils/api';

// Import du scss
import './Login.scss';

// Import des composants
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function login() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  function Submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    getAPI()
      .post('/', fields)
      .then(function (res) {
        // récupération des datas
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('expireAt', res.data.expireAt);
        navigate('/dashboard');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Header />
      <div className="login">
        <form onSubmit={Submit} action="" className="loginForm">
          <h2>Connectez vous ...</h2>
          <label htmlFor="mail">Votre E-mail :</label>
          <input
            type="mail"
            onChange={(event) =>
              setFields({ ...fields, mail: event.target.value })
            }
            required
          />
          <label htmlFor="mail">Votre mot de passe :</label>
          <input
            type="password"
            name=""
            id=""
            onChange={(event) =>
              setFields({ ...fields, password: event.target.value })
            }
            required
          />
          <button className="login-button" type="submit">
            Se connecter
          </button>
          <p>Pas encore de compte?</p>
          <NavLink
            className="
            menu-link"
            to="/register"
          >
            <p>S'inscrire</p>
          </NavLink>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default login;
