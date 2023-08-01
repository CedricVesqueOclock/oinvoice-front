/* eslint-disable no-console */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Product.scss';

interface ProductData {
  id: number;
  name: string;
  description: string;
  category: string;
  price_ht: number;
  rate: number;
}

function Product() {
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);

  useEffect(function () {
    const handle = async function () {
      setProduct((await getAPI().get('/product')).data);
    };

    handle();
  }, []);

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

  function remove(id: number) {
    getAPI()
      .delete(`/product/${id}`)
      .then(function () {
        setProduct(
          product.filter(function (product: ProductData) {
            product.id != id;
          })
        );
        alert('produit supprimé');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <div className="product">
        <h1 className="product-name">{user.name}</h1>
        <h2 className="product-title">Liste des produits</h2>
        <div className="product-array">
          <NavLink to="/product/add" className="add-button" type="button">
            Ajouter un produit
          </NavLink>
          <table>
            <thead className="product-array-header">
              <tr>
                <th>Id produit</th>
                <th>Nom</th>
                <th>Catégorie</th>
                <th>Prix HT</th>
                <th>Taux de TVA</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="client-array-body">
              {product.map(function (product: ProductData) {
                return (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price_ht}</td>
                    <td>{product.rate} %</td>
                    <td>
                      <a
                        className="delete-button"
                        href={`/product/${product.id}`}
                      >
                        <EditIcon />
                      </a>
                      <button
                        type="button"
                        className="delete-button"
                        onClick={(e) => remove(product.id)}
                      >
                        <DeleteForeverIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
