import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [zone, setZone] = useState({
    adresse :"",
    Ville:""
  });

  const { nom,ville} = zone;

  const onInputChange = (e) => {
    setZone({ ...zone, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/zones", zone);
    navigate("/listfactures");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Ajouter une Zone</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Nom" className="form-label">
                Non
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrer le nom de la pharmacie "
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
             <select>
              <option>Marrakech </option>
              <option>Casablanca </option>
              <option>Rabat </option>
              <option>El jadida </option>
             </select>
              
            </div>   
           
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/listfactures">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
