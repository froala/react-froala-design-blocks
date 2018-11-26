import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Features10 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h1>Features</h1>
      </div>
    </div>
    <div className="row text-center justify-content-center mt-5">
      <div className="col-12 col-sm-6 col-lg-3">
        <img alt="image" className="fdb-icon" src="./imgs/icons/monitor.svg" />
        <h3><strong>Feature One</strong></h3>
        <p>Far far away, behind the word mountains, far from the countries</p>
      </div>

      <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
        <img alt="image" className="fdb-icon" src="./imgs/icons/map-pin.svg" />
        <h3><strong>Feature Two</strong></h3>
        <p>Separated they live in Bookmarksgrove right at the coast</p>
      </div>

      <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
        <img alt="image" className="fdb-icon" src="./imgs/icons/life-buoy.svg" />
        <h3><strong>Feature Three</strong></h3>
        <p>A small river named Duden flows by their place and supplies it</p>
      </div>

      <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
        <img alt="image" className="fdb-icon" src="./imgs/icons/package.svg" />
        <h3><strong>Feature Four</strong></h3>
        <p>Duden flows by their place far far away, behind the word mountains.</p>
      </div>
    </div>
  </div>
</section>

  }
}

export default Features10
