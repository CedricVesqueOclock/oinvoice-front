import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { getAPI } from '../../utils/api';

import './Invoice.scss';

interface InvoiceData {
  id: number;
  order_date: string;
  delivery_date: string;
}

function Invoice() {
  // const [fields, setFields] = useState({});
  // const navigate = useNavigate();
  // const [user, setUser] = useState({});
  const [invoice, setInvoice] = useState([]);

  useEffect(function () {
    const handle = async function () {
      setInvoice((await getAPI().get('/document')).data);
    };

    handle();
  }, []);

  function remove(id: number) {
    getAPI()
      .delete(`/invoice/${id}`)
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
      <div className="invoices">
        <h1 className="invoices-name">Petruchka</h1>
        <h2 className="invoices-title">Liste des factures</h2>
        <button className="invoices-button" type="button">
          Ajouter un client
        </button>
        <div className="invoices-array">
          <table>
            <thead className="invoices-array-header">
              <tr>
                <th>Numéro de facture</th>
                <th>Date de commande</th>
                <th>Date de livraison</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="invoices-array-body">
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
