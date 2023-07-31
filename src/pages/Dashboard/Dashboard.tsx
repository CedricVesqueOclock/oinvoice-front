import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Dashboard.scss';

function Dashboard() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(function () {
    getAPI()
      .get('/user/me', user)
      .then(function (res) {
        // récupération des datas
        setUser(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <h1 className='name'>{user.name}</h1>
      <section className="statistics">
        <img src="" alt="graph" />
        <div className="statistics-items">
          <p>Devis en attente</p>
          <p>Facture en attente</p>
          <p>Factures payées</p>
        </div>
        <div className="statistics-values">
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </div>
      </section>
      <section className="statement">
        <img src="" alt="graph" />
        <div className="statement-items">
          <p>Chiffre d'affaire</p>
          <p>Bénéfice</p>
        </div>
        <div className="statement-values">
          <p>0</p>
          <p>0</p>
        </div>
      </section>
      <section className="actions">
        <div className="action-items">
          <div className="action-items-title">
            <h2>Devis</h2>
          </div>
          <div className="action-items-button">
            <NavLink className="action-item-button" to="/client">
              <button type="button" className="action-item-button">
                Voir les devis
              </button>
            </NavLink>
            <NavLink className="action-item-button" to="/client">
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
        {/* <div className='action-items'>
          <div className='action-items-title'>
            <h2>Factures</h2>
          </div>
          <div className='action-items-button'></div>
            <button>Voir les factures</button>
            <button>Créer</button>
          </div>
        </div>
        <div className='action-items'>
          <div className='action-items-title'>
            <h2>Clients</h2>
          </div>
          <div className='action-items-button'></div>
            <button>Voir les clients</button>
            <button>Créer</button>
          </div>
        <div className='action-items'>
          <div className='action-items-title'>
            <h2>Produits</h2>
          </div>
          <div className='action-items-button'></div>
            <button>Voir les produits</button>
            <button>Créer</button>
          </div> */}
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
