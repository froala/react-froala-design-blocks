import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Headers14 extends Component {
  render() {
    return <header className="bg-dark">
  <div className="container">
    <nav className="navbar navbar-expand-md">
      <a className="navbar-brand" href="https://www.froala.com">
        <img src="./imgs/logo.png" height="30" alt="image" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav9" aria-controls="navbarNav9" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav9">
        <ul className="navbar-nav mr-auto">
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
        </ul>

        <ul className="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://www.froala.com"><i className="fab fa-slack"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com"><i className="fab fa-twitter"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com"><i className="fab fa-github"></i></a>
          </li>
        </ul>

        <a className="btn btn-outline-light ml-md-3" href="https://www.froala.com">Button</a>
      </div>
    </nav>
  </div>
</header>

  }
}

export default Headers14
