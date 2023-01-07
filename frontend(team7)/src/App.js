import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home1";
import Homenajia from "./pages/Homenajia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import ListFacturesdepasses from "./electricity/ListFacturesdepasses";
import Payelecwater from "./electricity/Payelecwater";
import ListFactures from "./electricity/ListFactures";
import  ListCustomers from "./electricity/ListCustomers";
import ListFactureswater from "./water/ListFactureswater";
import ListFactureswaterExpire from "./water/ListFactureswaterExpire";
import Paywater from "./water/Paywater";
import EditUser from "./electricity/EditVille";
import Charts from "./components/Charts";
import Payment from "./electricity/Payment";
import AjouterZone from "./electricity/AjouterZone";
import AjouterPharmacie from "./electricity/AjouterPharmacie";
import AjouterVille from "./electricity/AjouterVille";


import AddUser from "./users/AddUser";
import ViewUser from "./users/ViewUser";
import ListRecharge from "./recharge/ListRecharge";
import  AddRecharge from "./recharge/Addrecharge";
import Listwifi from "./wifi/Listwifi";
import  Addwifi from "./wifi/Addwifi";
import Listabonnement from "./abonnement/Listabonnement";
import  Addabonnement from "./abonnement/Addabonnement";
import  EditVille from "./electricity/EditVille";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/listrecharge" element={<ListRecharge />} />
          <Route exact path="/addrecharge" element={<AddRecharge />} />
          <Route exact path="/listwifi" element={<Listwifi />} />
          <Route exact path="/addwifi" element={<Addwifi />} />
          <Route exact path="/listabonnement" element={<Listabonnement />} />
          <Route exact path="/addabonnement" element={<Addabonnement />} />
          <Route exact path="/listfacturesdepasses" element={<ListFacturesdepasses />} />
          <Route exact path="/listfactureswaterexpire" element={<ListFactureswaterExpire />} />
          <Route exact path="/listcustomers" element={<ListCustomers />} />
          <Route exact path="/edituser" element={<EditUser />} />
          <Route exact path="/ajouterzone" element={<AjouterZone />} />
          <Route exact path="/ajouterpharmacie" element={<AjouterPharmacie />} />
          <Route exact path="/listfactures" element={<ListFactures />} />
          <Route exact path="/payelecwater" element={<Payelecwater />} />
          <Route exact path="/homenajia" element={<Homenajia />} />
          <Route exact path="/paywater" element={<Paywater />} />
          <Route exact path="/charts" element={<Charts />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/listefactureswater" element={<ListFactureswater />} />
          <Route exact path="/ajouterville" element={<AjouterVille />} />
          <Route exact path="/editville" element={<EditVille />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
