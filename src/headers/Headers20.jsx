import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Headers20 extends Component {
  render() {
    return <header className="bg-dark">
  <div className="container">
    <nav className="navbar navbar-expand-md no-gutters">
      <div className="col-3 text-left">
        <a href="https://www.froala.com">
          <img src="./imgs/img_logo.png" height="30" alt="image" />
        </a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-4" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse navbar-collapse-4 justify-content-center col-md-6" id="navbarNav7">
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item active">
            <a className="nav-link" href="https://www.froala.com">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Contact</a>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse navbar-collapse-4">
        <ul className="navbar-nav ml-auto justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Log In</a>
          </li>
        </ul>

        <a className="btn btn-primary ml-md-3" href="https://www.froala.com">Register</a>
      </div>
    </nav>
  </div>
</header>

  }
}

export default Headers20
