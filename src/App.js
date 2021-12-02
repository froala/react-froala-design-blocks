import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/froala-design-blocks/dist/css/froala_blocks.css';

import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from 'react';

import CallToAction from './CallToAction.jsx';
import Contacts from './Contacts.jsx';
import Contents from './Contents.jsx';
import Features from './Features.jsx';
import Footers from './Footers.jsx';
import Forms from './Forms.jsx';
import Headers from './Headers.jsx';
import Pricings from './Pricings.jsx';
import Teams from './Teams.jsx';
import Testimonials from './Testimonials.jsx';
import Lists from './Lists.jsx';
import Carousels from './Carousels.jsx'; 
import Gallery from "./Gallery.jsx";
import Sample1 from './Sample1.jsx';
import Sample2 from './Sample2.jsx';

function App() {
    return (
      <Router>
      <div>
        <section className="fdb-block py-0 my-5">
          <div className="container bg-r py-5" style={{backgroundImage: 'url(imgs/shapes/1.svg)'}}>
            <div className="row justify-content-start">
              <div className="col-12 col-sm-10 col-md-8 text-center text-sm-left">
                <h1>Froala Design Blocks</h1>
                <p className="lead">Over 170 responsive design blocks ready to be used in your web or mobile apps. All blocks are based on the Bootstrap Library, and they are the building blocks for beautiful websites.</p>
                <p className="mt-4">
                  <a className="btn btn-dark mr-3 mr-sm-0" href="https://github.com/froala/design-blocks"><i className="fab fa-github"></i> Github Docs</a>
                  <a className="btn btn-primary ml-sm-3 mr-3 mr-sm-0 mt-3 mt-sm-0" href="https://froala.com/design-blocks#playground">Official Website</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="fdb-block p-2" id="navigator">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md">
              <button className="navbar-toggler mr-auto ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse mt-2 mt-md-0" id="navbarNav0">
                <nav className="m-auto">
                  <Link className="btn btn-outline-primary m-1" to="/call-to-action" >Call To Action</Link>
                  <Link className="btn btn-outline-primary m-1" to="/contacts">Contacts</Link>
                  <Link className="btn btn-outline-primary m-1" to="/contents">Contents</Link>
                  <Link className="btn btn-outline-primary m-1" to="/features">Features</Link>
                  <Link className="btn btn-outline-primary m-1" to="/footers">Footers</Link>
                  <Link className="btn btn-outline-primary m-1" to="/forms">Forms</Link>
                  <Link className="btn btn-outline-primary m-1" to="/headers">Headers</Link>
                  <Link className="btn btn-outline-primary m-1" to="/pricings">Pricings</Link>
                  <Link className="btn btn-outline-primary m-1" to="/teams">Teams</Link>
                  <Link className="btn btn-outline-primary m-1" to="/testimonials">Testimonials</Link>
                  <Link className="btn btn-outline-primary m-1" to="/lists">Lists</Link>
                  <Link className="btn btn-outline-primary m-1" to="/carousels">Carousels</Link>
                  <Link className="btn btn-outline-primary m-1" to="/gallery">Gallery</Link>
                  <Link className="btn btn-outline-primary m-1" to="/sample1">Sample</Link>
                  <Link className="btn btn-outline-primary m-1" to="/sample2">Sample 2</Link>
                </nav>
              </div>
            </nav>
          </div>
        </section>

        <Routes>
         <Route exact path="/call-to-action" element={<CallToAction />} />
         <Route exact path="/contacts" element={<Contacts />} />
         <Route exact path="/contents" element={<Contents />} />
         <Route exact path="/features" element={<Features />} />
         <Route exact path="/footers" element={<Footers />} />
         <Route exact path="/forms" element={<Forms />} />
         <Route exact path="/headers" element={<Headers />} />
         <Route exact path="/pricings" element={<Pricings />} />
         <Route exact path="/teams" element={<Teams />} />  
         <Route exact path="/testimonials" element={<Testimonials />} />
         <Route exact path="/lists" element={<Lists />} />
         <Route exact path="/carousels" element={<Carousels />} />
         <Route exact path="/gallery" element={<Gallery />} />
         <Route exact path="/sample1" element={<Sample1 />} />
         <Route exact path="/sample2" element={<Sample2 />} />
         
         <Route path="/" element={<Sample1 />} />
         </Routes>
        </div>
       </Router>
    );
}

export default App;
