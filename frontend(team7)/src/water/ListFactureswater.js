import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import lydec from '../image/lydec.jfif'
import radeeg from '../image/radeeg.jfif'
import redal from '../image/redal.jfif'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


export default function Home() {
  const [villes, setVilles] = useState([]);
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  const { id } = useParams();

  useEffect(() => {
    loadVilles();
  }, []);

  const pdfGenerate=async (nom)=>{
    var doc=new jsPDF('landscape','px','a4','false');
  
    doc.text(200,10,"Nom de la ville  : "+nom+"DH");
     
    doc.save();
};
  const loadVilles = async () => {
    const result = await axios.get("http://localhost:8080/villes/all");
    setVilles(result.data);
  };

  const deleteVille= async (id) => {
    await axios.delete(`http://localhost:8080/villes/delete/${id}`);
    loadVilles();
  };

  return (
    <main id="main" class="main">
          <div class="pagetitle">
      <h1>Gestion des villes </h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/homenajia">Home</a></li>
          <li class="breadcrumb-item active">Gestion des villes </li>
        </ol>
      </nav>
    </div>
    <section class="section dashboard">
    <div className="container">
      <div className="">
        
   
          <div class="col-12">
      <Link className="btn btn-outline-warning" to="/ajouterville">
      ajouter une ville
      </Link>
              <div class="card recent-sales overflow-auto">
          <div class="card-body">
                  <h5 class="card-title"> <span></span></h5>
        <table className="table border shadow " id="example">
          <thead>
          <tr>
              <th scope="col">N°</th>
              <th scope="col">Nom de la ville</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {villes.map((ville, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{ville.nom}</td>
                
                <td>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteVille(ville.id)}
                  ><span class="bi bi-trash"></span>
                  </button>

                  <Link className="btn btn-outline-warning" to="/editville">
     Edit
      </Link>

                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => pdfGenerate(ville.nom)}
                  ><span class="bi bi-download"></span>
                    ticket
                  </button>
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
