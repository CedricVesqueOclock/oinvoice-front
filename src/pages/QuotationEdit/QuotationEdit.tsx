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
  name: string;
  category: string;
  description: string;
  price_ht: number;
  id: number;

}

interface UserData {
  name: string;
  id:number;
  // Ajoutez d'autres propriétés liées à l'utilisateur ici si disponible
}

function QuotationEdit() {
  const [user, setUser] = useState<UserData>({ name: '' });
  const [documentLine, setDocumentLine] = useState<DocumentLineData | null>(null);
  const { id } = useParams();

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
          console.log(response.data)
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
                  <th>Nom du produit</th>
                  <th>Marque</th>
                  <th>Description</th>
                  <th>Prix unitaire</th>
                  <th>Quantité</th>
                  <th>Prix total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               
                {documentLine.map(function (documentLine: DocumentLineData) {
                  return (
                  <tr key={documentLine.id}>
                  <td>{documentLine.product_id}</td>
                  <td>{documentLine.name}</td>
                  <td>{documentLine.category}</td>
                  <td>{documentLine.description}</td>
                  <td>{documentLine.price_ht}</td>
                  <td>{documentLine.quantity}</td>
                  <td>{documentLine.price_ht * documentLine.quantity}</td>
                </tr>
                  );
                })}
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
