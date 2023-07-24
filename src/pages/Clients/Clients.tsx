import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Clients.scss';

function Clients() {
  return (
    <>
      <Header />
      <div className="clients">
        <h1 className="clients-name">Petruchka</h1>
        <h2 className="clients-title">Liste des clients</h2>
        <div className="clients-array">
          <button className="clients-button" type="button">
            Ajouter un client
          </button>
          <table>
            <thead className="clients-array-header">
              <tr>
                <th>Id client</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="clients-array-body">
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

export default Clients;
