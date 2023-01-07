import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function AddRecharge() {
    

  let navigate = useNavigate();

  const [recharge, setRecharge] = useState({
    client_phone: "",
    montant: "",
    offre: "",
    operateur: "",

  });
  const showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "Operation done successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
}

  const { client_phone , montant , offre,operateur} = recharge;

  const onInputChange = (e) => {
    setRecharge({ ...recharge, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8182/recharge`, recharge);
    navigate("/");
  };
  

  return (
    <main id="main" class="main">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add recharge</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="client_phone" className="form-label">
                phone
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
                Montant
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
            <div className="mb-3">
              <label htmlFor="Offre" className="form-label">
                Offre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your offre"
                name="offre"
                value={offre}
                onChange={(e) => onInputChange(e)}
              />
          
            </div>
            <div className="mb-3">
              <label htmlFor="operateur" className="form-label">
                Operateur
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your operateur"
                name="operateur"
                value={operateur}
                onChange={(e) => onInputChange(e)}
              />
          
            </div>
            
            
            <button type="submit" onClick={()=>showAlert()}  className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </main>
  );
}
