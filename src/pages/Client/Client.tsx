/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { getAPI } from '../../utils/api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Client.scss';

interface ClientData {
  id: number;
  lastname: string;
  firstname: string;
  mail: string;
}

function Client() {
  // const [fields, setFields] = useState({});
  // const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [client, setClient] = useState([]);

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

  useEffect(function () {
    const handle = async function () {
      setClient((await getAPI().get('/client')).data);
    };

    handle();
  }, []);

  function remove(id: number) {
    getAPI()
      .delete(`/client/${id}`)
      .then(function () {
        setClient(
          client.filter(function (client: ClientData) {
            client.id != id;
          })
        );
        alert('client supprimé');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <div className="client">
        <div className="client-page-title">
          <h1 className="user-name">{user.name}</h1>
          <h2 className="client-title">Liste des clients</h2>
        </div>
        <div className="client-array">
          <NavLink className="client-button" type="button" to="/client/add">
            Ajouter un client
          </NavLink>
          <table>
            <thead className="client-array-header">
              <tr>
                <th>Id client</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="client-array-body">
              {client.map(function (client: ClientData) {
                return (
                  <tr>
                    <td>{client.id}</td>
                    <td>{client.lastname}</td>
                    <td>{client.firstname}</td>
                    <td>{client.mail}</td>
                    <td>
                      <a
                        className="delete-button"
                        href={`/client/${client.id}`}
                      >
                        <EditIcon />
                      </a>
                      <button
                        type="button"
                        className="delete-button"
                        onClick={(e) => remove(client.id)}
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

export default Client;
