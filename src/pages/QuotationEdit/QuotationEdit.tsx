import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAPI, logout } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

import './ClientEdit.scss';

interface ClientData {
  id: number;
  name: string;
  firstname: string;
  mail: string;
}

function ClientEdit() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [client, setClient] = useState([]);

  useEffect(function () {
    // getAPI().get("http://0.0.0.0:3000/api/client", fields)
    // .then(function(res){
    //   //récupération des datas
    //   setFields(res.data);
    //   console.log(res.data);
    // })
    // .catch(function(error){
    //   console.log(error);
    // })

    const handle = async function () {
      setClient((await getAPI().get('/client')).data);
      console.log(client);
    };

    handle();
  }, []);

  return (
    <>
      <Header />
      <div className="client">
        <h1 className="user-name">Petruchka</h1>
        <h2 className="client-title">Liste des client</h2>
        <button className="client-button" type="button">
          Ajouter un client
        </button>
        
        
        {/*-- votre formulaire --*/}
      </div>
      <Footer />
    </>
  );
}

export default ClientEdit;
