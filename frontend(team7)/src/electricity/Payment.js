import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import lydec from '../image/lydec.jfif'
import radeeg from '../image/radeeg.jfif'
import redal from '../image/redal.jfif'
import $ from 'jquery';
import 'react-confirm-alert/src/react-confirm-alert.css'




export default function Home() {
  var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};


const { amount ,reference,serviceProvider} = useParams();



$('#cmd').click(function () {
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});
  return (
    <main id="main" class="main">
          <div class="pagetitle">
      <h1>{amount} </h1>
      <h1>{reference} </h1>
      <h1>{serviceProvider} </h1>
    </div>
    <section class="section dashboard">
    <div className="container">
      <div className="">
          <div class="col-12">
          <Link className="btn btn-outline-warning" to="/payelecwater">
            pay for a bill 
      </Link>
      <Link className="btn btn-outline-warning" to="/listFacturesdepasses">
           Expired bill
      </Link>
              <div class="card recent-sales overflow-auto">


          <div class="card-body">
                  <h5 class="card-title"> <span></span></h5>
                  <div id="content">
     <h3>Generate PDF files in client-side JavaScript</h3>

<p>href="https://parall.ax/products/jspdf#"</p>
<p>Or refer to the YouTube video: https://www.youtube.com/watch?v=CnprxD_sJFE</p>
</div>
<div id="editor"></div>
<button id="cmd">Generate PDF</button>
      </div>
     </div>
    </div>
    </div>
    </div>
    </section>
    </main>

  );
}
