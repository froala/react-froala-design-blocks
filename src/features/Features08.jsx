import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Features08 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h1>Features</h1>
        <img alt="image" className="img-fluid mt-5" src="./imgs/img_very_wide.svg" />
      </div>
    </div>

    <div className="row text-center justify-content-center mt-5">
      <div className="col-12 col-sm-4 col-lg-3 m-md-auto">
        <img alt="image" className="fdb-icon" src="./imgs/img_round.svg" />
        <h3><strong>Feature 1</strong></h3>
      </div>

      <div className="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
        <img alt="image" className="fdb-icon" src="./imgs/img_round.svg" />
        <h3><strong>Feature 2</strong></h3>
      </div>

      <div className="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">
        <img alt="image" className="fdb-icon" src="./imgs/img_round.svg" />
        <h3><strong>Feature 3</strong></h3>
      </div>
    </div>
  </div>
</section>

  }
}

export default Features08
