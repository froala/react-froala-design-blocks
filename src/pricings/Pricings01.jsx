import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Pricings01 extends Component {
  render() {
    return <section className="fdb-block">
  <div className="container">
    <div className="row text-center">
      <div className="col">
        <h1>Pricing</h1>
      </div>
    </div>

    <div className="row mt-5 align-items-center">
      <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center">
        <div className="bg-dark pb-5 pt-5 pl-3 pr-3 rounded">
          <h2 className="font-weight-light">Hobby</h2>
          <p className="h2"><strong>$9 / month</strong></p>
          <p className="h3">Even the all-powerful Pointing has no control about the blind texts.</p>

          <ul className="text-left mt-5 mb-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <p><a href="https://www.froala.com" className="btn btn-primary mt-4">Subscribe</a></p>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
        <div className="bg-dark pb-5 pt-5 pl-3 pr-3 fdb-touch rounded">
          <h2 className="font-weight-light">Professional</h2>
          <p className="h2"><strong>$19 / month</strong></p>
          <p className="h3">Far far away, behind the word mountains, far from the countries.</p>

          <ul className="text-left mt-5 mb-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <p><a href="https://www.froala.com" className="btn btn-primary mt-4">Subscribe</a></p>
        </div>
      </div>

      <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
        <div className="bg-dark pb-5 pt-5 pl-3 pr-3 rounded">
          <h2 className="font-weight-light">Business</h2>
          <p className="h2"><strong>$49 / month</strong></p>
          <p className="h3">Wild Question Marks, but the Little Blind Text didn’t listen.</p>

          <ul className="text-left mt-5 mb-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <p><a href="https://www.froala.com" className="btn btn-primary mt-4">Subscribe</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Pricings01
