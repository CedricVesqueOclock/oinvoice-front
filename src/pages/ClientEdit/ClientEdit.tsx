/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAPI } from '../../utils/api';

import './ClientEdit.scss';

interface ClientData {
  siren: string;
  siret: string;
  number: string;
  city: string;
  zip_code: string;
  address: string;
  id: number;
  lastname: string;
  firstname: string;
  mail: string;
}

function ClientEdit() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [client, setClient] = useState<ClientData | undefined>(undefined);
  const { id } = useParams();

  function Submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    getAPI()
      .patch(`/client/${id}`, fields)
      .then(function (res) {
        // récupération des datas
        console.log(res.data);
        alert('Client modifié');
        navigate('/client');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(
    function () {
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
        setClient((await getAPI().get(`/client/${id}`)).data);
      };

      handle();
    },
    [id]
  );

  return (
    <>
      <Header />
      <div className="client">
        <h1 className="user-name">Petruchka</h1>

        {client && (
          <form className="client-edit-form" onSubmit={Submit}>
            <h2 className="client-title">
              {client.lastname} {client.firstname}
            </h2>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="name">
                Nom :
              </label>
              <input
                type="text"
                id="lastname"
                defaultValue={client.lastname}
                onChange={(event) =>
                  setFields({ ...fields, lastname: event.target.value })
                }
              />
            </div>
            <label htmlFor="name">Prénom :</label>
            <input
              type="text"
              id="firstname"
              defaultValue={client.firstname}
              onChange={(event) =>
                setFields({ ...fields, firstname: event.target.value })
              }
              required
            />
            <label htmlFor="mail">Email :</label>
            <input
              type="mail"
              id="mail"
              defaultValue={client.mail}
              onChange={(event) =>
                setFields({ ...fields, mail: event.target.value })
              }
              required
            />
            <label htmlFor="address">Adresse :</label>
            <input
              type="text"
              id="address"
              defaultValue={client.address}
              onChange={(event) =>
                setFields({ ...fields, address: event.target.value })
              }
              required
            />
            <label htmlFor="zip_code">Code postal :</label>
            <input
              type="text"
              id="zip_code"
              defaultValue={client.zip_code}
              onChange={(event) =>
                setFields({ ...fields, zip_code: event.target.value })
              }
              required
            />
            <label htmlFor="city">Ville :</label>
            <input
              type="text"
              id="city"
              defaultValue={client.city}
              onChange={(event) =>
                setFields({ ...fields, city: event.target.value })
              }
              required
            />
            <label htmlFor="number">Téléphone :</label>
            <input
              type="text"
              id="number"
              defaultValue={client.number}
              onChange={(event) =>
                setFields({ ...fields, number: event.target.value })
              }
              required
            />
            <label htmlFor="siret">Siret :</label>
            <input
              type="text"
              id="siret"
              defaultValue={client.siret}
              onChange={(event) =>
                setFields({ ...fields, siret: event.target.value })
              }
            />
            <label htmlFor="siren">Siren :</label>
            <input
              type="text"
              id="siren"
              defaultValue={client.siren}
              onChange={(event) =>
                setFields({ ...fields, siren: event.target.value })
              }
            />
            {/* <input><a href={'/client/edit/' + client.id}>Modifier</a></input>
                <input><button onClick={e => remove(client.id)}>Supprimer</button></input> */}
            <button type="submit" className="register-button">
              Valider
            </button>
            <NavLink className="action-item-button" to="/client">
              <button type="button" className="action-item-button">
                Voir les devis
              </button>
            </NavLink>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}
export default ClientEdit;
