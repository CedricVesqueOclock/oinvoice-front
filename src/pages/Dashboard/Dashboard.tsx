import React from 'react';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import './Dashboard.scss'

function Dashboard() {
  return (
    <>
      <Header />
      <h1>Petruchka</h1>
      <section className='statistics'>
      <img src="" alt="graph" />
        <div className='statistics-items'>
          <p>Devis en attente</p>
          <p>Facture en attente</p>
          <p>Factures payées</p>
        </div>
        <div className='statistics-values'>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </div>
      </section>
      <section className='statement'>
      <img src="" alt="graph" />
        <div className='statement-items'>
          <p>Chiffre d'affaire</p>
          <p>Bénéfice</p>
        </div>
        <div className='statement-values'>
          <p>0</p>
          <p>0</p>
        </div>
      </section>
      <section className='actions'>
        <div className='action-items'>
          <div className='action-items-title'>
            <h2>Devis</h2>
          </div>
          <div className='action-items-button'>
            <button>Voir les devis</button>
            <button>Créer</button>
          </div>
        </div>
        <div className='action-items'>
          <div className='action-items-title'>
            <h2>Factures</h2>
          </div>
          <div className='action-items-button'>
            <button>Voir les factures</button>
            <button>Créer</button>
          </div>
        </div>
        <div className='action-items'>
          <div className='action-items-title'>
            <h2>Clients</h2>
          </div>
          <div className='action-items-button'>
            <button>Voir les clients</button>
            <button>Créer</button>
          </div>
        </div>
        <div className='action-items'>
          <div className='action-items-title'>
            <h2>Produits</h2>
          </div>
          <div className='action-items-button'>
            <button>Voir les produits</button>
            <button>Créer</button>
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
  )
}

export default Dashboard;