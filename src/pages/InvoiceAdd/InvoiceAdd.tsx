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
import './InvoiceAdd.scss';

function QuotationAdd() {
  const [user, setUser] = useState({});
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  async function Submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    await getAPI()
      .post('http://0.0.0.0:3000/document', fields)
      .then(function (res) {
        // récupération des datas
        console.log(res.data);
        alert('Facture ajouté');
        navigate('/invoice');
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
          <h2>Ajouter une Facture</h2>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="firstname">
              Type :
            </label>
            <input
              type="text"
              id="type"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, type: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="order_date">
              Date de la facture :
            </label>
            <input
              type="date"
              id="order_date"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, order_date: event.target.value })
              }
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="order_date">
              Date de livraison :
            </label>
            <input
              type="date"
              id="delivry_date"
              className="client-edit-form-item-input"
              onChange={(event) =>
                setFields({ ...fields, delivry_date: event.target.value })
              }
            />
          </div>
          <button type="submit" className="register-button">
            Valider
          </button>
          <NavLink className="action-item-button" to="/invoice">
            <button type="button" className="action-item-button">
              Voir les factures
            </button>
          </NavLink>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default QuotationAdd;
