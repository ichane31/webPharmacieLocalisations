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


export default function Home() {
  const [clients, setClients] = useState([]);
  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  const { id } = useParams();

  useEffect(() => {
    loadClients();
  }, []);
    const pdfGenerate=async (name,cin,address)=>{
    var doc=new jsPDF('landscape','px','a4','false');
    if(cin =='lydec'){
    doc.addImage(logoinwi,'JPG',20,20,60,60);}
    else if(cin =='radeeg'){
        doc.addImage(logoorange,'JPG',20,20,60,60);}
        else if(cin =='redal'){
            doc.addImage(logotisalat,'JPG',20,20,60,60);}
    doc.text(200,10,"Name :"+name+"DH");
    doc.text(200,50,"CIN :"+cin);
    doc.text(200,100,"Address : "+address);
    doc.save();
};

  const loadClients = async () => {
    const result = await axios.get("http://localhost:8080/clients");
    setClients(result.data);
  };
  
  const deleteClients = async (id) => {
    await axios.delete(`http://localhost:8080/clients/${id}`);
    loadClients();
   
  };
  return (
    <main id="main" class="main">
          <div class="pagetitle">
      <h1>Customers  </h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/homenajia">Home</a></li>
          <li class="breadcrumb-item active">Customers </li>
        </ol>
      </nav>
    </div>
    <section class="section dashboard">
    <div className="container">
      <div className="">   
          <div class="col-12">
              <div class="card recent-sales overflow-auto">
          <div class="card-body">
                  <h5 class="card-title"> <span></span></h5>
        <table className="table border shadow " id="example">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">address</th>
              <th scope="col">cin</th>
              <th scope="col">city</th>
              <th scope="col">email</th>
              <th scope="col"> name</th>
              <th scope="col">phone</th>
              <th scope="col">picture</th>
              <th scope="col">            Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{client.address}</td>
                <td>{client.cin}</td>
                <td>{client.city}</td>
                <td>{client.email}</td>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.picture}</td>
               
                <td>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteClients(client.id)}
                  ><span class="bi bi-trash"></span>
                </button>
               
                <button
                    className="btn btn-warning mx-2"
                    onClick={() => pdfGenerate(client.name,client.cin,client.address)}
                  ><span class="bi bi-trash"></span>
                    Data
                </button>
                
                <button
                    className="btn btn-warning mx-2"
                    onClick={() => pdfGenerate(client.name,client.cin,client.address)}
                  ><span class="bi bi-download"></span>
                    Data
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
