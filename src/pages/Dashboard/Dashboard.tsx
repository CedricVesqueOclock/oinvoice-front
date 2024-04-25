import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Dashboard.scss';

function Dashboard() {
  const [user, setUser] = useState({});

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
      <section className="image" />
      <section className="actions">
        <h1 className="name">{user.name}</h1>
        <div className="action-items">
          <div className="action-items-title">
            <h2>Devis</h2>
          </div>
          <div className="action-items-button">
            <NavLink to="/quotation">
              <button type="button" className="action-item-button">
                Voir les devis
              </button>
            </NavLink>
            <NavLink to="/quotation/add">
              <button type="button" className="action-item-button">
                Créer un devis
              </button>
            </NavLink>
          </div>
        </div>
        <div className="action-items">
          <div className="action-items-title">
            <h2>Factures</h2>
          </div>
          <div className="action-items-button">
            <NavLink to="/invoice">
              <button type="button" className="action-item-button">
                Voir les factures
              </button>
            </NavLink>
            <NavLink to="/invoice/add">
              <button type="button" className="action-item-button">
                Créer une facture
              </button>
            </NavLink>
          </div>
        </div>
        <div className="action-items">
          <div className="action-items-title">
            <h2>Clients</h2>
          </div>
          <div className="action-items-button">
            <NavLink to="/client">
              <button type="button" className="action-item-button">
                Voir les clients
              </button>
            </NavLink>
            <NavLink className="action-items-button" to="/client/add">
              <button type="button" className="action-item-button">
                Créer un client
              </button>
            </NavLink>
          </div>
        </div>
        <div className="action-items">
          <div className="action-items-title">
            <h2>Produits</h2>
          </div>
          <div className="action-items-button">
            <NavLink className="action-items-button" to="/product">
              <button type="button" className="action-item-button">
                Voir les produits
              </button>
            </NavLink>
            <NavLink className="action-items-button" to="/product/add">
              <button type="button" className="action-item-button">
                Créer un produit
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
