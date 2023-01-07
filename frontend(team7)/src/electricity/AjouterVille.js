import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [ville, setVille] = useState({
    Nom: "",
  });
  const { nom} = ville;
  const onInputChange = (e) => {
    setVille({ ...ville, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/villes/add", ville);
    navigate("/listfactureswater");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Ajouter une Ville</h2>

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
                
                onChange={(e) => onInputChange(e)}
              />     
            </div>   
           
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/listfactureswater">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
