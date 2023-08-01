/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAPI } from '../../utils/api';

// Import des composants
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Import du scss
import './ClientAdd.scss';

function ClientAdd() {
  const [user, setUser] = useState({});
  const [fields, setFields] = useState({});
  const navigate = useNavigate();

  async function Submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    await getAPI()
      .post('http://0.0.0.0:3000/api/client', fields)
      .then(function (res) {
        // récupération des datas
        console.log(res.data);
        alert('Client ajouté');
        navigate('/client');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(function () {
    getAPI()
      .get('/user/me', user)
      .then(function (res) {
        setUser(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="form">
      <h1 className="user-name">{user.name}</h1>

        <form className="client-edit-form" onSubmit={Submit}>
          <h2>Ajouter un Client</h2>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="firstname">
              Prénom :
            </label>
            <input
              type="text"
              id="firstname"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, firstname: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="lastname">
              Nom :
            </label>
            <input
              type="text"
              id="lastname"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, lastname: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="siret">
              Siret :
            </label>
            <input
              type="text"
              id="siret"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, siret: event.target.value })
              }
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="siren">
              Siren :
            </label>
            <input
              type="text"
              id="siren"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, siren: event.target.value })
              }
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="mail">
              Adresse mail :
            </label>
            <input
              type="text"
              id="mail"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, mail: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="address">
              Adresse postale :
            </label>
            <input
              type="text"
              id="address"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, address: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="zip_code">
              Code postale :
            </label>
            <input
              type="text"
              id="zip_code"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, zip_code: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="city">
              Ville :
            </label>
            <input
              type="text"
              id="city"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, city: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="number">
              Numéro de téléphone :
            </label>
            <input
              type="text"
              id="number"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, number: event.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="register-button">
            Valider
          </button>
          <NavLink className="action-item-button" to="/client">
            <button type="button" className="action-item-button">
              Voir les clients
            </button>
          </NavLink>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default ClientAdd;
