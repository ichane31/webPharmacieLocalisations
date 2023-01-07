import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import logoinwi from '../image/inwi.jpg'
import logoorange from '../image/orange1.jpg'
import logotisalat from '../image/tisalat11.jpg'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { confirmAlert } from 'react-confirm-alert'; 
export default function Home() {
  const [pharmacies, setPharmacies] = useState([]);
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  const { id } = useParams();

  useEffect(() => {
    loadPharmacies();
  }, []);
  const loadPharmacies = async () => {
    const result = await axios.get("http://localhost:8080/pharmacies/all");
    setPharmacies(result.data);
  };

  const deletePharmacie = async (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to  delete this item.',
    });
    await axios.delete(`http://localhost:8080/pharmacies//delete/${id}`);
    loadPharmacies();   
  };
  return ( 
    <main id="main" class="main">
          <div class="pagetitle">
      <h1>Pharmacies  </h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/homenajia">Home</a></li>
          <li class="breadcrumb-item active">Pharmacies </li>
        </ol>
      </nav>
    </div>
    <section class="section dashboard">
    <div className="container">
      <div className="">   
          <div class="col-12">
          <Link className="btn btn-outline-warning" to="/ajouterpharmacie">
      ajouter une pharmacie 
      </Link>
              <div class="card recent-sales overflow-auto">
          <div class="card-body">
                  <h5 class="card-title"> <span></span></h5>
        <table className="table border shadow " id="example">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Adresse</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Nom</th>
              <th scope="col"> Etat</th>
              <th scope="col">            Action</th>
            </tr>
          </thead>
          <tbody>
            {pharmacies.map((pharmacie, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{pharmacie.adresse}</td>
                <td>{pharmacie.latitude}</td>
                <td>{pharmacie.longitude}</td>
                <td>{pharmacie.nom}</td>
                <td>{pharmacie.etat}</td>
             
               
                <td>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePharmacie(pharmacie.id)}
                  ><span class="bi bi-trash"></span>
                </button>
               
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/ajouterpharmacie/${pharmacie.id}`}
                  >
                    changer etat
                  </Link>
                  </td>             
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </main>
  );
}
