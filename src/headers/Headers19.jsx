import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Headers19 extends Component {
  render() {
    return <header className="bg-dark">
  <div className="container">
    <nav className="navbar navbar-expand-md no-gutters">
      <div className="col-2 text-left">
        <a href="https://www.froala.com">
          <img src="./imgs/logo.png" height="30" alt="image" />
        </a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-3" aria-controls="navbarNav14" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-3" id="navbarNav14">
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

      <div className="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-3">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">Log In <i className="fas fa-sign-in-alt"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

  }
}

export default Headers19
