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
  const [factures, setFactures] = useState([]);
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  const { id } = useParams();

  useEffect(() => {
    loadFactures();
  }, []);
    const pdfGenerate=async (amount,reference,serviceProvider)=>{
    var doc=new jsPDF('landscape','px','a4','false');
    doc.addImage(tashilat,'JPG',90,90,90,90);
    if(serviceProvider =='lydec'){
    doc.addImage(lydec,'JPG',40,40,60,60);}
    else if(serviceProvider =='radeeg'){
        doc.addImage(radeeg,'JPG',20,20,60,60);}
        else if(serviceProvider =='redal'){
            doc.addImage(redal,'JPG',20,20,60,60);}

    doc.text(200,150,"Total TTC  : "+amount+"DH");
    doc.text(200,200,"REFERENCE :"+reference);
    doc.text(200,250,"OPERATOR : "+serviceProvider);
    doc.save();
    createNotification('success');
};
  const loadFactures = async () => {
    const result = await axios.get("http://localhost:8080/factures");
    setFactures(result.data);
  };
  const deleteFacture = async (id) => {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to  delete this item.',
      });
    
    await axios.delete(`http://localhost:8080/factures/${id}`);
    loadFactures();
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
      <h1>Electricity Service </h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/homenajia">Home</a></li>
          <li class="breadcrumb-item active">Electricity Service</li>
        </ol>
      </nav>
    </div>
    <section class="section dashboard">
    <div className="container">
      <div className="">
        
   
          <div class="col-12">
          <Link className="btn btn-outline-warning" to="/payelecwater">
            pay for a bill 
      </Link>
      <Link className="btn btn-outline-warning" to="/listFacturesdepasses">
           Expired bill
      </Link>
              <div class="card recent-sales overflow-auto">


          <div class="card-body">
                  <h5 class="card-title"> <span></span></h5>
        <table className="table border shadow " id="example">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">amount</th>
              <th scope="col">expiration_date</th>
              <th scope="col">month</th>
              <th scope="col">paid</th>
              <th scope="col"> payment_date</th>
              <th scope="col">reference</th>
              <th scope="col">service_provider</th>
              <th scope="col"> client</th>
              <th scope="col">            Action</th>
            </tr>
          </thead>
          <tbody>
            {factures.map((facture, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{facture.amount}</td>
                <td>{facture.expirationDate}</td>
                <td>{facture.month}</td>
                <td>{facture.paid}</td>
                <td>{facture.paymentDate}</td>
                <td>{facture.reference}</td>
                <td>{facture.serviceProvider}</td>
                <td>{facture.client_id}</td>
                <td>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteFacture(facture.id)}
                  ><span class="bi bi-trash"></span>
                  </button>          
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => pdfGenerate(facture.amount,facture.reference,facture.serviceProvider)}
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
