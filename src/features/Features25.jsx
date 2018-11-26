import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Features25 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h1>There is a feature for everyone</h1>
        <p className="lead"><a href="https://www.froala.com">See all features <i className="fas fa-angle-right"></i></a>
        </p>
      </div>
    </div>

    <div className="row text-center justify-content-center mt-5">
      <div className="col-10 col-sm-3">
        <img alt="image" className="img-fluid rounded" src="./imgs/hero/blue.svg" />
        <h3><strong>Feature One</strong></h3>
      </div>
      <div className="col-10 col-sm-3 pt-5 pt-sm-0">
        <img alt="image" className="img-fluid rounded" src="./imgs/hero/red.svg" />
        <h3><strong>Feature Two</strong></h3>
      </div>

      <div className="col-10 col-sm-3 pt-5 pt-sm-0">
        <img alt="image" className="img-fluid rounded" src="./imgs/hero/purple.svg" />
        <h3><strong>Feature Three</strong></h3>
      </div>

      <div className="col-10 col-sm-3 pt-5 pt-sm-0">
        <img alt="image" className="img-fluid rounded" src="./imgs/hero/yellow.svg" />
        <h3><strong>Feature Four</strong></h3>
      </div>
    </div>
  </div>
</section>

  }
}

export default Features25
