import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAPI, logout } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

import './InvoiceEdit.scss';

interface InvoiceData {
  id: number;
  name: string;
  firstname: string;
  mail: string;
}

function InvoiceEdit() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [Invoice, setInvoice] = useState([]);

  useEffect(function () {
    // getAPI().get("http://0.0.0.0:3000/api/invoice", fields)
    // .then(function(res){
    //   //récupération des datas
    //   setFields(res.data);
    //   console.log(res.data);
    // })
    // .catch(function(error){
    //   console.log(error);
    // })

    const handle = async function () {
      setInvoice((await getAPI().get('/invoice')).data);
      console.log(invoice);
    };

    handle();
  }, []);

  return (
    <>
      <Header />
      <div className="invoice">
        <h1 className="user-name">Nom de l'utilisateur</h1>
        <h2 className="invoice-title">Liste des factures</h2>
        <button className="invoice-button" type="button">
          Ajouter une facture
        </button>
        
        
        {/*-- votre formulaire --*/}
      </div>
      <Footer />
    </>
  );
}

export default InvoiceEdit;
