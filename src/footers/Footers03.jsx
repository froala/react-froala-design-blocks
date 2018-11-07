import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Footers03 extends Component {
  render() {
    return <footer className="fdb-block footer-small">
  <div className="container">
    <div className="row text-center align-items-center">
      <div className="col-12 col-md-8">
        <ul className="nav justify-content-center justify-content-md-start align-items-center">
          <li className="nav-item">
            <a className="nav-link active" href="https://www.froala.com">
                <img alt="image" src="./imgs/img_logo.png" height="40" />
              </a>
          </li>
          <li className="w-100 d-block d-sm-none"></li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Terms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">About</a>
          </li>
        </ul>
      </div>

      <div className="col-12 col-md-4 mt-4 mt-md-0 text-md-right">
        © 2013-2018 Froala
      </div>
    </div>
  </div>
</footer>

  }
}

export default Footers03
