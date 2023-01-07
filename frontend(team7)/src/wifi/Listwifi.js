import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [wifis, setWifis] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadWifis();
  }, []);

  const loadWifis = async () => {
    const result = await axios.get("http://localhost:8182/wifi");
    setWifis(result.data);
  };

  const deleteRecharge = async (id) => {
    await axios.delete(`http://localhost:8182/wifi/${id}`);
    loadWifis();
  };

  return (
    <main id="main" class="main"> 
    <div className="container">
      <div className="py-4">
      <Link className="btn btn-outline-warning" to="/addwifi">
            payer une facture wifi
          </Link>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Montant</th>
              <th scope="col">Type</th>
              <th scope="col">Debit</th>

              <th scope="col">Operateur</th>
              <th scope="col">Etat</th>
              <th scope="col">Wifi code</th>

              <th scope="col">Client CIN</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {wifis.map((wifi, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{wifi.montant}</td>
                <td>{wifi.type}</td>
                <td>{wifi.debit}</td>
                <td>{wifi.operateur}</td>
                <td>{wifi.etat}</td>
                <td>{wifi.code_wifi}</td>
                <td>{wifi.client_cin}</td>

                <td>
            
    
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteRecharge(wifi.id)}
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
