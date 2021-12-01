import React, { Component } from 'react';

class Pricings01 extends Component {
  render() {
    return <section className="fdb-block" style={{backgroundImage: 'url(./imgs/shapes/1.svg)'}}>
  <div className="container">
    <div className="row text-center">
      <div className="col">
        <h1 className="text-light">Pricing</h1>
      </div>
    </div>

    <div className="row mt-5 align-items-center">
      <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center">
        <div className="fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded">
          <h2>Hobby</h2>
          <p className="lead"><strong>$9 / month</strong></p>
          <p className="h3 font-weight-light">Even the all-powerful Pointing has no control about.</p>

          <ul className="text-left mt-5 mb-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <p><a href="https://www.froala.com" className="btn btn-outline-primary mt-4">Subscribe</a></p>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
        <div className="fdb-box shadow pb-5 pt-5 pl-3 pr-3 fdb-touch rounded">
          <h2 className="text-primary">Professional</h2>
          <p className="lead"><strong>$19 / month</strong></p>
          <p className="h3 font-weight-light">Far far away, behind the word mountains, far from.</p>

          <ul className="text-left mt-5 mb-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <p><a href="https://www.froala.com" className="btn btn-primary mt-4">Subscribe</a></p>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
        <div className="fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded">
          <h2>Business</h2>
          <p className="lead"><strong>$49 / month</strong></p>
          <p className="h3 font-weight-light">Wild Question Marks, but the Little Blind Text didn’t listen.</p>

          <ul className="text-left mt-5 mb-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <p><a href="https://www.froala.com" className="btn btn-outline-primary mt-4">Subscribe</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Pricings01
