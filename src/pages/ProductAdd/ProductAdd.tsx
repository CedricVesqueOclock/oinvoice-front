/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './ProductAdd.scss';

function ProductAdd() {
  const [user, setUser] = useState({});
  const [fields, setFields] = useState({});
  const navigate = useNavigate();

  async function Submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    await getAPI()
      .post('http://0.0.0.0:3000/api/product', fields)
      .then(function (res) {
        // récupération des datas
        console.log(res.data);
        alert('Produit ajouté');
        navigate('/product');
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
      <div className="product">
        <h1 className="user-name">{user.name}</h1>

        {/* {product && ( */}
        <form className="client-edit-form" onSubmit={Submit}>
          <h2>Ajouter un produit</h2>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="name">
              Nom du produit :
            </label>
            <input
              type="text"
              id="name"
              className="client-edit-form-item-input"
              // defaultValue={product.name}
              onChange={(event) =>
                setFields({ ...fields, name: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label
              className="client-edit-form-item-label"
              htmlFor="description"
            >
              Description du produit :
            </label>
            <input
              type="text"
              id="description"
              className="client-edit-form-item-input"
              // defaultValue={product.description}
              onChange={(event) =>
                setFields({ ...fields, description: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="category">
              Categorie du produit :
            </label>
            <input
              type="text"
              id="category"
              className="client-edit-form-item-input"
              // defaultValue={product.category}
              onChange={(event) =>
                setFields({ ...fields, category: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="price_ht">
              Prix HT :
            </label>
            <input
              type="text"
              id="price_ht"
              className="client-edit-form-item-input"
              // defaultValue={product.price_ht}
              onChange={(event) =>
                setFields({ ...fields, price_ht: event.target.value })
              }
              required
            />
          </div>
          <div className="client-edit-form-item">
            <label className="client-edit-form-item-label" htmlFor="rate">
              Taux de TVA:
            </label>
            <input
              type="text"
              id="rate"
              className="client-edit-form-item-input"
              // defaultValue={product.rate}
              onChange={(event) =>
                setFields({ ...fields, rate: event.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="register-button">
            Valider
          </button>
          <NavLink className="action-item-button" to="/product">
            <button type="button" className="action-item-button">
              Voir les produits
            </button>
          </NavLink>
        </form>
        {/* )} */}
      </div>
      <Footer />
    </>
  );
}

export default ProductAdd;
