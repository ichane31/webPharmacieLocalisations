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
      <h1>Tableau de bord </h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/homenajia">Home</a></li>
          <li className="breadcrumb-item">nombre de pharmacie par ville et zone </li>
        </ol> 
      </nav>
    </div>{/* End Page Title */}
    <div className="row"></div> 


<section className="section">
    <div className="row">
    <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">nombre de pharmacie par ville  </h5>
              <div>
                <Chart options={options2} type="bar" series={series2} width="80%" height="200%"/>
              </div>
            </div> 
          </div>
        </div>
       
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">nombre de pharmacie par zone  </h5>
              <div>
                <Chart options={options2} type="bar" series={series2} width="80%" height="200%"/>
              </div>
            </div> 
          </div>
        </div>
        
 
 
      </div>
    </section>
  </main>
  )
}