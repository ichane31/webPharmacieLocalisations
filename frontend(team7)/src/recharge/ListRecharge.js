import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import logoinwi from '../image/inwi.jpg'
import logoorange from '../image/orange1.jpg'
import logotisalat from '../image/tisalat11.jpg'
export default function Home() {
  const [recharges, setRecharges] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadRecharges();
  }, []);

    const pdfGenerate=async (montant,phone,operateur)=>{
    var doc=new jsPDF('landscape','px','a4','false');
    if(operateur=='inwi'){
    doc.addImage(logoinwi,'JPG',20,20,60,60);}
    else if(operateur=='orange'){
        doc.addImage(logoorange,'JPG',20,20,60,60);}
        else if(operateur=='tisalat'){
            doc.addImage(logotisalat,'JPG',20,20,60,60);}
    doc.text(200,10,"Total TTC  : "+montant+"DH");
    doc.text(200,50,"PHONE NUMBER :"+phone);
    doc.text(200,100,"OPERATOR : "+operateur);
    doc.save();
};
  const loadRecharges = async () => {
    const result = await axios.get("http://localhost:8182/recharge");
    setRecharges(result.data);
  };

  const deleteRecharge = async (id) => {
    await axios.delete(`http://localhost:8182/recharge/${id}`);
    loadRecharges();
  };

  return (
    <main id="main" class="main">
    <div className="container">
      <div className="">
        
      <Link className="btn btn-outline-warning" to="/addrecharge">
            payer Recharge
          </Link>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Montant</th>
              <th scope="col">Offre</th>
              <th scope="col">Operateur</th>
              <th scope="col">Client Phone</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {recharges.map((recharge, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{recharge.montant}</td>
                <td>{recharge.offre}</td>
                <td>{recharge.operateur}</td>
                <td>{recharge.client_phone}</td>

                <td>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteRecharge(recharge.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => pdfGenerate(recharge.montant,recharge.client_phone,recharge.operateur)}
                  >
                    Telecharger un ticket
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
