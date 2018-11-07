import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Forms04 extends Component {
  render() {
    return <section className="fdb-block" style={{backgroundImage: 'imgs/alt_wide_1.svg'}}>
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-8 col-lg-7 col-xl-5 text-left">
        <div className="row">
          <div className="col">
            <h1>Sign Up</h1>
            <p className="h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
          </div>
        </div>
        <div className="row">
          <div className="col mt-4">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Forms04
