import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddRecharge() {
    
    const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Operation done successfully",
            icon: "success",
            confirmButtonText: "OK",
          });}
  let navigate = useNavigate();
 

  const [abonnement, setWifi] = useState({
    client_phone: "",
    montant: "",


  });
  const [montant1, setmontant] = useState([]);

  const { client_phone , montant } = abonnement;

  const onInputChange = async (e) => { 
    setWifi({ ...abonnement, [e.target.name]: e.target.value });
    const result = await axios.get(`http://localhost:8182/abonnement/faty/${e.target.value}`);
    setmontant(result.data)
  };
  const onSubmit = async (e) => {
    e.preventDefault();

            await axios.put(`http://localhost:8182/abonnement/${client_phone}/${montant}`,abonnement);
            navigate("/");


        
      
  
  };
  

  return (
    <main id="main" class="main">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add facture abonnement</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="client_phone" className="form-label">
                Phone number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone number"
                name="client_phone"
                value={client_phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Montant" className="form-label">
              Le montant a payer est : {montant1}
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your montant"
                name="montant"
                value={montant}
                onChange={(e) => onInputChange(e)}
              />
        
      
          
            </div>
            
            <button type="submit"  onClick={()=>showAlert()}  className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/listabonnement">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </main>
  );
}
