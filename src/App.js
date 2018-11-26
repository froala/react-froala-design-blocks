import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/froala-design-blocks/dist/css/froala_blocks.css';

import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react';

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

class App extends Component {
  render() {
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
                </nav>
              </div>
            </nav>
          </div>
        </section>

         <Route exact path="/call-to-action" component={CallToAction} />
         <Route exact path="/contacts" component={Contacts} />
         <Route exact path="/contents" component={Contents} />
         <Route exact path="/features" component={Features} />
         <Route exact path="/footers" component={Footers} />
         <Route exact path="/forms" component={Forms} />
         <Route exact path="/headers" component={Headers} />
         <Route exact path="/pricings" component={Pricings} />
         <Route exact path="/teams" component={Teams} />
         <Route exact path="/testimonials" component={Testimonials} />
        </div>
       </Router>
    );
  }
}

function Home() {
  return (
    ''
  );
}

export default App;
