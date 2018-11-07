import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Footers11 extends Component {
  render() {
    return <footer className="fdb-block footer-small">
  <div className="container">
    <div className="row align-items-center text-center">
      <div className="col-12 col-lg-4 text-lg-left">
        © 2018 Froala
      </div>

      <div className="col-12 col-lg-4 mt-4 mt-lg-0">
        <img alt="image" src="./imgs/img_logo.png" height="40" />
      </div>

      <div className="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0">
        <ul className="nav justify-content-lg-end justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Privacy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">About</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  }
}

export default Footers11
