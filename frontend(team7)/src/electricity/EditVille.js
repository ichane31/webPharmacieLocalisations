import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [ville, setVille] = useState({
    Nom:""
  });
  const { nom } = ville;

  const onInputChange = (e) => {
    setVille({ ...ville, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadVille ();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/villes/edit/${id}`, ville);
    navigate("/homenajia");
  };

  const loadVille = async () => {
    const result = await axios.get(`http://localhost:8080/villes/${id}`);
    setVille(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Client</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="nom"
                value={ville.nom}
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
