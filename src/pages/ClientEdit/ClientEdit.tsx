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
      <div className="client-edit">
        <h1 className="user-name">Nom de l'utilisateur</h1>

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
                className="client-edit-form-item-input"
                defaultValue={client.lastname}
                onChange={(event) =>
                  setFields({ ...fields, lastname: event.target.value })
                }
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="name">
                Prénom :
              </label>
              <input
                type="text"
                id="firstname"
                className="client-edit-form-item-input"
                defaultValue={client.firstname}
                onChange={(event) =>
                  setFields({ ...fields, firstname: event.target.value })
                }
                required
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="mail">
                Email :
              </label>
              <input
                type="mail"
                id="mail"
                className="client-edit-form-item-input"
                defaultValue={client.mail}
                onChange={(event) =>
                  setFields({ ...fields, mail: event.target.value })
                }
                required
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="address">
                Adresse :
              </label>
              <input
                type="text"
                id="address"
                className="client-edit-form-item-input"
                defaultValue={client.address}
                onChange={(event) =>
                  setFields({ ...fields, address: event.target.value })
                }
                required
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="zip_code">
                Code postal :
              </label>
              <input
                type="text"
                id="zip_code"
                className="client-edit-form-item-input"
                defaultValue={client.zip_code}
                onChange={(event) =>
                  setFields({ ...fields, zip_code: event.target.value })
                }
                required
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="city">
                Ville :
              </label>
              <input
                type="text"
                id="city"
                className="client-edit-form-item-input"
                defaultValue={client.city}
                onChange={(event) =>
                  setFields({ ...fields, city: event.target.value })
                }
                required
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="number">
                Téléphone :
              </label>
              <input
                type="text"
                id="number"
                className="client-edit-form-item-input"
                defaultValue={client.number}
                onChange={(event) =>
                  setFields({ ...fields, number: event.target.value })
                }
                required
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="siret">
                Siret :
              </label>
              <input
                type="text"
                id="siret"
                className="client-edit-form-item-input"
                defaultValue={client.siret}
                onChange={(event) =>
                  setFields({ ...fields, siret: event.target.value })
                }
              />
            </div>
            <div className="client-edit-form-item">
              <label className="client-edit-form-item-label" htmlFor="siren">
                Siren :
              </label>
              <input
                type="text"
                id="siren"
                className="client-edit-form-item-input"
                defaultValue={client.siren}
                onChange={(event) =>
                  setFields({ ...fields, siren: event.target.value })
                }
              />
            </div>
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
