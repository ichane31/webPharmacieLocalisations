import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddPayment() {
    const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Operation done successfully",
            icon: "success",
            confirmButtonText: "OK",
          });}
  let navigate = useNavigate();
  const [elecwater, setElecWater] = useState({
    reference:"",
    email:"",
    amount:"",});
  const [amount1, setAmount1] = useState([]);
  const { reference} = elecwater;


  
  const onInputChange = async (e) => {
    setElecWater({ ...elecwater, [e.target.name]: e.target.value });
    const result = await axios.get(`http://localhost:8080/factures/amount/${e.target.value}`);
    setAmount1(result.data)
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
            await axios.put(`http://localhost:8080/factures/pay/${reference}`,elecwater);
            navigate("/homenajia");    
  };
  return (
    <main id="main" class="main">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">pay for this bill</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="reference" className="form-label">
               reference
              </label>
              <input
                type={"number"}
                className="form-control"
               placeholder="Enter the bill's reference"

                name="reference"
                value={reference}

                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Montant" className="form-label">
              The amount to be paid is : {amount1}
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter the bill's amount"
                value={amount1}
                name="montant"
               
                onChange={(e) => onInputChange(e)}
              />    
            </div>
            <button type="submit"  onClick={()=>showAlert()}  className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/listfactures">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </main>
  );
}
