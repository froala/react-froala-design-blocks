import React, { Component } from 'react';

class Features08 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h1>Features</h1>
        <img alt="amil" className="img-fluid mt-5" src="./imgs/draws/email.svg" />
      </div>
    </div>

    <div className="row text-center justify-content-center mt-5 pt-5">
      <div className="col-12 col-sm-4 col-lg-3 m-md-auto">
        <img alt="monitor" className="fdb-icon" src="./imgs/icons/monitor.svg" />
        <h3><strong>Feature 1</strong></h3>
      </div>

      <div className="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
        <img alt="map" className="fdb-icon" src="./imgs/icons/map.svg" />
        <h3><strong>Feature 2</strong></h3>
      </div>

      <div className="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
        <img alt="package" className="fdb-icon" src="./imgs/icons/package.svg" />
        <h3><strong>Feature 3</strong></h3>
      </div>
    </div>
  </div>
</section>

  }
}

export default Features08
