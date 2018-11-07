import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Footers07 extends Component {
  render() {
    return <footer className="fdb-block footer-small">
  <div className="container">
    <div className="row text-center align-items-center">
      <div className="col-12 col-lg-2 text-lg-left">
        <img alt="image" src="./imgs/img_logo.png" height="40" />
      </div>

      <div className="col mt-4 mt-lg-0 text-center">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="https://www.froala.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Privacy Policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">About</a>
          </li>
        </ul>
      </div>

      <div className="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right">
        <a href="https://www.froala.com" className="mx-2"><i className="fab fa-twitter" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><i className="fab fa-facebook" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><i className="fab fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><i className="fab fa-pinterest" aria-hidden="true"></i></a>
        <a href="https://www.froala.com" className="mx-2"><i className="fab fa-google" aria-hidden="true"></i></a>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col text-center">
        © 2018 Froala. All Rights Reserved
      </div>
    </div>
  </div>
</footer>

  }
}

export default Footers07
