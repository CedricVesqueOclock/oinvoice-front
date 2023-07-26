import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Invoices.scss';

function Invoices() {
  return (
    <>
      <Header />
      <div className="invoices">
        <h1 className="invoices-name">Petruchka</h1>
        <h2 className="invoices-title">Liste des factures</h2>
        <button className="invoices-button" type="button">
          Ajouter un client
        </button>
        <div className="invoices-array">
          <table>
            <thead className="invoices-array-header">
              <tr>
                <th>type de produit</th>
                <th>Date de commande</th>
                <th>Date de livraison</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="invoices-array-body">
              <tr>
                <td>001</td>
                <td>Durand</td>
                <td>Jean</td>
                <td>jeandurand@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Invoices;
