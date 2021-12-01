import React, { Component } from 'react';

class Pricings03 extends Component {
  render() {
    return <section className="fdb-block" style={{backgroundImage: 'url(imgs/hero/red.svg)'}}>
  <div className="container">
    <div className="row text-center">
      <div className="col">
        <h1 className="text-white">Pricing</h1>
      </div>
    </div>

    <div className="row mt-5 align-items-center">
      <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center">
        <div className="fdb-box p-4">
          <h2>Hobby</h2>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia.</p>

          <p className="h1 mt-5 mb-5">$99</p>

          <p><a href="https://www.froala.com" className="btn btn-dark">Buy Now</a></p>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
        <div className="fdb-box px-4 pt-5">
          <h2>Advanced</h2>
          <p className="lead">Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p>

          <p className="h1 mt-5 mb-5">$299</p>

          <p><a href="https://www.froala.com" className="btn btn-secondary">Buy Now</a></p>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
        <div className="fdb-box p-4">
          <h2>Business</h2>
          <p className="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost life.</p>

          <p className="h1 mb-5 mt-5">$799</p>

          <p><a href="https://www.froala.com" className="btn btn-dark">Buy Now</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Pricings03
