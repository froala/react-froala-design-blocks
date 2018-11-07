import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Forms02 extends Component {
  render() {
    return <section className="fdb-block" style={{backgroundImage: 'imgs/bg_2.svg'}}>
  <div className="container">
    <div className="fdb-box">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-6">
          <h2>Join us!</h2>
          <p className="h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
        </div>
        <div className="col-12 col-lg-5 text-center">
          <div className="input-group mt-4">
            <input type="text" className="form-control" placeholder="Enter your email address" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  }
}

export default Forms02
