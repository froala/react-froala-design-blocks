import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Features04 extends Component {
  render() {
    return <section className="fdb-block bg-dark" style={{backgroundImage: 'url(imgs/hero/purple.svg)'}}>
  <div className="container">
    <div className="row">
      <div className="col text-center">
        <h1>Froala Design Blocks</h1>
      </div>
    </div>

    <div className="row-70"></div>

    <div className="row text-center justify-content-sm-center no-gutters">
      <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto">
        <div className="fdb-box fdb-touch">
          <h2>Feature 1</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          <p className="mt-4"><a href="https://www.froala.com">Learn More <i className="fas fa-angle-right"></i></a></p>
        </div>
      </div>
      <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
        <div className="fdb-box fdb-touch">
          <h2>Feature 2</h2>
          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p className="mt-4"><a href="https://www.froala.com">Learn More <i className="fas fa-angle-right"></i></a></p>
        </div>
      </div>
      <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
        <div className="fdb-box fdb-touch">
          <h2>Feature 3</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <p className="mt-4"><a href="https://www.froala.com">Learn More <i className="fas fa-angle-right"></i></a></p>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Features04
