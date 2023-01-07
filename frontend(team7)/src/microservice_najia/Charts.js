import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export default function Dashboard() {
    const [id, setId] = useState([]);
    const [city, setCity] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
      const url = 'http://localhost:8080/clients';
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setId(data?.map((item) => item.id));
        setCity(data?.map((item) => item.city));
      } catch (error) {
          console.log(error);
      }
    };
      getData();
    }, []);

    const series1 = [ //data on the y-axis
    {
      name: "cin",
      data: id
    }
  ];
  const options1 = { //data on the x-axis
  chart: { id: 'bar-chart'},
  xaxis: {
    categories: city
  }
  };
  const [id1, setId1] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    const getData = async () => {
    const url = 'http://localhost:8080/clients';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setId1(data?.map((item) => item.id));
      setAddress(data?.map((item) => item.address));
    } catch (error) {
        console.log(error);
    }
  };
    getData();
  }, []);

  const series2 = [ //data on the y-axis
  {
    name: "Eamil",
    data: id1
  }
];
const options2 = { //data on the x-axis
chart: { id: 'bar-chart'},
xaxis: {
  categories:address
}
};



const [nbrpaid, setNbrpaid] = useState([]);
const [nbrpaidwater, setNbrpaidwater] = useState([]);
const [numclientr, setnbrR] = useState([]);
const [numclientW, setnbrW] = useState([]); 
const [nbrpayelecwater, setNbrpay] = useState([]);
const [nbrpaywater, setNbrpaywater] = useState([]);  
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:8080/factures/paide');
            setNbrpaid(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);
      const optionsPie = { labels: ["paid", "unpaid"] };
      const seriesPie = [nbrpaid, 100-nbrpaid]; //our data   
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:8080/factureswater/paide');
            setNbrpaidwater(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);
      const optionsPie1 = { labels: ["paid", "unpaid"] };
      const seriesPie1 = [nbrpaidwater, 100-nbrpaidwater]; //our data
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:8080/factures/conteur');
            setnbrR(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, []);      
 useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/factureswater/conteur');
        setnbrW(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/factures/paide2');
        setNbrpay(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/factureswater/paide2');
        setNbrpaywater(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
    return(
  <main id="main" className="main">
    <div className="pagetitle">
      <h1>Electricity/water service's dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/homenajia">Home</a></li>
          <li className="breadcrumb-item">Electricity/Water Service Statistics</li>
        </ol> 
      </nav>
    </div>{/* End Page Title */}
    <div className="row">
 {/* Sales Card */}
 <div className="col-lg-2">
    <div className="card info-card sales-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">water bills</h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-cart" />
          </div>
          <div className="ps-3">
            <strong><h5>{numclientW} clients</h5></strong>
            <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Sales Card */} {/* End Sales Card */}
  {/* Revenue Card */}
  <div className="col-lg-2">
    <div className="card info-card revenue-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
          </li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Electricity bills </h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-currency-dollar" />
          </div>
          <div className="ps-3">
          <strong><h5>{numclientr} clients</h5></strong>
            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
          </div>
        </div>
      </div>
    </div>
  </div>{/* End Revenue Card */}
  {/* Revenue Card */}
  <div className="col-lg-2">
    <div className="card info-card revenue-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Unpaid bills's electricity</h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-currency-dollar" />
          </div>
          <div className="ps-3">
          <strong><h5>{nbrpayelecwater} ones</h5></strong>
            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
          </div>
        </div>
      </div>
    </div>
  </div>{/* End Revenue Card */}
  {/* Revenue Card */}
  <div className="col-lg-2">
    <div className="card info-card revenue-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">unpaid bills's water</h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-currency-dollar" />
          </div>
          <div className="ps-3">
          <strong><h5>{nbrpaywater}ones</h5></strong>
            <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>


<section className="section">
    <div className="row">
    <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email per address </h5>
              <div>
                <Chart options={options2} type="bar" series={series2} width="80%" height="200%"/>
              </div>
            </div> 
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">number of client per City</h5>
              <div>
                <Chart options={options1} type="line" series={series1} width="80%" height="200%"/>
              </div>
            </div> 
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">the percentage of paid and unpaid bills's water</h5>
              <div id="barChart" />
              <Chart options={optionsPie1} type="pie" series={seriesPie1} width="80%" height="200%"/>
            </div>
          </div>
        </div>  
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">the percentage of paid and unpaid bills's electricity</h5>
              <div>
                <Chart options={optionsPie} type="pie" series={seriesPie} width="80%" height="200%"/>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  </main>
  )
}