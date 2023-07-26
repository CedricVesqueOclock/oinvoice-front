import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Products.scss';

function Products() {
  return (
    <>
      <Header />
      <div className="products">
        <h1 className="products-name">Petruchka</h1>
        <h2 className="products-title">Liste des produits</h2>
        <div className="products-array">
          <button className="products-button" type="button">
            Ajouter un produit
          </button>
          <table>
            <thead className="produits-array-header">
              <tr>
                <th>Id produit</th>
                <th>Nom</th>
                <th>Catégorie</th>
                <th>Prix HT</th>
                <th>Taux de TVA</th>
              </tr>
            </thead>
            <tbody className="produits-array-body">
              <tr>
                <td>001</td>
                <td>Voiture</td>
                <td>Clio 3 Bleu</td>
                <td>1000€</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
