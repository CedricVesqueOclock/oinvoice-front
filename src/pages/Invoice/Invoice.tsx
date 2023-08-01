/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Invoice.scss';
import { NavLink } from 'react-router-dom';

interface InvoiceData {
  id: number;
  order_date: Date;
  delivery_date: Date;
}

function Invoice() {
  // const [fields, setFields] = useState({});
  // const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [invoice, setInvoice] = useState([]);

  useEffect(function () {
    const handle = async function () {
      setInvoice((await getAPI().get('/document/invoice')).data);
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
      .delete(`/document/invoice/${id}`)
      .then(function () {
        setInvoice(
          invoice.filter(function (client: InvoiceData) {
            invoice.id != id;
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
      <div className="invoice">
        <h1 className="user-name">{user.name}</h1>
        <h2 className="invoice-page-title">Liste des factures</h2>
        <div className="invoice-array">
          <NavLink className="add-button" type="button">
            Ajouter un client
          </NavLink>
          <table>
            <thead className="invoice-array-header">
              <tr>
                <th>Numéro de facture</th>
                <th>Date de commande</th>
                <th>Date de livraison</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="invoice-array-body">
              {invoice.map(function (invoice: InvoiceData) {
                return (
                  <tr>
                    <td>{invoice.id}</td>
                    <td>{invoice.order_date}</td>
                    <td>{invoice.delivery_date}</td>
                    <td>
                      <a
                        className="delete-button"
                        href={`/invoice/${invoice.id}`}
                      >
                        <EditIcon />
                      </a>
                      <button
                        type="button"
                        className="delete-button"
                        onClick={(e) => remove(invoice.id)}
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

export default Invoice;
