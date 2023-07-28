import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAPI } from '../../utils/api';

// Import du scss
import './ClientAdd.scss';

// Import des composants
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function ClientAdd() {
  const [fields, setFields] = useState({});
  const navigate = useNavigate();
  async function Submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    await getAPI()
      .post('http://0.0.0.0:3000/api/client', fields)
      .then(function (res) {
        // récupération des datas
        console.log(res.data);
        alert('Client ajouté');
        navigate('/client');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <div className="form">
        <form className="signInForm" onSubmit={Submit}>
          <h2>Créer un client ...</h2>
          <label htmlFor="firstname">Prénom :</label>
          <input
            type="text"
            id="name"
            onChange={(event) =>
              setFields({ ...fields, firstname: event.target.value })
            }
            required
          />
          <label htmlFor="lastname">Nom :</label>
          <input
            type="text"
            id="Nom"
            onChange={(event) =>
              setFields({ ...fields, lastname: event.target.value })
            }
            required
          />
          <label htmlFor="siret">Siret :</label>
          <input
            type="text"
            id="siret"
            onChange={(event) =>
              setFields({ ...fields, siret: event.target.value })
            }
          />
          <label htmlFor="siren">Siren :</label>
          <input
            type="text"
            id="siren"
            onChange={(event) =>
              setFields({ ...fields, siren: event.target.value })
            }
          />
          <label htmlFor="mail">Mail :</label>
          <input
            type="text"
            id="mail"
            onChange={(event) =>
              setFields({ ...fields, mail: event.target.value })
            }
            required
          />
          <label htmlFor="address">Addresse :</label>
          <input
            type="text"
            id="address"
            onChange={(event) =>
              setFields({ ...fields, address: event.target.value })
            }
            required
          />
          <label htmlFor="zip_code">Code postal :</label>
          <input
            type="text"
            id="zip_code"
            onChange={(event) =>
              setFields({ ...fields, zip_code: event.target.value })
            }
            required
          />
          <label htmlFor="city">Ville :</label>
          <input
            type="text"
            id="city"
            onChange={(event) =>
              setFields({ ...fields, city: event.target.value })
            }
            required
          />
          <label htmlFor="number">Numéro de téléphone :</label>
          <input
            type="text"
            id="number"
            onChange={(event) =>
              setFields({ ...fields, number: event.target.value })
            }
            required
          />
          <button type="submit" className="register-button">
            Ajout du client
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default ClientAdd;
