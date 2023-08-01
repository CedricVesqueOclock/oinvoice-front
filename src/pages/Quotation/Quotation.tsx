/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { getAPI } from '../../utils/api';

import './Quotation.scss';

interface QuotationData {
  id: number;
  order_date: Date;
  delivery_date: Date;
}

function Quotation() {
  const [user, setUser] = useState({});
  const [quotation, setQuotation] = useState([]);

  useEffect(function () {
    const handle = async function () {
      setQuotation((await getAPI().get('/document/quotation')).data);
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
      .delete(`/document/quotation/${id}`)
      .then(function () {
        setQuotation(
          quotation.filter(function (client: QuotationData) {
            quotation.id != id;
          })
        );
        alert('Facture supprimée');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <div className="quotation">
        <h1 className="quotation-name">{user.name}</h1>
        <h2 className="quotation-title">Liste des devis</h2>
        <div className="quotation-array">
          <NavLink className="add-button" type="button" to="/quotation/add">
            Ajouter un devis
          </NavLink>
          <table>
            <thead className="quotation-array-header">
              <tr>
                <th>Numéro de devis</th>
                <th>Date de commande</th>
                <th>Date de livraison</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="quotation-array-body">
              {quotation.map(function (quotation: QuotationData) {
                return (
                  <tr>
                    <td>{quotation.id}</td>
                    <td>{quotation.order_date}</td>
                    <td>{quotation.delivery_date}</td>
                    <td>
                      <a
                        className="delete-button"
                        href={`/quotation/${quotation.id}`}
                      >
                        <EditIcon />
                      </a>
                      <button
                        type="button"
                        className="delete-button"
                        onClick={(e) => remove(quotation.id)}
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

export default Quotation;
