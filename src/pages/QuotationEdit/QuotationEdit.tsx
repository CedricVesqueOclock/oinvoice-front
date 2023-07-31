/* eslint-disable no-console */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAPI } from '../../utils/api';

import './QuotationEdit.scss';

interface DocumentLineData {
  quantity: number;
  price: number;
  document_id: number;
  client_id: number;
  product_id: number;
}

interface UserData {
  name: string;
  // Ajoutez d'autres propriétés liées à l'utilisateur ici si disponible
}

function QuotationEdit() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();

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

  useEffect(
    function () {
      const handle = async function () {
        try {
          const response = await getAPI().get(`/document/${id}`);
          setDocumentLine(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      handle();
    },
    [id]
  );

  return (
    <>
      <Header />
      <div className="product">
        <h1 className="user-name">{user.name}</h1>

        {documentLine !== null && (
          <div className="document-info">
            <h2>Informations du devis {id}</h2>
            <table className="document-table">
              <thead>
                <tr>
                  <th>ID du produit</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{documentLine.product_id}</td>
                  <td>{documentLine.quantity}</td>
                  <td>{documentLine.price}</td>
                </tr>
              </tbody>
            </table>
            <button className="back-button" onClick={() => navigate('/quotation')}>
              Retour à la liste des devis
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default QuotationEdit;
