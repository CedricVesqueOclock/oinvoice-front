import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface DocumentLineData {
  quantity: number;
  price: number;
  product_id: number;
  client_id: number;
  document_id: number;
}

function DocumentLine() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);

  useEffect(function () {
    const handle = async function () {
      setProduct((await getAPI().get('/document/:id')).data);
    };

    handle();
  }, []);

  function remove(id: number) {
    getAPI()
      .delete(`/product/${id}`)
      .then(function () {
        setProduct(
          product.filter(function (product: DocumentLineData) {
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
      <div className="products">
        <h1 className="products-name">Nom de l'utilsateur</h1>
        <h2 className="products-title">Facture  1234</h2>
        <div className="products-array">
          <NavLink to="/product/add">
            <button className="products-button" type="button">
              Ajouter un produit
            </button>
          </NavLink>
          <table>
            <thead className="produits-array-header">
              <tr>
                <th>Quantité</th>
                <th>Id Produit</th>
                <th>Prix</th>
                <th>Id client</th>
                <th>Document ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="client-array-body">
              {product.map(function (line: DocumentLineData) {
                return (
                  <tr>
                    <td>{line.quantity}</td>
                    <td>{line.product_id}</td>
                    <td>{line.category}</td>
                    <td>{line.client_id}</td>
                    <td>{line.document_id} %</td>
                    <td>
                      <a
                        className="delete-button"
                        href={`/product/${line.id}`}
                      >
                        <EditIcon />
                      </a>
                      <button
                        type="button"
                        className="delete-button"
                        onClick={(e) => remove(line.id)}
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

export default QuotationEdit;
