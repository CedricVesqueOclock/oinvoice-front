import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './ProductAdd.scss';

// interface ProductData {
//   name: number;
//   description: string;
//   category: string;
//   price_ht: string;
//   rate: string;
// }

function ProductAdd() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  // const [product, setProduct] = useState<ProductData | undefined>(undefined);
  // const { id } = useParams();

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

  // useEffect(
  //   function () {
  //     const handle = async function () {
  //       setProduct((await getAPI().get(`/product/${id}`)).data);
  //     };

  //     handle();
  //   },
  //   [id]
  // );

  return (
    <>
      <Header />
      <div className="product">
        <h1 className="user-name">Petruchka</h1>

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
              Taux :
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
