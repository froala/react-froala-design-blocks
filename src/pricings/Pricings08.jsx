import React, { Component } from 'react';

class Pricings08 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row text-center">
      <div className="col">
        <h1>Pricing Plans</h1>
      </div>
    </div>

    <div className="row mt-5 align-items-top">
      <div className="col-12 col-md-8 m-auto col-lg-4 text-center">
        <img alt="cloud" height="60" src="./imgs/icons/cloud.svg" />
        <h2><strong>Startup</strong></h2>
        <p className="h3 mb-4 mb-lg-5"><em>$9 / month</em></p>

        <p>10 hours of support</p>
        <p>40MB of storage</p>
        <p>Subdomain</p>

        <p className="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" className="btn btn-primary">Choose Plan</a></p>
      </div>

      <div className="col-12 col-md-8 col-lg-4 text-center m-auto pt-5 pt-lg-0">
        <img alt="bouy" height="60" src="./imgs/icons/life-buoy.svg" />
        <h2><strong>Advanced</strong></h2>
        <p className="h3 mb-4 mb-lg-5"><em>$19 / month</em></p>

        <p>10 hours of support</p>
        <p>40MB of storage</p>
        <p>Subdomain</p>

        <p className="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" className="btn btn-primary">Choose Plan</a></p>
      </div>

      <div className="col-12 col-md-8 m-auto col-lg-4 text-center pt-5 pt-lg-0">
        <img alt="layers" height="60" src="./imgs/icons/layers.svg" />
        <h2><strong>Business</strong></h2>
        <p className="h3 mb-4 mb-lg-5"><em>$29 / month</em></p>

        <p>10 hours of support</p>
        <p>40MB of storage</p>
        <p>Subdomain</p>

        <p className="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" className="btn btn-primary">Choose Plan</a></p>
      </div>
    </div>
  </div>
</section>

  }
}

export default Pricings08
