import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import lydec from '../image/lydec.jfif'
import radeeg from '../image/radeeg.jfif'
import redal from '../image/redal.jfif'
import tashilat from '../image/tashilat.jfif'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';



export default function Home() {
  const [zones, setZones] = useState([]);

  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  const { id } = useParams();

  useEffect(() => {
    loadZones();
  }, []);
    const pdfGenerate=async (nom)=>{
    var doc=new jsPDF('landscape','px','a4','false');
    doc.addImage(tashilat,'JPG',90,90,90,90);
 

    doc.text(200,150,"nom de la zone : "+nom);
    doc.save();
    createNotification('success');
};
  const loadZones = async () => {
    const result = await axios.get("http://localhost:8080/zones/all");
    setZones(result.data);
  };
  const deleteZone = async (id) => {
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to  delete this item.',
      });
    
    await axios.delete(`http://localhost:8080/zones/delete/${id}`);
    loadZones();
  };
  const  createNotification = (type) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Operation effectuee avec success','Notification', 3000);
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 30000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
    });
        break;
      }
    };  
  return (
    <main id="main" class="main">
          <div class="pagetitle">
      <h1>Gestion des zones </h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/homenajia">Home</a></li>
          <li class="breadcrumb-item active">Gestion des zones</li>
        </ol>
      </nav>
    </div>
    <section class="section dashboard">
    <div className="container">
      <div className="">
          <div class="col-12">
      <Link className="btn btn-outline-warning" to="/ajouterzone">
      ajouter une zone 
      </Link>
              <div class="card recent-sales overflow-auto">
          <div class="card-body">
                  <h5 class="card-title"> <span></span></h5>
        <table className="table border shadow " id="example">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Nom de la zone</th>
              
              <th scope="col" >                                      Action</th>
            </tr>
          </thead>
          <tbody>
            {zones.map((zone, index) => (
              <tr> 
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{zone.nom}</td>
             
                <td>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteZone(zone.id)}
                  ><span class="bi bi-trash"></span>
                  </button>          

                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => pdfGenerate(zone.nom)}
                  ><span class="bi bi-download"></span>
                    ticket
                  </button>
                  </td>             
              </tr>
            ))}
          </tbody>
        </table>
        <NotificationContainer/>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </main>

  );
}
