import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAPI, logout } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

import './ProductEdit.scss';

interface ProductData {
  name: number;
  description:string;
  category: string;
  price_ht: string;
  rate: string;
}

function ProductEdit() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);

  useEffect(function () {
    // getAPI().get("http://0.0.0.0:3000/api/produit", fields)
    // .then(function(res){
    //   //récupération des datas
    //   setFields(res.data);
    //   console.log(res.data);
    // })
    // .catch(function(error){
    //   console.log(error);
    // })

    const handle = async function () {
      setProduct((await getAPI().get('/product')).data);
      console.log(product);
    };

    handle();
  }, []);

  return (
    <>
      <Header />
      <div className="product">
        <h1 className="user-name">Petruchka</h1>
        {/* <h2 className="product-title">{product.lastname}</h2> */}
        {/* <button className="product-button" type="button">
          Ajouter un product
        </button> */}
        {product.map(function (product:ProductData) {
          return (
            <>
              <h2 className="product-title">{product.name}</h2>
              <form>
                <label htmlFor="name">Nom du produit :</label>
                <input type="text" id='name' value={product.name} onChange={event => setFields({...fields, address:event.target.value})} required />
                <label htmlFor="description">Description :</label>
                <input type="text" id='description' value={product.description} onChange={event => setFields({...fields, zip_code:event.target.value})} required />
                <label htmlFor="category">categorie :</label>
                <input type="text" id='category'value={product.category} onChange={event => setFields({...fields, city:event.target.value})} required />
                <label htmlFor="price_ht">Prix HT :</label>
                <input type="text" id='price_ht'value={product.price_ht} onChange={event => setFields({...fields, number:event.target.value})} required />
                <label htmlFor="rate">Taux :</label>
                <input type="text" id='rate' value={product.rate} onChange={event => setFields({...fields, siret:event.target.value})} required />
            
                  {/* <input><a href={'/product/edit/' + product.id}>Modifier</a></input>
                  <input><button onClick={e => remove(product.id)}>Supprimer</button></input> */}
              </form>
              <hr />
              {/* <div className="action">
                <button type="submit" onClick={deleteAccount}>Supprimer mon compte</button>
                <button type="submit" onClick={logoutAccount}>Se déconnecter</button>
              </div> */}
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default ProductEdit;
