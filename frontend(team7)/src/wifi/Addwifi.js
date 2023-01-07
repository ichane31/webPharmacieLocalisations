import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddRecharge() {
    

  let navigate = useNavigate();
  var t ;

  const [wifi, setWifi] = useState({
    code_wifi: "",
    montant: "",


  });

  const [montant1, setmontant] = useState([]);

  const { code_wifi , montant } = wifi;

  const onInputChange = async (e) => {
    setWifi({ ...wifi, [e.target.name]: e.target.value });
    const result = await axios.get(`http://localhost:8182/wifi/faty/${e.target.value}`);
    setmontant(result.data)
    

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8182/wifi/${code_wifi}/${montant}`,wifi);
    navigate("/");
  };
  

  return (
    <main id="main" class="main">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add facture wifi</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="code_wifi" className="form-label">
                Code wifi
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your code "
                name="code_wifi"
                value={code_wifi}
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
                placeholder={"Enter amount"}
                name="montant"
                value={montant}
                onChange={(e) => onInputChange(e)}
              />
        
      
          
            </div>
            
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/listwifi">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </main>
  );
}
