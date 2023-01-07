import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [abonnements, setAbonnements] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadAbonnements();
  }, []);

  const loadAbonnements = async () => {
    const result = await axios.get("http://localhost:8182/abonnement");
    setAbonnements(result.data);
  };

  const deleteRecharge = async (id) => {
    await axios.delete(`http://localhost:8182/abonnement/${id}`);
    loadAbonnements();
  };

  return (
    <main id="main" class="main">

    <div className="container">
      <div className="py-4">
      <Link className="btn btn-outline-warning" to="/addabonnement">
            payer une facture abonnement
          </Link>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Montant</th>
              <th scope="col">offre</th>

              <th scope="col">Operateur</th>
              <th scope="col">Etat</th>

              <th scope="col">Client phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {abonnements.map((abonnement, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{abonnement.montant}</td>
                <td>{abonnement.offre}</td>
                <td>{abonnement.operateur}</td>
                <td>{abonnement.etat}</td>
                <td>{abonnement.client_phone}</td>

                <td>
            
    
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteRecharge(abonnement.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </main>
  );
}
