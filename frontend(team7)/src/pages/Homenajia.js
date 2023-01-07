import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/clients");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/clients/${id}`);
    loadUsers();
  };
  return (
    <main id="main" class="main">
      <div class="row" >      

 

      <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li><a class="dropdown-item" href="/listcustomers">Liste des pharmacies</a></li>                  
                  </ul>
                </div>
                <div class="card-body">
                <img src="assets/img/logoph.jfif" width="150px" height="100px" alt="" class="rounded-circle"/>
                  <h5 class="card-title">Pharmacies</h5>
                  <div class="d-flex align-items-center">
                 
                   
                  </div>
                </div>

              </div>
            </div>






      <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                    <h6>Choose options</h6>
                    </li>
                    <li><a class="dropdown-item" href="/listefactureswater">Liste des villes</a></li>
                  
                  </ul>
                </div>

                <div class="card-body">
                <img src="assets/img/ville.jfif" width="150px" height="100px" alt="" class="rounded-circle"/>
                  <h5 class="card-title">Villes </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                      
                    </div>
                  
                  </div>
                </div>

              </div>
            </div>



            <div class="col-xxl-4 col-xl-6">
              <div class="card info-card customers-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                    <h6>Choose options</h6>
                    </li>

                    <li><a class="dropdown-item" href="/listfactures">Liste des zones</a></li>
                
                  </ul>
                </div>
                <div class="card-body">
                <img src="assets/img/zone.jfif" width="150px" height="100px" alt="" class="rounded-circle"/>
                  <h5 class="card-title">Zones </h5>
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">              
                    <li><a class="dropdown-item" href="/charts">Voir les statistiques</a></li>                  
                  </ul>
                </div>
                <div class="card-body">
                <img src="assets/img/statistics.png" width="150px" height="100px" alt="" class="rounded-circle"/>
                  <h5 class="card-title">Statistiques</h5>
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
    </main>
  );
}
