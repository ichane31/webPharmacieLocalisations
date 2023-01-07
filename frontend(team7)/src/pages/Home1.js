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
    const result = await axios.get("http://localhost:8182/client");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8182/client/${id}`);
    loadUsers();
  };

  return (
    <main id="main" class="main">
  <div class="row"> 
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                    <h6>Choose options</h6>
                    </li>

                    <li><a class="dropdown-item" href="/addwifi">Pay wifi</a></li>
                    <li><a class="dropdown-item" href="/listwifi">Liste wifi</a></li>
                  
                  </ul>
                </div>

                <div class="card-body">
                <img src="assets/img/wifii.jfif" width="150px" height="100px" alt="" class="rounded-circle"/>
                  <h5 class="card-title">Wifi </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                      
                    </div>
                    <div class="ps-3">
                      <h6>Total 145</h6>
                      <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Choose options</h6>
                    </li>

                    <li></li>
                    <li><a class="dropdown-item" href="/addabonnement">Pay abonnement</a></li>
                    <li><a class="dropdown-item" href="/listabonnement">List abonnements </a></li>
                  </ul>
                </div>

                <div class="card-body">
                <img src="assets/img/abonnement.png" width="150px" height="100px" alt="" class="rounded-circle"/>

                  <h5 class="card-title">Abonnement</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>Total 264</h6>
                      <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

           
            <div class="col-xxl-4 col-xl-12">

              <div class="card info-card customers-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                    <h6>Choose options</h6>
                    </li>

                    <li><a class="dropdown-item" href="/addrecharge">Pay recharge</a></li>
                    <li><a class="dropdown-item" href="/listrecharge">List Recharge</a></li>
                  </ul>
                </div>

                <div class="card-body">
                <img src="assets/img/recharge.jfif" width="150px" height="100px" alt="" class="rounded-circle"/>

                  <h5 class="card-title">Recharge </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>Total 1244</h6>
                      <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                    </div>
                  </div>

                </div>
              </div>

            </div>
            </div>
    </main>
  );
}
