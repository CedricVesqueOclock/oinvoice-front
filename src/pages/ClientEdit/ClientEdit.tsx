import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAPI, logout } from '../../utils/api';

import './ClientEdit.scss';

interface ClientData {
  id: number;
  lastname: string;
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
        {client.map(function (client: ClientData) {
          return (
            <>
              <form>
                <h2 className="client-title">{client.lastname}</h2>
                <label htmlFor="name">Nom :</label>
                <input defaultValue={client.firstname} />
                <label htmlFor="name">Prénom :</label>
                <input defaultValue={client.lastname} />
                <label htmlFor="mail">Email :</label>
                <input defaultValue={client.mail} />
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
                  required
                />
                <label htmlFor="siren">Siren :</label>
                <input
                  type="text"
                  id="siren"
                  defaultValue={client.siren}
                  onChange={(event) =>
                    setFields({ ...fields, siren: event.target.value })
                  }
                  required
                />
                {/* <input><a href={'/client/edit/' + client.id}>Modifier</a></input>
                <input><button onClick={e => remove(client.id)}>Supprimer</button></input> */}
              </form>
              <hr />
              <div className="action">
                <button type="submit">Supprimer mon compte</button>
                <button type="submit">Se déconnecter</button>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default ClientEdit;
