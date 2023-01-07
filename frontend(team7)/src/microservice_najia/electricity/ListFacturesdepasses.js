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
  const [listes, setLists] = useState([]);
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  const { id } = useParams();

  useEffect(() => {
    loadlists();
  }, []);

  const pdfGenerate=async (amount,reference,serviceProvider)=>{
    var doc=new jsPDF('landscape','px','a4','false');
    if(serviceProvider =='lydec'){
    doc.addImage(lydec,'JPG',20,20,60,60);}
    else if(serviceProvider =='radeeg'){
        doc.addImage(radeeg,'JPG',20,20,60,60);}
        else if(serviceProvider =='redal'){
            doc.addImage(redal,'JPG',20,20,60,60);}
    doc.text(200,10,"Total TTC  : "+amount+"DH");
    doc.text(200,50,"REFERENCE :"+reference);
    doc.text(200,100,"OPERATOR : "+serviceProvider);
    doc.text(200,190," ");
    doc.text(62,200,"As we care about your confort we take to inform you that tomorrow is the deadline to pay the  ");
    doc.text(62,220,"electricity bill before electricity disconnexion   ");
    doc.save();
};
  const loadlists = async () => {
    const result = await axios.get("http://localhost:8080/factures/Expired");
    setLists(result.data);
  };
  const deleteFacture = async (id) => {
    await axios.delete(`http://localhost:8080/factureswater/${id}`);
    loadlists();
  };
  const warning = async (id) => {
    await axios.post(`http://localhost:8080/factures/${id}`);

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
          <Link className="btn btn-outline-warning" to="/listfactures">
            return into electricity bills list
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {listes.map((liste, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{liste.amount}</td>
                <td>{liste.expirationDate}</td>
                <td>{liste.month}</td>
                <td>{liste.paid}</td>
                <td>{liste.paymentDate}</td>
                <td>{liste.reference}</td>
                <td>{liste.serviceProvider}</td>
                <td>{liste.client_id}</td>
                <td>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => pdfGenerate(liste.amount,liste.reference,liste.serviceProvider)}
                  ><span class="bi bi-download"></span>
                   warning
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
